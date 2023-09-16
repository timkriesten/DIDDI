import datetime as dt
from src.definitions import InputWebsiteScraper, Event

class Medienkulturzentrum(InputWebsiteScraper):
    name = 'Medienkulturzentrum'
    url = 'https://www.medienkulturzentrum.de/angebote/kursprogramm-2/'
    ready = False

    def scrape_events(self, end_date: dt.datetime, start_date: dt.datetime = dt.datetime.now()) -> list[Event]:
        # TODO: write scraping script
        events : list[Event] = []
        return events