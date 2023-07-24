from pydantic import BaseModel
import abc
import datetime as dt

class Event(BaseModel):
    title: str
    start_date: dt.datetime
    url: str
    end_date: dt.datetime | None = None
    location: str | None = None
    event_type: str | None = None
    description_short: str | None = None
    descrption_long: str | None = None
    organiser: str | None = None
    # location_geo_data: ??


class InputWebsiteScraper(abc.ABC):
    '''
    This is the Website Scraper Interface Class. Every Website Scraper Class has to inherit from this interface
    '''
    name: str | None = None
    url: str | None = None

    def __init__(self):
        if self.name == None:
            raise ValueError(
                f"{self.__class__.__name__} class must have a name attribute that is not None")
        if self.url == None:
            raise ValueError(
                f"{self.__class__.__name__} class must have a url attribute that is not None")

    @abc.abstractmethod
    def scrape_events(self, end_date: dt.datetime, start_date: dt.datetime,**kwargs) -> list[Event]:
        ''' Every Sraper Class has to have a scrape_events method the returns a list of Event objects'''
