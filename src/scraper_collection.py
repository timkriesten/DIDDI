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
    
    def get_all_events_df(self, end_date: dt.datetime, start_date: dt.datetime = dt.datetime.now(),**kwargs) -> pd.DataFrame:
        events: list[Event] = []
        for _, scraper in self.scrapers.items():
            events += scraper.scrape_events(end_date=end_date,start_date=start_date)
        events_df = events_list2df(events)
        return events_df
    
def events_list2df(events: list[Event]) -> pd.DataFrame:
    '''
    Converts a list of Event objects into a DataFrame with a column for each Event field.
    '''
    fields = Event.__fields__.keys()
    field_dict = {field: [getattr(event, field) for event in events] for field in fields}
    return pd.DataFrame(field_dict)

scraper_collection = ScraperCollection()