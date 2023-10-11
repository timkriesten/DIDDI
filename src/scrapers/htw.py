import datetime as dt
from src.definitions import InputWebsiteScraper, Event

class HTW(InputWebsiteScraper):
    name = 'HTW Dresden'
    url = 'https://www.htw-dresden.de/hochschule/aktuelles/veranstaltungskalender'
    ready = False

    def scrape_events(self, start_date: dt.datetime, end_date: dt.datetime) -> list[Event]:
        # TODO: write scraping script
        events: list[Event] = []
        return events
