from tkinter import messagebox
from bs4 import BeautifulSoup
from definitions import InputWebsiteScraper, Event
import requests
import datetime as dt
import re
import locale
from dateutil.relativedelta import *

testmode = True
class Template(InputWebsiteScraper):
    name = ''
    url = ''
    urldev = r''
    ready = False

    def scrape_events(self, search_start_date: dt.datetime, search_end_date: dt.datetime) -> list[Event]:
        # TODO: write scraping script
        events: list[Event] = []

        # distinguish between developer and ready mode
        if(self.ready):
            response =  requests.get(self.url)
            soup = BeautifulSoup(response.text, "html.parser")  #response.text or response.content  
        else:
            with open(self.urldev, 'r', encoding='utf-8') as file:
                webpage_content = file.read()
            soup = BeautifulSoup(webpage_content, "html.parser")

        # find code part with event list
        event_list = soup.find()

        #find events
        try:
            event_container = event_list.findAll()
        except:
            messagebox.showwarning(title='Empty event list.', message='Eventlist is empty. No events in calendar or a scraping issue due to website change might be the issue.')
            exit()  

        #set timezone
        locale.setlocale(locale.LC_TIME, 'de_DE')

        #loop over events in event_container
        for event in event_container:

            #Eventtitle
            event_title = event.find().text

            # Find date and time
            # Chech first if event takes place multiple days
            date_time_str = event.find()
            
            yeardatetime = 
            yeardatetime_end = 'not implemented'


            # Go to next date if start_date lays in past
            if(yeardatetime<search_start_date):continue
            # Stop searching when enddate is reached
            if(yeardatetime>search_end_date):
                break

            # Find Eventtype
            try: event_type = 
            except: event_type = 'not given'
            
            #Url (here first since url contains date information at the end)
            #url = event.find('ul', {'class': 'linklist'}).find('a')['href']

            #Location
            loc_help = event.find('')
            if loc_help != None: event_location = loc_help.text
            else:event_location = 'no location found'

            #Description
            try: event_details =
            except: event_details = 'not implemented - see url'
            
            events += [Event(
                title = event_title,
                start_date = yeardatetime,
                end_date = yeardatetime_end,
                url = url,
                location = event_location,
                event_type = event_type,
                description_long = event_details,
            )]

        # only needed for following pages
        if(self.ready and yeardatetime<search_end_date):
            try:
                next_page_link = soup.find('li',{'class':'pagination-next'}).find('a')['href']
                self.url = next_page_link
                return devScraper.scrape_events_2(search_start_date = search_start_date, search_end_date = search_end_date,eventsREC=events)
            except:
                print('No further page.')
                return events
        
        return events
    
if(testmode):
    devScraper = Template()
    evs = devScraper.scrape_events(search_start_date = dt.datetime(2025,1,25), search_end_date = dt.datetime(2025,3,5))
    for ev in evs:
        print(ev.title)
        print(ev.start_date)
        print(ev.event_type)
        print(ev.location)
        print('-----------------------------')
