from tkinter import messagebox
from bs4 import BeautifulSoup
from definitions import InputWebsiteScraper, Event
import requests
import datetime as dt
import locale
from dateutil.relativedelta import *
import settings

testmode = False
class JapanischesPalais(InputWebsiteScraper):
    name = 'JapanischesPalais'
    url = 'https://japanisches-palais.skd.museum/programm/'
    ready = True

    def scrape_events(self, search_start_date: dt.datetime, search_end_date: dt.datetime)-> list[Event]:
        print(self.name, 'Scraper started.')
        events: list[Event] = []
        # TODO Palais allows appoitmentdowload in iCalender format --> useful??
        # Website ist identisch zu denen der anderen Museen aufgebaut basieren auf selbem Kalender: https://www.skd.museum/programm
        try:
            response =  requests.get(self.url)
        except:
            if(settings.global_dockermode):print('>>> No response from Website <<<', 'No response from Website. Please check website: ' + self.url)
            else: messagebox.showwarning('>>> No response from Website <<<', 'No response from Website. Please check website: ' + self.url)
            return events
        soup = BeautifulSoup(response.text, "html.parser")  #response.text or response.content  
        # "skd-calendar-events-target" contains all events of a day 
        elements = soup.findAll("li", {"class": r"skd-calendar-events-target"}) #todo change to findAll
        #In each element (contains all events on a specific day) search for events
        for el in elements:
            #find date
            event_date = dt.datetime.strptime(el.attrs.get('data-date'),"%Y-%m-%d")
            # Go to next date if start_date lays in past
            if(event_date<search_start_date):continue              
            #stop searching when enddate is reached
            if(event_date>search_end_date):break
            #find all events at current date
            soup_events = el.findAll('div',{'class':'skd-module-program-teaser-content'})
            #get information of events
            replacement_string = ['Termin speichern','Reservierungsanfrage']
            for ev in soup_events:
                #Title split after linebreak since text is followed by eventtype
                event_title = ev.find('div',{'class': 'skd-module-program-title'}).text.split('\n')[0]
                if not(event_title == 'Keine Veranstaltungen!'):
                    #Time
                    #TODO: actually convert event_time to datetime object
                    #event_time = dt.datetime.now()
                    event_time = ev.find('span',{'class':'skd-module-program-time'}).text
                    #Type
                    event_type=ev.find('div',{'class': 'skd-module-program-type'}).text
                    #Location
                    event_location = ev.find('div',{'class': 'skd-module-program-title'}).find('span',{'class':'skd-module-program-location'}).text
                    #Description
                    event_details = ev.find('div',{'class': 'skd-module-program-details'}).text
                    for w in replacement_string:
                        event_details = event_details.replace(w,'')

                    datetime_string = event_date.strftime('%Y-%m-%d')+' ' +event_time.lstrip().rstrip()

                    events += [Event(
                        title = event_title,
                        start_date = dt.datetime.strptime(datetime_string, "%Y-%m-%d %H:%M"),
                        url = self.url,
                        location = event_location,
                        event_type = event_type,
                        description_long = event_details
                    )]

        return events

if(testmode):
    devScraper = JapanischesPalais()
    evs = devScraper.scrape_events(search_start_date = dt.datetime(2025,1,25), search_end_date = dt.datetime(2025,2,5))
    for ev in evs:
        print(ev.title)