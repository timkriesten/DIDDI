from src.definitions import InputWebsiteScraper, Event
from bs4 import BeautifulSoup
import requests
import datetime as dt
import locale   #to handle timezones and dates
import re


class Verbraucherzentrale(InputWebsiteScraper):
    name = 'Verbraucherzentrale'
    url = 'https://www.verbraucherzentrale-sachsen.de/veranstaltungen'
    urldev = r'dev_websites/Veranstaltungen Verbraucherzentrale Sachsen.htm'
    ready = True

    def scrape_events(self,end_date: dt.datetime, start_date: dt.datetime = dt.datetime.now()) -> list[Event]:
        events: list[Event] = []
        # distinguish between developer and ready mode
        if(self.ready):
            response =  requests.get(self.url)
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
            # Stop searching when enddate is reached
            if(event_date>end_date):break

            #Eventtitle
            event_title = ev.find('div',{'class': 'title'}).text

            #Eventtime
            start_time = ev.find('div',{'class':'start_time'}).text
            end_time = ev.find('div',{'class':'end_time'}).text.replace('- ','').replace(' ','')

            #Type
            event_type=''

            #Location
            event_location = ev.find('div',{'class': 'town'}).text.replace(' ','')
            mOnline = False
            if(event_location=='ONLINE'): mOnline= True
            
            #Description
            event_details = ev.find('div',{'class': 'teaser-text'}).text

            #Add time to date
            start_datetime = event_date + dt.timedelta(hours=int(start_time.split(':')[0]))
            start_datetime = start_datetime + dt.timedelta(hours=int(start_time.split(':')[1]))
            end_datetime = event_date + dt.timedelta(hours=int(end_time.split(':')[0]))
            end_datetime = end_datetime + dt.timedelta(hours=int(end_time.split(':')[1]))
            #Url
            url = ev.find('a')['href']
            
            events += [Event(
                title = event_title,
                start_date = start_datetime,
                end_date = end_datetime,
                url = self.url,
                location = event_location,
                event_type = event_type,
                description_long = event_details,
                online= mOnline
            )]

        return events
