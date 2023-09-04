import datetime as dt
import pandas as pd
import src.scrapers as scrapers
from src.definitions import InputWebsiteScraper, Event

# TODO: make an automatic import from all scraper classes
scrapers_list: list[InputWebsiteScraper] = [
        scrapers.JapanischesPalais(),
        scrapers.SLUB(),
        scrapers.LokaleAgenda(),
        scrapers.DHMD(),
        scrapers.HTW(),
        scrapers.InternationaleGaerten(),
        scrapers.Kinokalender(),
        scrapers.Medienkulturzentrum(),
        scrapers.StuRa(),
        scrapers.TUDresden(),
        scrapers.Verbraucherzentrale()
    ]

class ScraperCollection():
    scrapers = scrapers_list
    names = [scraper.name for scraper in scrapers]
    urls = [scraper.url for scraper in scrapers]
    ready = [scraper.ready for scraper in scrapers]
    
    @classmethod
    def get_all_events_df(cls, end_date: dt.datetime, start_date: dt.datetime = dt.datetime.now(),**kwargs) -> pd.DataFrame:
        events: list[Event] = []
        for scraper in cls.scrapers:
            events += scraper.scrape_events(end_date=end_date,start_date=start_date)
        events_df = events_list2df(events)
        return events_df
    
def events_list2df(events: list[Event]) -> pd.DataFrame:
    '''
    Converts a list of Event objects into a DataFrame with a column for each Event field.
    '''
    fields = Event.__fields__.keys() # type: ignore
    field_dict = {field: [getattr(event, field) for event in events] for field in fields}
    return pd.DataFrame(field_dict)