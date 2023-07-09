# DIDDI

Create the website scraper classes in src/scraper/. They all must have a name and url attribute as defined in their superclass InputWebsiteScraper. Also, they all must have a function scrape_events which returns a list of events. The events type is defined in the Event class.

In the end, we only import the scraper_collection in the main Jupyter Notebook. The scraper collection has access to all scrapers and we can define further methods for the scraper collection to play around with them (to be defined later..).