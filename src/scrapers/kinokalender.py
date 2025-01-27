# datetime is set to dt.datetime(1900,1,1) since there are multiple dates and hours where movies are shown
from tkinter import messagebox
import datetime as dt
import requests
import locale
from bs4 import BeautifulSoup
from definitions import InputWebsiteScraper, Event

testmode = False
class Kinokalender(InputWebsiteScraper):
    name = 'Kinokalender'
    url = 'http://kinokalender.com/wochenprogramm.html'
    urldev = r'dev_websites/Wochenprogramm - Kinokalender Dresden.htm'
    ready = True

    def scrape_events(self, search_start_date: dt.datetime, search_end_date: dt.datetime) -> list[Event]:
            events: list[Event] = []
            # distinguish between developer and ready mode
            if(self.ready):
                response =  requests.get(self.url)
                soup = BeautifulSoup(response.text, "html.parser")  #response.text or response.content  
            else:
                with open(self.urldev, 'r', encoding='utf-8') as file:
                    webpage_content = file.read()
                soup = BeautifulSoup(webpage_content, "html.parser")

            #find event items
            event_container = soup.findAll('div',{'class':'filmliste_kompakt_le col-lg-2 col-md-3 col-sm-4 col-xs-6 odd'}) + soup.findAll('div',{'class':'filmliste_kompakt_le col-lg-2 col-md-3 col-sm-4 col-xs-6 even'})

            #check if event_container is empty (no events in claender or scraping issue)
            if not event_container:
                messagebox.showwarning(title='Empty event list.', message='Eventlist is empty. No events in calendar or a scraping issue due to website change might be the issue.')
                exit()

            for event in event_container:
                #filter for dokus
                film_infos = event.find('span',{'class':'film_infos'}).text
                if('Doku'not in film_infos): continue
               
                #Eventtitle
                event_title = event.find('a')['title']
                #Eventtype
                event_type = film_infos.replace('\n','').replace(' ','').replace('\t','').replace(',',', ')

                #Event url not supplied --> Website url instead
                url = r'http://kinokalender.com/' + event.find('a')['href']

                #Location
                event_location = 'see details'

                #Description
                event_details = ''

                #sub url search for date, time and location
                if(self.ready):
                    sub_response =  requests.get(url)
                    sub_soup = BeautifulSoup(sub_response.text, "html.parser")  #response.text or response.content  
                    termine = sub_soup.find('div',{'class':'terminliste'}).findAll('a',{'class':'row'})
                    terminlist = []
                    for termin in termine:
                        t = termin.find('div',{'class':'textblock'}).text.replace('\t','').replace('\n','') + ' ' + termin.find('div',{'class':'col-xs-8'}).text.replace('\t','').replace('\n','')
                        terminlist.append(t)

                for el in terminlist:
                    event_details = event_details + el + '\n'
                
                #dummy datetime
                yeardatetime = dt.datetime(1900,1,1)
                
                events += [Event(
                    title = event_title,
                    start_date = yeardatetime,
                    url = url,
                    location = event_location,
                    event_type = event_type,
                    description_long = event_details,
                )]
            messagebox.showwarning(title='No date for this scarper.', message='Movies are played at several dates and times. Please check yourself.')    
            return events
    
if(testmode):
    devScraper = Kinokalender()
    evs = devScraper.scrape_events(search_start_date = dt.datetime(2025,1,25), search_end_date = dt.datetime(2025,2,5))
    for ev in evs:
        print(ev.title)
        print(ev.start_date)