import datetime as dt
from src.definitions import InputWebsiteScraper, Event

class TUDresden(InputWebsiteScraper):
    name = 'TU Dresden'
    url = 'https://tu-dresden.de/tu-dresden/veranstaltungskalender/veranstaltungskalender?b_start:int=0'
    ready = False

    def scrape_events(self, end_date: dt.datetime, start_date: dt.datetime = dt.datetime.now()) -> list[Event]:
        # TODO: write scraping script
        events : list[Event] = []
        return events