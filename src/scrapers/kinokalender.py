import datetime as dt
from src.definitions import InputWebsiteScraper, Event

class Kinokalender(InputWebsiteScraper):
    name = 'Kinokalender'
    url = 'http://kinokalender.com/wochenprogramm.html'
    ready = False

    def scrape_events(self, start_date: dt.datetime, end_date: dt.datetime)-> list[Event]:
        # TODO: write scraping script
        events : list[Event] = []
        return events