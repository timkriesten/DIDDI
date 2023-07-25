import datetime as dt
import pandas as pd
from src.scrapers.japanisches_palais import JapanischesPalaisScraper
from src.scrapers.slub import SLUBScraper
from src.definitions import InputWebsiteScraper, Event

global_scrapers_list: list[InputWebsiteScraper] = [
        JapanischesPalaisScraper(),
        SLUBScraper()
    ]

class ScraperCollection():
    scrapers: dict[str, InputWebsiteScraper] = {scraper.name: scraper for scraper in global_scrapers_list}

    def get_scraper_names(self) -> list[str]:
        return list(self.scrapers.keys())
    
    def get_all_events(self, end_date: dt.datetime, start_date: dt.datetime = dt.datetime.now(),**kwargs) -> pd.DataFrame:
        events: list[Event] = []
        for _, scraper in self.scrapers.items():
            events += scraper.scrape_events(end_date=end_date,start_date=start_date)
        return self.events2df(events)
    
    @staticmethod
    def events2df(events: list[Event]) -> pd.DataFrame:
        df = pd.DataFrame({
            'Start Date' : [event.start_date for event in events],
            'End Date' :  [event.end_date for event in events],
            'Title' : [event.title for event in events],
            'Url': [event.url for event in events],
            'Location': [event.location for event in events],
            'Event Type' : [event.event_type for event in events],
            'Description Short' : [event.description_short for event in events],
            'Description Long' : [event.description_long for event in events],
            'Organiser' : [event.organiser for event in events],
            'Periodic' : [event.periodic for event in events],
        })
        return df


scraper_collection = ScraperCollection()