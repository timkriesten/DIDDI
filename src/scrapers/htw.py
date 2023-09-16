from src.definitions import InputWebsiteScraper, Event
from bs4 import BeautifulSoup
import requests
import datetime as dt
import locale   #to handle timezones and dates
import re

#scraper
class HTWScraper(InputWebsiteScraper):
    name: str = "HTW"
    url: str = "https://www.htw-dresden.de/hochschule/aktuelles/veranstaltungskalender"
    urlDev: str = "diddi/diverses/HTW_scraper/Veranstaltungskalender HTW Dresden.htm"
    ready = False

    # to be continued

    def scrape_events(self, start_date: dt.datetime, end_date: dt.datetime) -> list[Event]:
        print(self.name, 'Scraper started.')
        events: list[Event] = []
        # get website
        scrapy_content = ''
        if self.ready:            
            response =  requests.get(self.url)
            #website response to text (response.text) or content (response.content)  
            scrapy_content = response.text
        else:
            with open(self.urlDev, 'r', encoding='utf-8') as file:
                webpage_content = file.read()
            scrapy_content = webpage_content
        soup = BeautifulSoup(scrapy_content, "html.parser")

        # "skd-calendar-events-target" contains all events of a day 


        # +++++++++++++++++++++++++++++
        # structure of HTW webpage
        # +++++++++++++++++++++++++++++
        # list of all events on the webpage:
        # htw_events-results__items htw_--loaded

        # individual event
        # htw_events-results__item
        # +++++++++++++++++++++++++++++

        elements = soup.findAll("div", {"class": r"htw_events-results__item"})

        #In each element (contains all events on a specific day) search for events
        #set timezone
        locale.setlocale(locale.LC_TIME, 'de_DE')
        for el in elements:
            #date and time
            my = dt.datetime.strptime(el.find('span',{'class': 'month-year'}).text,'%B, %Y')
            current_date = dt.datetime(my.year,my.month,int(el.find('span',{'class': 'day-number'}).text))
            event_time = el.find('div', {'class': 'metadata'}).text.split()[1]
            #stop searching when enddate is reached
            if(current_date>end_date):break
            #titel
            event_title = el.find('a',{'class': 'title'}).text
            #Type
            event_types = [tag.text for tag in el.findAll('span',{'class': 'category-tag'})]
            event_type = ', '.join(str(type) for type in event_types)
            #Location
            event_location = el.find('span',{'class': 'location'}).text
            #Description
            event_details = ''#TODO extract and add details
            # print and replace spaces, tabs and newline chars in event_type
            datetime_string = current_date.strftime('%Y-%m-%d')+' ' +event_time
            # print("{:<16}".format('Datum und Zeit: '),datetime_string)
            # print("{:<16}".format('Titel: '),re.sub(r'\s+',' ',event_title.lstrip()))
            # print("{:<16}".format('Typ: '),re.sub(r'\s+',' ',event_type))
            # print("{:<16}".format('Ort: '),re.sub(r'\s+',' ',event_location.lstrip()))
            # print("{:<16}".format('Beschreibung:'),'\n',event_details)

            # add event to event list
            events += [Event(
                            title = event_title,
                            start_date = dt.datetime.strptime(datetime_string, "%Y-%m-%d %H:%M"),
                            url = self.url, #TODO change to event url not calender url
                            location = event_location,
                            event_type = event_type,
                            descrption_long = event_details
                        )]
        return events
    
new_htw_scraper = HTWScraper()
new_htw_scraper.scrape_events(start_date=dt.datetime(2023,9,16), end_date=dt.datetime(2023,9,30))
import datetime as dt
from src.definitions import InputWebsiteScraper, Event

