import locale
import requests
import datetime as dt
from bs4 import BeautifulSoup
from src.definitions import InputWebsiteScraper, Event

class SLUBScraper(InputWebsiteScraper):
    name: str = "SLUB"
    url: str = "https://www.slub-dresden.de/besuchen/veranstaltungen"

    def scrape_events(self, start_date: dt.datetime, end_date: dt.datetime) -> list[Event]:
        ''' Example Scraper Class Implementation'''
        output = [
            Event(
                title="example_title_1",
                url = self.url,
                start_date = dt.datetime(2023,1,1)),
            Event(
                title="example_title_2",
                url="www.example.de",
                start_date = dt.datetime(2023,2,1))
        ]
        return output
    
# TODO: integrate this function into the SLUB Scraper method "scrape_events"
def scrapeSLUB(url,end_date):
    response =  requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")  #response.text or response.content  

    # "skd-calendar-events-target" contains all events of a day 
    elements = soup.findAll("div", {"class": r"event-container"}) #todo change to findAll
    #In each element (contains all events on a specific day) search for events
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
        event_details = ''
        # print and replace spaces, tabs and newline chars in event_type
        print("{:<16}".format('Datum und Zeit: '),current_date.strftime('%Y-%m-%d'),re.sub(r'\s+',' ',event_time.lstrip()))
        print("{:<16}".format('Titel: '),re.sub(r'\s+',' ',event_title.lstrip()))
        print("{:<16}".format('Typ: '),re.sub(r'\s+',' ',event_type))
        print("{:<16}".format('Ort: '),re.sub(r'\s+',' ',event_location.lstrip()))
        print("{:<16}".format('Beschreibung:'),'\n',event_details)