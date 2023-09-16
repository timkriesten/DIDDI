from src.definitions import InputWebsiteScraper, Event
from bs4 import BeautifulSoup
import requests
import datetime as dt
import locale   #to handle timezones and dates
import re

#scraper
class HTW(InputWebsiteScraper):
    name: str = "HTW"
    url: str = "https://www.htw-dresden.de/hochschule/aktuelles/veranstaltungskalender"
    urlDev: str = r"diddi/diverses/HTW_scraper/Veranstaltungskalender HTW Dresden.htm"
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

        #In each element (contains all events on a specific day) search for events
        #set timezone
        locale.setlocale(locale.LC_TIME, 'de_DE')

        elements = soup.findAll("li", {"class": r"htw_events-results__item"})
        print(len(elements))
        for el in elements:
            print('-------------------------------')
            date_dummy = str(el.find('span',{'class': 'htw_events-results__date'}).text)
            #date_dummy2 = date_dummy.replace('  ', '')
            #date_dummy2 = date_dummy2.replace("\\r", "")
            #date_dummy2 = date_dummy2.replace("\\n", "")
            date_dummy2 = ''.join(filter(str.isalnum, date_dummy))

            # seperate, if event is on one date or more days
            print(len(date_dummy2))
            start_event = None
            end_event = None
            if len(date_dummy2) == 22: 
                # only start date time is given
                date_dummy2 = date_dummy2[:19]
                start_day = date_dummy2[:2]
                start_month = date_dummy2[2:4]
                start_year = date_dummy2[4:8]
                start_hour = date_dummy2[8:10]
                start_min = date_dummy2[10:12]
                #print(day + '.' + month + '.' + year + ' ' + hour + ':' + min)
                #print(date_dummy2)
                end_hour = date_dummy2[15:17]
                end_min = date_dummy2[17:19]
                # datetime, including date and time
                start_event = dt.datetime(int(start_year),int(start_month),int(start_day),int(start_hour), int(start_min))
                end_event = dt.datetime(int(start_year),int(start_month),int(start_day),int(end_hour), int(end_min))

            if len(date_dummy2) == 30: 
                # only start date time is given
                date_dummy2 = date_dummy2[:30]

                start_day = date_dummy2[:2]
                start_month = date_dummy2[2:4]
                start_year = date_dummy2[4:8]
                start_hour = date_dummy2[8:10]
                start_min = date_dummy2[10:12]
                #print(day + '.' + month + '.' + year + ' ' + hour + ':' + min)
                #print(date_dummy2)
                end_day = date_dummy2[15:17]
                end_month = date_dummy2[17:19]
                end_year = date_dummy2[19:23]
                end_hour = date_dummy2[23:25]
                end_min = date_dummy2[25:27]
                # datetime, including date and time
                start_event = dt.datetime(int(start_year),int(start_month),int(start_day),int(start_hour), int(start_min))
                end_event = dt.datetime(int(end_year),int(end_month),int(end_day),int(end_hour), int(end_min))

            print(start_event)
            print(end_event)
            #stop searching when enddate is reached
            if(start_event>end_date):break            
            #titel
            event_title = el.find('h3',{'class': 'htw_events-results__title'}).find('a',{'class': 'htw_events-results__link'}).text
            print(event_title)
            #description long - (if NoneType ... return empty string)
            event_description_long = el.find('p',{'class': 'htw_events-results__text'}).text if el.find('p',{'class': 'htw_events-results__text'}) else ""
            print('-------------------------------')
            print(event_description_long)

            # event location
            # request subpage containing location
            # get URL from subpage
            print('-------------------------------')
            url_subpage_dummy = el.find('h3',{'class': 'htw_events-results__title'}).find('a', href=True)
            event_url = url_subpage_dummy['href']
            print(event_url)
            
            response =  requests.get(event_url)
            soup_subpage = BeautifulSoup(response.text, "html.parser")
            event_location = soup_subpage.find('dd').text if soup_subpage.find('dd') else ""
            print(event_location)
            del soup_subpage




            




            '''for el in elements:
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
            # print("{:<16}".format('Beschreibung:'),'\n',event_details)'''

            # add event to event list
            events += [Event(
                            title = event_title,
                            start_date = start_event,
                            url = event_url,
                            end_date = end_event,
                            location = event_location,
                            #event_type = event_type,
                            descrption_long = event_description_long
                        )]
        return events