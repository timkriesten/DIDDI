# The year of each event is not saved in a specific tag on this (DHMD) website. But it can be extracted from the href-link of each event, since each link ends with '/date'
import tkinter as tk
from tkinter import messagebox
import datetime as dt
import requests
import locale
from bs4 import BeautifulSoup
from definitions import InputWebsiteScraper, Event

class DHMD(InputWebsiteScraper):
    name = 'Deutsches Hygienemuseum'
    url = 'https://www.dhmd.de/veranstaltungen/kalender'
    urldev = r'dev_websites/Kalender kommende Events im Hygiene Museum Dresden.htm'
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
        event_list = soup.find('div',{'id':r'events-list'})
        #find events
        event_container = event_list.findAll('div',{'class':'csc-default'})
        #set timezone
        locale.setlocale(locale.LC_TIME, 'de_DE')
        for event in event_container:
            #Url (here first since url contains date information at the end)
            url = event.find('a',{'class':'more'})['href']

            # year and date
            try: yeardate = dt.datetime.strptime(url.rsplit('/', 1)[-1], '%Y-%m-%d')
            except:
                messagebox.showinfo('>>> WARNING: Years and dates in ' + self.name + '-Scraper may not be correct <<<')
                break
            # date and time without year            
            time = dt.datetime.strptime(str(event.find('strong',{'class': 'date'}).text), '%a. %d. %b, %H:%M Uhr')
            # Year, sate and time 
            yeardatetime = dt.datetime(yeardate.year,yeardate.month,yeardate.day,time.hour,time.minute)

            # Go to next date if start_date lays in past
            if(yeardate<start_date):continue

            # Stop searching when enddate is reached
            if(yeardate>search_end_date):break
            print(yeardatetime)
            print(search_end_date)   
            #Eventtitle
            event_title = event.find('h3').text

            #Type
            event_type=''
            for i,label in enumerate(event.findAll('div',{'class': 'label'})):
                if i ==0: event_type = label.text
                else: event_type = event_type + ', ' + label.text

            #Location
            event_location = 'verm. Hygienemuseum'

            #Description
            event_details = event.find('p').text

            events += [Event(
                title = event_title,
                start_date = yeardatetime,
                url = self.url,
                location = event_location,
                event_type = event_type,
                description_long = event_details,
            )]

        
        return events
    
#devScraper = DHMD()
#devScraper.scrape_events(start_date = dt.datetime(2023,12,16), search_end_date = dt.datetime(2023,12,31))
