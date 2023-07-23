from src.definitions import InputWebsiteScraper, Event
from bs4 import BeautifulSoup
import requests
import datetime as dt
import locale   #to handle timezones and dates
import re


class SLUBScraper(InputWebsiteScraper):
    name: str = "SLUB"
    url: str = "https://www.slub-dresden.de/besuchen/veranstaltungen"

    def scrape_events(self, start_date: dt.datetime, end_date: dt.datetime) -> list[Event]:
        print(self.name, 'Scraper started.')
        events = []
        # get website
        response =  requests.get(self.url)
        #website response to text (response.text) or content (response.content)  
        soup = BeautifulSoup(response.text, "html.parser")

        # "skd-calendar-events-target" contains all events of a day 
        elements = soup.findAll("div", {"class": r"event-container"})

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
            print("{:<16}".format('Datum und Zeit: '),datetime_string)
            print("{:<16}".format('Titel: '),re.sub(r'\s+',' ',event_title.lstrip()))
            print("{:<16}".format('Typ: '),re.sub(r'\s+',' ',event_type))
            print("{:<16}".format('Ort: '),re.sub(r'\s+',' ',event_location.lstrip()))
            print("{:<16}".format('Beschreibung:'),'\n',event_details)

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