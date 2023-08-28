import datetime as dt
from src.definitions import InputWebsiteScraper, Event


class HTW(InputWebsiteScraper):
    name = 'HTW Dresden'
    url = 'https://www.htw-dresden.de/hochschule/aktuelles/veranstaltungskalender'
    ready = False

    def scrape_events(self, end_date: dt.datetime, start_date: dt.datetime = dt.datetime.now()) -> list[Event]:
        # TODO: write scraping script
        events: list[Event] = []
        return events
