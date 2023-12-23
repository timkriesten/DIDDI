# This scraper will scrape the first page only. The easiest way for scraping of page 2, 3 etv. would be a list of urls to scrape like
# ... https://tu-dresden.de/tu-dresden/veranstaltungskalender/veranstaltungskalender?b_start:int=7
# ... https://tu-dresden.de/tu-dresden/veranstaltungskalender/veranstaltungskalender?b_start:int=14
# ...
# Organiser not implemented (not provided)
import tkinter as tk
from tkinter import messagebox
import datetime as dt
import requests
import locale
from bs4 import BeautifulSoup
from definitions import InputWebsiteScraper, Event

class TUDresden(InputWebsiteScraper):
    name = 'TU Dresden'
    url = 'https://tu-dresden.de/tu-dresden/veranstaltungskalender/veranstaltungskalender?b_start:int=0'
    urldev = r'dev_websites/Veranstaltungskalender — TU Dresden — TU Dresden.htm'
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

        # find code part with event list
        event_list = soup.find('section',{'id':r'board-results'})

        #find events
        event_container = event_list.findAll('div',{'class':'contentSlot'})

        #set timezone
        locale.setlocale(locale.LC_TIME, 'de_DE')

        for event in event_container:

            #date and type
            date_type = event.find('p',{'class':'date'}).find('span').text.replace('\n','').replace(' ','').split(';')
            event_type =date_type[1]
            # year and date
            try: yeardate = dt.datetime.strptime(date_type[0], '%d.%m.%Y')
            except:
                messagebox.showwarning('>>> WARNING <<<', 'Years and dates in ' + self.name + '-Scraper may not be correct.')
                break

            # Go to next date if start_date lays in past
            if(yeardate<search_start_date):continue
            # Stop searching when enddate is reached
            if(yeardate>search_end_date):break

            # time (multiple character replacements and splits of string are needed)
            str_hh_mm = event.find('div',{'class': 'columns small-12 medium-6 time'}).text.replace('\n','').replace(r' ','').split('Zeit')[1].split('-')[0].split(':')

            # Year, sate and time 
            yeardatetime = dt.datetime(yeardate.year,yeardate.month,yeardate.day,int(str_hh_mm[0]),int(str_hh_mm[1]))

            #Eventtitle
            event_title = event.find('h2',{'class': 'headline'}).text

            #Url (here first since url contains date information at the end)
            url = event.find('ul', {'class': 'linklist'}).find('a')['href']

            #Location
            loc_help = event.find('address')
            if loc_help != None: event_location = loc_help.text
            else:event_location = 'no location found'


            #Description
            event_details = 'not implemented - see url'
            
            events += [Event(
                title = event_title,
                start_date = yeardatetime,
                url = url,
                location = event_location,
                event_type = event_type,
                description_long = event_details,
            )]
        print('----------------------------')
        print(events)
        return events

#devScraper = TUDresden()
#devScraper.scrape_events(search_start_date = dt.datetime(2023,12,16), search_end_date = dt.datetime(2024,1,9))