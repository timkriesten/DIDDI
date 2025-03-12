from tkinter import messagebox
from bs4 import BeautifulSoup
from definitions import InputWebsiteScraper, Event
import requests
import datetime as dt
import re
import locale
from dateutil.relativedelta import *

# when calling this scraper set 
#    eventsRECnext=[]
#    next_month = True
# start with nextmonth True to get events for this and the next month
# Scraper Information
# '(All day)' time in events is checked, if True
# Events in past are not considered
# Line brakes and double spaces in title are removed
# +++This scraper checks only the calender no blog entries+++

testmode = False

class StuRa(InputWebsiteScraper):
    name = 'StuRa'
    url = 'https://www.stura.tu-dresden.de/kalender?month%5Bvalue%5D%5Byear%5D=YEAR&month%5Bvalue%5D%5Bmonth%5D=MONTH'
    urldev = r'dev_websites/Terminübersicht StuRa TU Dresden.htm'
    ready = True
    
    def scrape_events_2(self, search_start_date: dt.datetime, search_end_date: dt.datetime,eventsREC,next_month)-> list[Event]:

        #insert current month and year to url
        set_year =search_start_date.year
        set_month =search_start_date.month
        if(not next_month):
            if(set_month == 12):
                set_year = set_year+1
                set_month = 1
            else:
                set_month = set_month+1
        url_help = self.url.replace('=YEAR','='+str(set_year)).replace('=MONTH','='+str(set_month))

        events: list[Event] = eventsREC
        # distinguish between developer and ready mode
        if(self.ready):
            try:
                response =  requests.get(url_help)
            except:
                messagebox.showwarning('>>> No response from Website <<<', 'No response from Website. Please check website: ' + self.url)
                return eventsREC
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
            if(event_date<search_start_date):continue

            # Stop searching when enddate is reached
            if(event_date>search_end_date):break

            #Find all events in container
            event = container.findAll('li')

            #For each event at specific date
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
                    start_datetime = start_datetime + dt.timedelta(minutes=int(start_time.split(':')[1]))

                url = ev.find('a')['href']
                events += [Event(
                    title = event_title,
                    start_date = event_datetime,
                    url = self.url,
                    location = event_location,
                    event_type = event_type,
                    description_long = event_details,
                )]
        if(next_month):
            return self.scrape_events_2(search_start_date = search_start_date, search_end_date = search_end_date,eventsREC=events,next_month=False)
        else:
            return events

    def scrape_events(self, search_start_date: dt.datetime, search_end_date: dt.datetime)-> list[Event]:
        return self.scrape_events_2(search_start_date = search_start_date,search_end_date=search_end_date,eventsREC=[],next_month=True)

if(testmode):
    devScraper = StuRa()
    evs = devScraper.scrape_events(search_start_date = dt.datetime(2025,1,25), search_end_date = dt.datetime(2025,2,5))
    for ev in evs:
        print(ev.title)
        print(ev.start_date)