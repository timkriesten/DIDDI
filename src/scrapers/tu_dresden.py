import datetime as dt
from src.definitions import InputWebsiteScraper, Event

class TUDresden(InputWebsiteScraper):
    name = 'TU Dresden'
    url = 'https://tu-dresden.de/tu-dresden/veranstaltungskalender/veranstaltungskalender?b_start:int=0'
    ready = False

    def scrape_events(self, start_date: dt.datetime, end_date: dt.datetime) -> list[Event]:
        # TODO: write scraping script
        events : list[Event] = []
        return events