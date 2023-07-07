from pydantic import BaseModel
import abc
import datetime as dt

class Event(BaseModel):
    title: str
    start_date: dt.datetime
    url: str
    end_date: dt.datetime = None
    location: str = None
    event_type: str = None
    description_short: str = None
    descrption_long: str = None
    organiser: str = None
    # location_geo_data: ??


## Erste Idee für die Klassendefinitionen :

class InputEventsScraperInterface(abc.ABC):
    '''
    This is the Input Events Scraper Interface Class. Every Scraper Class has to inherit from this interface
    '''
    @abc.abstractclassmethod
    def name(self) -> str:
        """every Scraper Class needs a name information"""
    
    @abc.abstractclassmethod
    def url(self) -> str:
        """every Scraper Class needs a url information"""

    @abc.abstractclassmethod
    def scrape_events(self, start_date: dt.datetime, end_date: dt.datetime) -> list[Event]:
        ''' Every Sraper Class has to have a scrape_events method the returns a list of Event objects'''


class JapanischesPalaisScraper(InputEventsScraperInterface):
    
    @classmethod
    def name(self) -> str:
        return "JapanischesPalais"
    
    @classmethod
    def url(self) -> str:
        return "https://japanisches-palais.skd.museum/programm/"

    @classmethod
    def scrape_events(self) -> list[Event]:
        ''' Example Scraper Class Implementation'''
        output = [
            Event(
                title="example_title_1",
                url = self.url(),
                start_date = dt.datetime(2023,1,1)),
            Event(
                title="example_title_2",
                url="www.example.de",
                start_date = dt.datetime(2023,2,1))
        ]
        return output


class SLUBScraper(InputEventsScraperInterface):

    @classmethod
    def name(self) -> str:
        return "SLUB"
    
    @classmethod
    def url(self) -> str:
        return "https://www.slub-dresden.de/besuchen/veranstaltungen"

    @classmethod
    def scrape_events(self) -> list[Event]:
        ''' Example Scraper Class Implementation'''
        output = [
            Event(
                title="example_title_1",
                url = self.url(),
                start_date = dt.datetime(2023,1,1)),
            Event(
                title="example_title_2",
                url="www.example.de",
                start_date = dt.datetime(2023,2,1))
        ]
        return output
