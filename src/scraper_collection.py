import datetime as dt
from src.scrapers.japanisches_palais import JapanischesPalaisScraper
from src.scrapers.slub import SLUBScraper
from src.definitions import InputWebsiteScraper, Event

global_scrapers_list: list[InputWebsiteScraper] = [
        JapanischesPalaisScraper(),
        SLUBScraper()
    ]

class ScraperCollection():
    scrapers: dict[str, InputWebsiteScraper] = {scraper.name: scraper for scraper in global_scrapers_list}

    def get_scraper_names(self):
        return list(self.scrapers.keys())
    
    def get_all_events(self, end_date: dt.datetime, start_date: dt.datetime = dt.datetime.now(),**kwargs):
        events: list[Event] = []
        for _, scraper in self.scrapers.items():
            events += scraper.scrape_events(end_date=end_date,start_date=start_date)
        return events

scraper_collection = ScraperCollection()