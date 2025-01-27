from tkinter import messagebox
import datetime as dt
import requests
import locale
from bs4 import BeautifulSoup
from definitions import InputWebsiteScraper, Event

testmode = False
class InternationaleGaerten(InputWebsiteScraper):
    name = 'Internationale Gaerten'
    url = 'https://internationale-gaerten-dresden.de/events'
    urldev = r'dev_websites/Internationale Gärten Dresden _ Kalender.htm'
    ready = True

    def scrape_events(self, search_start_date: dt.datetime, search_end_date: dt.datetime) -> list[Event]:
        events: list[Event] = []
        # distinguish between developer and ready mode
        if(self.ready):
            response =  requests.get(self.url)
            soup = BeautifulSoup(response.text, "html.parser")  #response.text or response.content  
        else:
            with open(self.urldev, 'r', encoding='utf-8') as file:
                webpage_content = file.read()
            soup = BeautifulSoup(webpage_content, "html.parser")

        #find event items
        event_container = soup.findAll('div',{'class':'element-item'})

        #check if event_container is empty (no events in claender or scraping issue)
        if not event_container:
            messagebox.showwarning(title='Empty event list.', message='Eventlist is empty. No events in calendar or a scraping issue due to website change might be the issue.')

        #set timezone
        locale.setlocale(locale.LC_TIME, 'de_DE')

        for event in event_container:
            #date and year
            div_list = event.findAll('div')

            #extract year and date
            try: yeardate = dt.datetime.strptime(div_list[5].text.split('\n')[1].split(', ')[1], '%d.%m.%Y')
            except:
                messagebox.showwarning('>>> WARNING <<<', 'Years and dates in ' + self.name + '-Scraper may not be corrected.')
                break

            # Go to next date if start_date lays in past
            if(yeardate<search_start_date):continue
            # Stop searching when enddate is reached
            if(yeardate>search_end_date):break

            # extract eventtime
            str_hh_mm_ev_start = div_list[5].text.split('\n')[2].replace(r' ','').split(':') # Format [0]= HH,[1]= MM
            str_hh_mm_ev_end = div_list[5].text.split('\n')[5].replace(r' ','') # Format [0]= HH,[1]= MM
            
            # Year, sate and time 
            yeardatetime = dt.datetime(yeardate.year,yeardate.month,yeardate.day,int(str_hh_mm_ev_start[0]),int(str_hh_mm_ev_start[1]))

            #Eventtitle
            event_title = div_list[1].text.split('\n')[2]

            #Eventtype
            event_type = event_title = div_list[1].text.split('\n')[1]

            #Event url not supplied --> Website url instead
            url = self.url

            #Location
            event_location = div_list[5].text.split('\n')[6].replace('  ','')

            #Description
            event_details = 'not supplied'
            
            events += [Event(
                title = event_title,
                start_date = yeardatetime,
                url = url,
                location = event_location,
                event_type = event_type,
                description_long = event_details,
            )]

        return events
    
if(testmode):
    devScraper = InternationaleGaerten()
    evs = devScraper.scrape_events(search_start_date = dt.datetime(2025,1,25), search_end_date = dt.datetime(2025,2,5))
    for ev in evs:
        print(ev.title)