from tkinter import messagebox
import datetime as dt
import requests
import locale
from bs4 import BeautifulSoup
from definitions import InputWebsiteScraper, Event

testmode = False
class Verbraucherzentrale(InputWebsiteScraper):
    name = 'Verbraucherzentrale'
    url = 'https://www.verbraucherzentrale-sachsen.de/veranstaltungen'
    urldev = r'dev_websites/Veranstaltungen Verbraucherzentrale Sachsen.htm'
    ready = True

    def scrape_events(self, search_start_date: dt.datetime, search_end_date: dt.datetime) -> list[Event]:
        events: list[Event] = []
        # distinguish between developer and ready mode
        if(self.ready):
            try:
                response =  requests.get(self.url)
            except:
                messagebox.showwarning('>>> No response from Website <<<', 'No response from Website. Please check website: ' + self.url)
                return events
            soup = BeautifulSoup(response.text, "html.parser")  #response.text or response.content  
        else:
            with open(self.urldev, 'r', encoding='utf-8') as file:
                webpage_content = file.read()
            soup = BeautifulSoup(webpage_content, "html.parser")

        # find container forsingle events
        elements = soup.findAll("div", {"class": r"views-row"})

        #In each element (contains all events on a specific day) search for events
        for ev in elements:
            # Date
            event_date = ev.find('div',{'class': 'date_event'}).find('time',{'class': 'datetime'})['datetime'].replace('T12:00:00Z','')
            event_date = dt.datetime.fromisoformat(event_date)
            # Go to next date if start_date lays in past
            if(event_date<search_start_date):continue
            # Stop searching when enddate is reached
            if(event_date>search_end_date):break

            #Eventtitle
            event_title = ev.find('div',{'class': 'title'}).text

            #Eventtime
            print(event_title)
            print(ev.find('div',{'class':'start_date'}).find('time')['datetime'])
            event_start_datetime = dt.datetime.strptime(ev.find('div',{'class':'start_date'}).find('time')['datetime'], '%Y-%m-%dT%H:%M:%SZ')
            try:
                event_end_datetime = dt.datetime.strptime(ev.find('div',{'class':'end_date'}).find('time')['datetime'], '%Y-%m-%dT%H:%M:%SZ')
            except:
                event_end_datetime = None
            #Type
            event_type=''

            #Location
            event_location = ev.find('div',{'class': 'town'}).text.replace(' ','')
            mOnline = False
            if(event_location=='ONLINE'): mOnline= True
            
            #Description
            event_details = ev.find('div',{'class': 'teaser-text'}).text

            #Url
            url = ev.find('a')['href']
            
            events += [Event(
                title = event_title,
                start_date = event_start_datetime,
                end_date = event_end_datetime,
                url = self.url,
                location = event_location,
                event_type = event_type,
                description_long = event_details,
                online= mOnline
            )]

        return events

if(testmode):
    devScraper = Verbraucherzentrale()
    evs = devScraper.scrape_events(search_start_date = dt.datetime(2025,1,25), search_end_date = dt.datetime(2025,2,5))
    for ev in evs:
        print(ev.title)
        print(ev.start_date)