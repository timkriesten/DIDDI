import datetime as dt
from src.definitions import InputWebsiteScraper, Event

class StuRa(InputWebsiteScraper):
    name = 'StuRa'
    url = 'https://www.stura.tu-dresden.de/kalender'
    ready = False

    def scrape_events(self, end_date: dt.datetime, start_date: dt.datetime = dt.datetime.now()) -> list[Event]:
        # TODO: write scraping script
        events : list[Event] = []
        return events