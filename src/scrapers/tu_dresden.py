# This scraper will scrape the first page only. The easiest way for scraping of page 2, 3 etv. would be a list of urls to scrape like
# ... https://tu-dresden.de/tu-dresden/veranstaltungskalender/veranstaltungskalender?b_start:int=7
# ... https://tu-dresden.de/tu-dresden/veranstaltungskalender/veranstaltungskalender?b_start:int=14
# ...
# Organiser not implemented (not provided)
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

        #check if event_container is empty (no events in claender or scraping issue)
        if not event_container:
            messagebox.showwarning(title='Empty event list.', message='Eventlist is empty. No events in calendar or a scraping issue due to website change might be the issue.')
            exit()

        #set timezone
        locale.setlocale(locale.LC_TIME, 'de_DE')

        for event in event_container:
            #date and type
            date_type = event.find('p',{'class':'date'}).find('span').text.replace('\n','').replace(' ','').split(';')
            try: event_type =date_type[1]
            except: event_type = 'not given'
            # year and date
            try: yeardate = dt.datetime.strptime(date_type[0], '%d.%m.%Y')
            except:
                messagebox.showwarning('>>> WARNING <<<', 'Years and dates in ' + self.name + '-Scraper may not be correct.')
                break
            # Go to next date if start_date lays in past
            if(yeardate<search_start_date):continue
            # Stop searching when enddate is reached
            if(yeardate>search_end_date):
                break

            # time (multiple character replacements and splits of string are needed)
            time_str = event.find('div',{'class': 'columns small-12 medium-6 time'}).text.replace('\n','').replace(' ','').replace('Zeit','').replace('Uhr','')
            if('Ganztägig'in time_str):
                yeardatetime = dt.datetime(yeardate.year,yeardate.month,yeardate.day)
                yeardatetime_end = None
            elif('-' in time_str):
                str_hh_mm = time_str.split('-')[0].split(':')
                yeardatetime = dt.datetime(yeardate.year,yeardate.month,yeardate.day,int(str_hh_mm[0]),int(str_hh_mm[1]))
                str_hh_mm_end = time_str.split('-')[1].split(':')
                yeardatetime_end = dt.datetime(yeardate.year,yeardate.month,yeardate.day,int(str_hh_mm_end[0]),int(str_hh_mm_end[1]))
            else:
                str_hh_mm = time_str.split(':')
                yeardatetime_end = None
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
                end_date = yeardatetime_end,
                url = url,
                location = event_location,
                event_type = event_type,
                description_long = event_details,
            )]
        # check sub pages (here normaly max 3)
        if(self.ready and yeardate>search_end_date):
            try:
                next_page_link = soup.find('li',{'class':'pagination-next'}).find('a')['href']
                self.url = next_page_link
                devScraper.scrape_events(search_start_date = search_start_date, search_end_date = search_end_date)
            except:
                print('No further page.')
        return events

#devScraper = TUDresden()
#devScraper.scrape_events(search_start_date = dt.datetime(2023,12,16), search_end_date = dt.datetime(2024,9,19))