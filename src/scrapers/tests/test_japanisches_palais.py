import pytest
from datetime import datetime, timedelta
from src.scrapers.japanisches_palais import JapanischesPalaisScraper

def test_japanisches_palais_scraper():
    scraper = JapanischesPalaisScraper()
    end_date = datetime.now() + timedelta(days=7)
    events = scraper.scrape_events(end_date)
    assert len(events) > 0