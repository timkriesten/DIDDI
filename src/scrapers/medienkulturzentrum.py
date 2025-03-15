# This scraper will scrape the first page only. The easiest way for scraping of page 2, 3 etv. would be a list of urls to scrape like
# ... https://www.medienkulturzentrum.de/angebote/page/2/
# ... https://www.medienkulturzentrum.de/angebote/page/3/
# ...
# Eventtype is not given or was not found on this website(s)
# Eventorganiser is not implemented --> continue at todo

import tkinter as tk
from tkinter import messagebox
import datetime as dt
import requests
import locale
from bs4 import BeautifulSoup
from definitions import InputWebsiteScraper, Event
import settings

testmode = False
class Medienkulturzentrum(InputWebsiteScraper):
    name = 'Medienkulturzentrum'
    url = 'https://www.medienkulturzentrum.de/angebote/'
    urldev = r'dev_websites/Angebote - Medienkulturzentrum Dresden.htm'
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
        event_list = soup.find('div',{'class':r'seminar-list'})
        #find events
        event_container = event_list.findAll('article')

        #set timezone
        locale.setlocale(locale.LC_TIME, 'de_DE')
        for event in event_container:
            date_str = event.find('small', {'class': 'date'}).text.replace('\t','').replace('\n','')
            
            #Eventtitle
            event_title = event.find('a')['title']

            # check for multiple or single day event, then extract date
            # multiple day-events contain a 'bis'
            if 'bis' in date_str:
                #multiple day event
                yeardate = dt.datetime.strptime(date_str.split('bis')[0].replace(' ',''), '%d.%m.%Y')
                if(settings.global_dockermode):print('>>> Multiple day event <<<', event_title + 'May take place on deveral days.\n' + 'Please check website for other dates: ' + self.url)
                else: messagebox.showwarning('>>> Multiple day event <<<', event_title + 'May take place on deveral days.\n' + 'Please check website for other dates: ' + self.url)
            else:
                #single day event
                yeardate = dt.datetime.strptime(date_str, '%d.%m.%Y')

            # Go to next date if start_date lays in past
            if(yeardate<search_start_date):continue

            # Stop searching when enddate is reached
            if(yeardate>search_end_date):break

            #Url (here first since url contains date information at the end)
            url = event['data-href']

            #Description
            event_details = event.find('p').text

            #Type
            event_type='not given/implemented'

            #scrape event subpage (url) for further information
            if(True):
                sub_response =  requests.get(url)
                sub_soup = BeautifulSoup(sub_response.text, "html.parser")  #response.text or response.content 
                sub_info_container = sub_soup.find('article', {'class': 'page-content col_3c alpha clearfix'})
                try:
                    #try to extract year,date and starttime; format should look like this: 'Start: 09.01.2024, 17:00'
                    yeardatetime = dt.datetime.strptime(sub_info_container.find('div',{'class':'col_4c alpha no-bottomSpace'}).find('p').text.replace('\t','').split(' -')[0], 'Start: %d.%m.%Y, %H:%M')
                except:
                    if(settings.global_dockermode):print('>>> WARNING <<<', 'No time found for ' + event_title + '-Scraper. Year and date information only. Hour is set to 0.')
                    else:messagebox.showwarning('>>> WARNING <<<', 'No time found for ' + event_title + '-Scraper. Year and date information only. Hour is set to 0.')
                    yeardatetime = yeardate

                # Organiser/organisation
                event_organiser = 'not implemented'

                #Location
                event_location = sub_info_container.find('div',{'class':r'col_3 alpha'}).find('address').text.replace('\t','').replace('\n','')
            else:
                #Location
                event_location = 'not given'
                # Organiser/organisation
                event_organiser = 'not given'
                # Just on main page
                yeardatetime =yeardate

            events += [Event(
                title = event_title,
                start_date = yeardatetime,
                url = url,
                location = event_location,
                event_type = event_type,
                description_long = event_details,
                organiser = event_organiser,
            )]
        
         # check sub pages (here normaly max 3)
        if(self.ready and yeardate<search_end_date):
            try:
                next_page_link = soup.find('a',{'class':'nextpostslink'})['href']
                self.url = next_page_link
                return devScraper.scrape_events_2(search_start_date = search_start_date, search_end_date = search_end_date,eventsREC=events)
            except:
                print('No further page.')
                return events
        return events
    
    def scrape_events(self, search_start_date: dt.datetime, search_end_date: dt.datetime)-> list[Event]:
        return self.scrape_events_2(search_start_date = search_start_date,search_end_date=search_end_date,eventsREC=[])
    
if(testmode):
    devScraper = Medienkulturzentrum()
    evs = devScraper.scrape_events(search_start_date = dt.datetime(2025,1,25), search_end_date = dt.datetime(2025,2,24))
    for ev in evs:
        print(ev.title)
        print(ev.start_date)
        print('---------------------------')
        

