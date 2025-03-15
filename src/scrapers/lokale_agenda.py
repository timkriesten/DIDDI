from tkinter import messagebox
from bs4 import BeautifulSoup
from definitions import InputWebsiteScraper, Event
import requests
import datetime as dt
import locale
from dateutil.relativedelta import *
import settings

testmode = False
class LokaleAgenda(InputWebsiteScraper):
    name = 'Lokale Agenda'
    url = 'https://la-dresden.de/startseite/veranstaltungen/'
    ready = True

    def scrape_events(self, search_start_date: dt.datetime, search_end_date: dt.datetime)-> list[Event]:
        print(self.name, 'Scraper started.')
        # initialise event list
        events: list[Event] = []
                
        #website response to text (response.text) or content (response.content)
        try:
            response =  requests.get(self.url)
        except:
            if(settings.global_dockermode):print('>>> No response from Website <<<', 'No response from Website. Please check website: ' + self.url)
            else: messagebox.showwarning('>>> No response from Website <<<', 'No response from Website. Please check website: ' + self.url)
            return events
        soup = BeautifulSoup(response.text, "html.parser")

        #set timezone
        locale.setlocale(locale.LC_TIME, 'de_DE')
        # find events
        evs = soup.find('div',{'id':'grid_kalender_container'}).findAll('a')
        for ev in evs:
            # URL of event
            event_url = ev['href']
            # TITLE
            event_title = ev.find('p',{'class':'medium margin0 eventname'}).text
            # different time formats occur here
            #   Mi.. 13. Sep 2023, 19:00 Uhr | Deutsches Hygiene-Museum Dresden
            #   Fr.. 31. Mrz 2023 - So. 07. Jan 2024, 10:00 Uhr | Verkehrsmuseum Dresden
            #   therefore split  at '| '
            # In the past there was just one '.' behind the day --> Funktion to replace '..' with '.'
            # Additionally, sometimes month are abriviated with a '.' and sometimes written out:
            # 'DO.. 03.Apr. 2025, 10:00 Uhr | Leibniz-Insitut für ökologische Raumentwicklung (IÖR)'
            # 'Mo. 17. März 2025, 14:00 Uhr | Online'
            formats = [ '%a. %d. %b. %Y',  # Format with abbreviated month (e.g., 'Mi. 06. Mär. 2024')
                        '%a. %d. %B %Y'    # Format with full month name (e.g., 'Mo. 17. März 2025')
                        ]
            help = ev.find('p', {'class': 'medium condensed margin0 eventdate'}).text.replace('..','.').split('| ')

            # EVENTTIME
            # Check if the character '-' exists in the string using find() -->  means that event lasts more than one day
            if help[0].find('-') != -1:
                event_time = help[0].split(', ')[1].replace(' Uhr', '')
                for fmt in formats:
                    try:
                        event_start_date = dt.datetime.strptime(help[0].split(' -')[0],fmt)
                        event_end_date = dt.datetime.strptime(help[0].split('- ')[1].split(',')[0],fmt)
                    except ValueError:
                        continue
            else:
                event_time = help[0].split(', ')[1].replace(' Uhr', '')
                for fmt in formats:
                    try:
                        event_start_date = dt.datetime.strptime(help[0].split(', ')[0],fmt)
                    except ValueError:
                        continue
                event_end_date =None
            
            # Go to next date if start_date lays in past
            if(event_start_date<search_start_date):continue            
            #stop searching when enddate is reached
            if(event_start_date>search_end_date):break
            # EVENT LOCATION
            event_location = help[1]
            # EVENT TIME
            event_type = ev.find('p',{'class': 'uppercase medium margin0 eventcategorie'}).text
            # EVENT DETAILS
            event_details = ''
            datetime_string = event_start_date.strftime('%Y-%m-%d')+' ' +event_time.replace(' ','')
            
            events += [Event(
                title = event_title,
                start_date = dt.datetime.strptime(datetime_string, "%Y-%m-%d %H:%M"),
                end_date = event_end_date,
                url = event_url,
                location = event_location,
                event_type = event_type,
                description_long = event_details
            )]

        return events
    
if(testmode):
    devScraper = LokaleAgenda()
    evs = devScraper.scrape_events(search_start_date = dt.datetime(2025,1,25), search_end_date = dt.datetime(2025,2,5))
    for ev in evs:
        print(ev.title)