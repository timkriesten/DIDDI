# %%
import requests
from bs4 import BeautifulSoup
import urllib.parse
import re




# %%
def getWebsite(url):
    return requests.get(url)
response = getWebsite(r'https://japanisches-palais.skd.museum/programm/')

# %% 
def scrapePalais(respose):
# Palais erlaubt Termindownload im iCalender Format --> Nützlich??
# Website ist identisch zu denen der anderen Museen aufgebaut basieren auf selbem Kalender: https://www.skd.museum/programm
    soup = BeautifulSoup(response.text, "html.parser")  #response.text or response.content
     # "skd-calendar-events-target" contains all events of a day 
    elements = soup.findAll("li", {"class": r"skd-calendar-events-target"}) #todo change to findAll

    
    #In each element (contains all events on a specific day) search for events

    for el in elements:
        #find date
        current_date = el.attrs.get('data-date')
        #find all events at current date
        events = el.findAll('div',{'class':'skd-module-program-teaser-content'})
        #get information of events
        replacement_string = ['Termin speichern','Reservierungsanfrage']
        for ev in events:
            
            #Title split after linebreak since text is followed by eventtype
            event_title = ev.find('div',{'class': 'skd-module-program-title'}).text.split('\n')[0]
            if not(event_title == 'Keine Veranstaltungen!'):
                #Time
                event_time = ev.find('span',{'class':'skd-module-program-time'}).text
                #Type
                event_type=ev.find('div',{'class': 'skd-module-program-type'}).text
                #Location
                event_location = ev.find('div',{'class': 'skd-module-program-title'}).find('span',{'class':'skd-module-program-location'}).text
                #Description
                event_details = ev.find('div',{'class': 'skd-module-program-details'}).text
                for w in replacement_string:
                    event_details = event_details.replace(w,'')
                # print and replace spaces, tabs and newline chars in event_type
                print("{:<16}".format('Datum und Zeit: '),re.sub(r'\s+',' ',current_date.lstrip()),re.sub(r'\s+',' ',event_time.lstrip()))
                print("{:<16}".format('Titel: '),re.sub(r'\s+',' ',event_title.lstrip()))
                print("{:<16}".format('Typ: '),re.sub(r'\s+',' ',event_type.lstrip()))
                print("{:<16}".format('Ort: '),re.sub(r'\s+',' ',event_location.lstrip()))
                print("{:<16}".format('Beschreibung:'),'\n',event_details.lstrip())
    
        
    
    #using iCalender Data
    '''link=urllib.parse.urljoin(r'https://www.skd.museum', elements.a.get('href'))# wrong link with text parser better with content
    #print(link)
    #ics = requests.get(link).content
    # works with ics files
    #link2=r'https://www.skd.museum/programm/?tx_xmskdsharepointevents_list%5Baction%5D=iCal&tx_xmskdsharepointevents_list%5Bcontroller%5D=Veranstaltung&tx_xmskdsharepointevents_list%5Bevent%5D=3786&tx_xmskdsharepointevents_list%5Btermin%5D=1302052&cHash=df6ad50459311ef724e28281d868904c'
    #ics = requests.get(link2).content
    #print(ics)'''
    

scrapePalais(response)



# %%
