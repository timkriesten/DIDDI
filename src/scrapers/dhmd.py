# url is overwritten with event url
# title always starts with 'Erfahren Sie mehr über die Veranstaltung...' can me removed
import tkinter as tk
from tkinter import messagebox
import datetime as dt
import requests
import locale
from bs4 import BeautifulSoup
from definitions import InputWebsiteScraper, Event

testmode = False
class DHMD(InputWebsiteScraper):
    name = 'Deutsches Hygienemuseum'
    url = 'https://shop.dhmd.de/veranstaltungen'
    urldev = r'dev_websites/Veranstaltungen - Deutsches Hygiene Museum Dresden.htm'
    ready = True
    

    def scrape_events(self, search_start_date: dt.datetime, search_end_date: dt.datetime) -> list[Event]:
        events: list[Event] = []
        print('DHMD-Scraper started.')
        # distinguish between developer and ready mode
        if(self.ready):
            response =  requests.get(self.url)
            soup = BeautifulSoup(response.text, "html.parser")  #response.text or response.content  
        else:
            with open(self.urldev, 'r', encoding='utf-8') as file:
                webpage_content = file.read()
            soup = BeautifulSoup(webpage_content, "html.parser")


        #find events
        event_container = soup.findAll('a',{'class':'event-item get-event-availability event-availability-element'})

        #set timezone
        locale.setlocale(locale.LC_TIME, 'de_DE')

        for event in event_container:
            #find date and time
            yeardatetime = dt.datetime.strptime(event.find('time')['datetime'], '%Y-%m-%d %H:%M')

            #Url (here first since url contains date information at the end)
            url = event['href']

            # Go to next date if start_date lays in past
            if(yeardatetime<search_start_date):continue

            # Stop searching when enddate is reached
            if(yeardatetime>search_end_date):break
  
            #Eventtitle
            event_title = event['title']

            #Type
            event_type= event.find('div',{'class': 'figcaption'}).text

            #Location
            event_location = 'not given - verm. Hygienemuseum'

            #Description
            event_details = event.find('article',{'class': 'desc'}).find('p').text

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
    devScraper = DHMD()
    evs = devScraper.scrape_events(search_start_date = dt.datetime(2025,1,25), search_end_date = dt.datetime(2025,2,5))
    for ev in evs:
        print(ev.title)
        print(ev.start_date)
