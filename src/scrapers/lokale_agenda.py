from bs4 import BeautifulSoup
from src.definitions import InputWebsiteScraper, Event
import requests
import datetime as dt
import locale

class LokaleAgendaScraper(InputWebsiteScraper):
    name: str = 'Lokale Agenda'
    url: str = 'https://la-dresden.de/startseite/veranstaltungen/'

    def scrape_events(self, end_date: dt.datetime, start_date: dt.datetime = dt.datetime.now()) -> list[Event]:
        print(self.name, 'Scraper started.')
        # initialise event list
        events: list[Event] = []
                
        #website response to text (response.text) or content (response.content)
        res =  requests.get(self.url)  
        soup = BeautifulSoup(res.text, "html.parser")

        #set timezone
        locale.setlocale(locale.LC_TIME, 'de_DE')
        # find events
        evs = soup.find('div',{'id':'grid_kalender_container'}).findAll('a')
        for ev in evs:
            # URL of event
            event_url = ev['href']
            # TITLE
            event_title = ev.find('p',{'class':'medium margin0 eventname'}).text
            # following text format
            #   Mi. 13. Sep 2023, 19:00 Uhr | Deutsches Hygiene-Museum Dresden
            #   Fr. 31. Mrz 2023 - So. 07. Jan 2024, 10:00 Uhr | Verkehrsmuseum Dresden
            #   therefore split  at '| '
            help = ev.find('p', {'class': 'medium condensed margin0 eventdate'}).text.split('| ')
            # EVENTTIME
            # Check if the character '-' exists in the string using find() -->  means that event lasts more than one day
            if help[0].find('-') != -1:
                event_time = help[0].split(', ')[1].replace(' Uhr', '')
                event_start_date = dt.datetime.strptime(help[0].split(' -')[0], '%a. %d. %b %Y')
                event_end_date = dt.datetime.strptime(help[0].split('- ')[1].split(',')[0], '%a. %d. %b %Y')
            else:
                event_time = help[0].split(', ')[1].replace(' Uhr', '')
                event_start_date = dt.datetime.strptime(help[0].split(', ')[0], '%a. %d. %b %Y')
                event_end_date =None
            
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
                descrption_long = event_details
            )]

        return events