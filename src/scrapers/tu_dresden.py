# This scraper will scrape the first page only. The easiest way for scraping of page 2, 3 etv. would be a list of urls to scrape like
# ... https://tu-dresden.de/tu-dresden/veranstaltungskalender/veranstaltungskalender?b_start:int=7
# ... https://tu-dresden.de/tu-dresden/veranstaltungskalender/veranstaltungskalender?b_start:int=14
# ...
# Organiser not implemented (not provided)
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
class TUDresden(InputWebsiteScraper):
    name = 'TU Dresden'
    url = 'https://tu-dresden.de/tu-dresden/veranstaltungskalender/veranstaltungskalender?b_start:int=0'
    urldev = r'dev_websites/Veranstaltungskalender — TU Dresden — TU Dresden.htm'
    ready = True

    def scrape_events_2(self, search_start_date: dt.datetime, search_end_date: dt.datetime,eventsREC) -> list[Event]:
        #this scraper works recursive
        events: list[Event] = eventsREC

        # distinguish between developer and ready mode
        if(self.ready):
            try:
                response =  requests.get(self.url)
            except:
                if(settings.global_dockermode):print('>>> No response from Website <<<', 'No response from Website. Please check website: ' + self.url)
                else: messagebox.showwarning('>>> No response from Website <<<', 'No response from Website. Please check website: ' + self.url)
                return eventsREC
            soup = BeautifulSoup(response.text, "html.parser")  #response.text or response.content  
        else:
            with open(self.urldev, 'r', encoding='utf-8') as file:
                webpage_content = file.read()
            soup = BeautifulSoup(webpage_content, "html.parser")

        # find code part with event list
        event_list = soup.find('section',{'id':r'board-results'})

        #find events
        event_container = event_list.findAll('div',{'class':'contentSlot'})

        #check if event_container is empty (no events in claender or scraping issue)
        if not event_container:
            if(settings.global_dockermode):print('>>> Empty event list. <<<', 'Eventlist is empty. No events in calendar or a scraping issue due to website change might be the issue.')
            else: messagebox.showwarning(title='Empty event list.', message='Eventlist is empty. No events in calendar or a scraping issue due to website change might be the issue.')
            exit()

        #set timezone
        locale.setlocale(locale.LC_TIME, 'de_DE.UTF-8')

        for event in event_container:
            #date and type
            date_type = event.find('p',{'class':'date'}).find('span').text.replace('\n','').replace(' ','').split(';')
            try: event_type =date_type[1]
            except: event_type = 'not given'
            # year and date
            try: 
                if('-' in date_type[0]):
                    yeardate = dt.datetime.strptime(date_type[0].split('-')[0], '%d.%m.%Y')
                else:
                    yeardate = dt.datetime.strptime(date_type[0], '%d.%m.%Y')
            except:
                if(settings.global_dockermode):print('>>> WARNING <<<', 'Years and dates in ' + self.name + '-Scraper may not be correct.')
                else:messagebox.showwarning('>>> WARNING <<<', 'Years and dates in ' + self.name + '-Scraper may not be correct.')
                break
            # Go to next date if start_date lays in past
            if(yeardate<search_start_date):continue
            # Stop searching when enddate is reached
            if(yeardate>search_end_date):
                break
            
                        #Eventtitle
            event_title = event.find('h2',{'class': 'headline'}).text

            #Url (here first since url contains date information at the end)
            url = event.find('ul', {'class': 'linklist'}).find('a')['href']

            # time (multiple character replacements and splits of string are needed)
            time_str = event.find('div',{'class': 'columns small-12 medium-6 time'}).text.replace('\n','').replace(' ','').replace('Zeit','').replace('Uhr','')
            #is there a date in time_str?
            multiple_days = False
            #Multiple days like this: 07.02.2025,15:00-08.02.2025,20:00 or just a str. time
            if(',' in time_str):
                multiple_days = True
                str_hh_mm = time_str.split(',')[1].split('-')[0].split(':')
                str_hh_mm_end = time_str.split(',')[2].split(':')
                if(settings.global_dockermode):print('>>> Warning. <<<', 'This event might run on several days. Please check the website.\n' +'Event: ' +event_title + '\n Website: ' + url)
                else:messagebox.showwarning(title='Warning.', message='This event might run on several days. Please check the website.\n' +'Event: ' +event_title + '\n Website: ' + url)
            if('Ganztägig'in time_str):
                yeardatetime = dt.datetime(yeardate.year,yeardate.month,yeardate.day)
                yeardatetime_end = None
            elif('-' in time_str):
                # split at "-"
                if(not multiple_days):
                    str_hh_mm = time_str.split('-')[0].split(':')
                    str_hh_mm_end = time_str.split('-')[1].split(':')
                yeardatetime = dt.datetime(yeardate.year,yeardate.month,yeardate.day,int(str_hh_mm[0]),int(str_hh_mm[1]))
                yeardatetime_end = dt.datetime(yeardate.year,yeardate.month,yeardate.day,int(str_hh_mm_end[0]),int(str_hh_mm_end[1]))
            else:
                str_hh_mm = time_str.split(':')
                yeardatetime_end = None
                yeardatetime = dt.datetime(yeardate.year,yeardate.month,yeardate.day,int(str_hh_mm[0]),int(str_hh_mm[1]))

            #Location
            loc_help = event.find('address')
            if loc_help != None: event_location = loc_help.text
            else:event_location = 'no location found'

            #Description
            event_details = 'not implemented - see url'
            
            events += [Event(
                title = event_title,
                start_date = yeardatetime,
                end_date = yeardatetime_end,
                url = url,
                location = event_location,
                event_type = event_type,
                description_long = event_details,
            )]
        # check sub pages (here normaly max 3)
        if(self.ready and yeardate<search_end_date):
            try:
                next_page_link = soup.find('li',{'class':'pagination-next'}).find('a')['href']
                self.url = next_page_link
                return devScraper.scrape_events_2(search_start_date = search_start_date, search_end_date = search_end_date,eventsREC=events)
            except:
                print('No further page.')
                return events
        return events

    def scrape_events(self, search_start_date: dt.datetime, search_end_date: dt.datetime)-> list[Event]:
        return self.scrape_events_2(search_start_date = search_start_date,search_end_date=search_end_date,eventsREC=[])
    
if(testmode):
    devScraper = TUDresden()
    evs = devScraper.scrape_events(search_start_date = dt.datetime(2025,1,25), search_end_date = dt.datetime(2025,3,5))
    for ev in evs:
        print(ev.title)
        print(ev.start_date)
        print('-----------------------------')