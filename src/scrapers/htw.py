# This scraper will not look for location and eventtype which are given on sub pages.

from tkinter import messagebox
from bs4 import BeautifulSoup
from definitions import InputWebsiteScraper, Event
import requests
import datetime as dt
import re
import locale
from dateutil.relativedelta import *
import settings

testmode = False
class HTW(InputWebsiteScraper):
    name = 'HTW Dresden'
    url = 'https://www.htw-dresden.de/hochschule/aktuelles/veranstaltungskalender'
    urldev = r'dev_websites/Veranstaltungskalender_ HTW Dresden.htm'
    ready = True

    def scrape_events(self, search_start_date: dt.datetime, search_end_date: dt.datetime) -> list[Event]:
        #Initialise empty Event list
        events: list[Event] = []

        # distinguish between developer and ready mode
        if(self.ready):
            try:
                response =  requests.get(self.url)
            except:
                if(settings.global_dockermode):print('>>> No response from Website <<<', 'No response from Website. Please check website: ' + self.url)
                else: messagebox.showwarning('>>> No response from Website <<<', 'No response from Website. Please check website: ' + self.url)
                return events
            soup = BeautifulSoup(response.text, "html.parser")  #response.text or response.content  
        else:
            with open(self.urldev, 'r', encoding='utf-8') as file:
                webpage_content = file.read()
            soup = BeautifulSoup(webpage_content, "html.parser")

        #find events
        try:
            event_container = soup.findAll('li',{'class': 'htw_events-results__item'})
        except:
            if(settings.global_dockermode):print('Empty event list.','Eventlist is empty. No events in calendar or a scraping issue due to website change might be the issue.')
            else:messagebox.showwarning(title='Empty event list.', message='Eventlist is empty. No events in calendar or a scraping issue due to website change might be the issue.')
            exit()  

        #set timezone
        locale.setlocale(locale.LC_TIME, settings.global_locale)

        #loop over events in event_container
        for event in event_container:

            #Eventtitle
            event_title = event.find('h3',{'class', 'htw_events-results__title'}).text

            # Find date and time
            # Chech first if event takes place multiple days
            # Multiple day event look like: 31.01.2025 14:00 Uhr - 01.02.2025 18:00 Uhr
            # Single day event looks like: 28.01.2025 | 17:00  - 18:00 Uhr

            # removeing tabs, linebreaks, leading and trailing spaces and 'Uhr'
            date_time_str = event.find('span',{'class':'htw_events-results__date'}).text.replace('\n','').replace('\t','').replace('Uhr','').lstrip().rstrip()
            
            #define possible date formats
            formats = [ '%d.%m.%Y %H:%M',       # Format like 13.03.2025 10:00 Uhr -  20.03.2025 13:15 Uhr
                        '%d.%m.%Y | %H:%M',     # Format like 14.03.2025 |  12:40  -  13:00 Uhr
                        '%d.%m.%Y / %H:%M',     # format like 14.03.2025 / 12:33
                        '%H:%M'                 # For single 13:00 
                        ]
            # check for '-' in date_time_string --> if true --> there is a from to date (one day or single day)
            event_end_date = None
            if '-' in date_time_str:
                # clean multiple spaces
                date_time_str = re.sub(r'\s+',' ',date_time_str)
                help = date_time_str.split(' - ')
                for fmt in formats:
                    try:
                        yeardatetime = dt.datetime.strptime(help[0],fmt)
                    except ValueError:
                        continue
                for fmt in formats:
                    try:
                        event_end_date = dt.datetime.strptime(help[1],fmt)
                    except ValueError:
                        continue    
            # Just one date to handle
            else:
                for fmt in formats:
                    try:
                        yeardatetime = dt.datetime.strptime(date_time_str,fmt) 
                    except ValueError:
                        continue
            try:
                yeardatetime
            except:
                if(settings.global_dockermode):print('>>> No Date<<<', 'No date found for ' + event_title + '. scraper stopped.\nPlease check date format:' + date_time_str)
                else:messagebox.showwarning('>>> No Date<<<', 'No date found for ' + event_title + '. scraper stopped.\nPlease check date format:' + date_time_str)
                break
            # Go to next date if start_date lays in past
            if(yeardatetime<search_start_date):continue
            
            # Stop searching when enddate is reached
            if(yeardatetime>search_end_date):
                break

            # Find Eventtype
            event_type = 'not given'
            
            #Url (here first since url contains date information at the end)
            url = r'https://www.htw-dresden.de' + event.find('a', {'class': 'htw_events-results__link'})['href']

            #Location
            event_location = 'no implemented - see  event-url'

            #Description
            try: event_details = event.find('p',{'class': 'htw_events-results__text'}).text
            except: event_details = 'not given - see event-url'
            
            events += [Event(
                title = event_title,
                start_date = yeardatetime,
                end_date = event_end_date,
                url = url,
                location = event_location,
                event_type = event_type,
                description_long = event_details,
            )]
        return events
    
if(testmode):
    devScraper = HTW()
    evs = devScraper.scrape_events(search_start_date = dt.datetime(2025,3,13), search_end_date = dt.datetime(2025,3,20))
    for ev in evs:
        print(ev.title)
        print(ev.start_date)
        print(ev.event_type)
        print(ev.location)
        print(ev.url)
        print('-----------------------------')
