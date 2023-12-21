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

class Medienkulturzentrum(InputWebsiteScraper):
    name = 'Medienkulturzentrum'
    url = 'https://www.medienkulturzentrum.de/angebote/'
    urldev = r'dev_websites/Angebote - Medienkulturzentrum Dresden.htm'
    ready = True

    def scrape_events(self, start_date: dt.datetime, search_end_date: dt.datetime) -> list[Event]:
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
        event_list = soup.find('div',{'class':r'seminar-list'})
        #find events
        event_container = event_list.findAll('article')

        #set timezone
        locale.setlocale(locale.LC_TIME, 'de_DE')
        for event in event_container:
            # year and date
            try: yeardate = dt.datetime.strptime(event.find('small', {'class': 'date'}).text.replace('\t','').replace('\n',''), '%d.%m.%Y')
            except:
                messagebox.showwarning('>>> WARNING <<<', 'Years and dates in ' + self.name + '-Scraper may not be correct.')
                break

            # Go to next date if start_date lays in past
            if(yeardate<start_date):continue

            # Stop searching when enddate is reached
            if(yeardate>search_end_date):break

            #Url (here first since url contains date information at the end)
            url = event['data-href']

            #Eventtitle
            event_title = event.find('a')['title']

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
                    messagebox.showwarning('>>> WARNING <<<', 'No time found in ' + self.name + '-Scraper. Year and date information only. Hour is set to 0.')
                    yeardatetime = yeardate

                # Organiser/organisation
                event_organiser = 'not implemented'
#todo           # Find the organizer information
                #help = sub_info_container.find('div', {'class': 'col_3 column'}) --> doesnt work for whatever reason
                #siblings = organizer_heading.find_next_siblings('p')
                #for i,item in enumerate(siblings):
                #    item.a.decompose()
                #    if i ==0: event_organiser = item.text
                #    else: event_organiser = event_organiser + ', ' + item.text

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
        
        return events
    
devScraper = Medienkulturzentrum()
devScraper.scrape_events(start_date = dt.datetime(2023,12,16), search_end_date = dt.datetime(2024,1,9))
