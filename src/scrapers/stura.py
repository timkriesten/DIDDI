from bs4 import BeautifulSoup
from src.definitions import InputWebsiteScraper, Event
import requests
import datetime as dt
import re
import locale

# Scraper Information
# '(All day)' time in events is checkt, if True
# Events in past are not considered
# Line brakes and double spaces in title are removed

class StuRa(InputWebsiteScraper):
    name = 'StuRa'
    url = 'https://www.stura.tu-dresden.de/kalender'
    urldev = r'dev_websites/Terminübersicht StuRa TU Dresden.htm'
    ready = True

    def scrape_events(self, start_date: dt.datetime, end_date: dt.datetime)-> list[Event]:
        print(self.name, 'Scraper started. \n +++This scraper checks only the calender noblog entries+++')
        events: list[Event] = []
        # distinguish between developer and ready mode
        if(self.ready):
            response =  requests.get(self.url)
            soup = BeautifulSoup(response.text, "html.parser")  #response.text or response.content  
        else:
            with open(self.urldev, 'r', encoding='utf-8') as file:
                webpage_content = file.read()
            soup = BeautifulSoup(webpage_content, "html.parser")

        # find container events on date xy
        date_container = soup.find("div", {"id": r"content-inner"}).findAll('div',{'class': 'item-list'})
        #set timezone
        locale.setlocale(locale.LC_TIME, 'de_DE')
        for container in date_container:
            # Date
            event_date = dt.datetime.strptime(container.find('span',{'class': 'date-display-single'}).text, '%A, %d. %B %Y') 
            # Go to next date if start_date lays in past
            if(event_date<start_date):continue

            # Stop searching when enddate is reached
            if(event_date>end_date):break

            #Find all events in container
            event = container.findAll('li')

            #For eech event at specific date
            for ev in event:

                #Eventtitle
                event_title = ev.find('div',{'class': 'views-field-title'}).text.replace('\n',' ').replace('  ',' ')

                #Eventtime
                start_time = ev.find('div',{'class':'views-field-field-datum-value'}).find('span',{'class', 'date-display-single'}).text
                #end_time = ev.find('div',{'class':'end_time'}).text.replace('- ','').replace(' ','')

                #Type
                event_type='not searched'

                #Location
                event_location = ev.find('div',{'class': 'views-field-field-ort-value'}).find('span',{'class', 'field-content'}).text

                
                #Description
                event_details = 'not searched'#ev.find('p').text if ev.find('p') else 'No description.'

                #Add time to date
                if(start_time != '(All day)'):
                    start_datetime = event_date + dt.timedelta(hours=int(start_time.split(':')[0]))
                    start_datetime = start_datetime + dt.timedelta(hours=int(start_time.split(':')[1]))
                #end_datetime = event_date + dt.timedelta(hours=int(end_time.split(':')[0]))
                #end_datetime = end_datetime + dt.timedelta(hours=int(end_time.split(':')[1]))
                #Url
                url = ev.find('a')['href']
                events += [Event(
                    title = event_title,
                    start_date = start_datetime,
                    url = self.url,
                    location = event_location,
                    event_type = event_type,
                    description_long = event_details,
                )]


        return events
