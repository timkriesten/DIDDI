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
    description_long: str | None = None
    organiser: str | None = None
    periodic: bool = False
    online: bool = False
    # location_geo_data: ??


class InputWebsiteScraper(abc.ABC):
    '''
    This is the Website Scraper Interface Class. Every Website Scraper Class has to inherit from this interface
    '''
    name: str = ''
    url: str = ''
    ready: bool = False

    def __init__(self):
        if self.name == '':
            raise ValueError(
                f"{self.__class__.__name__} class must have a name attribute that is not None")
        if self.url == '':
            raise ValueError(
                f"{self.__class__.__name__} class must have a url attribute that is not None")

    @abc.abstractmethod
    def scrape_events(self, end_date: dt.datetime, start_date: dt.datetime = dt.datetime.now()) -> list[Event]:
        ''' Every Sraper Class has to have a scrape_events method the returns a list of Event objects'''
