import datetime as dt
from src.definitions import InputWebsiteScraper, Event

class DHMD(InputWebsiteScraper):
    name = 'Deutsches Hygienemuseum'
    url = 'https://www.dhmd.de/veranstaltungen/kalender'
    ready = False

    def scrape_events(self, end_date: dt.datetime, start_date: dt.datetime = dt.datetime.now()) -> list[Event]:
        # TODO: write scraping script
        events : list[Event] = []
        return events