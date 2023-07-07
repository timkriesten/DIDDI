import json
from scraper import Scraper
import datetime as dt

end_date = dt.datetime(2023,7,14)

# Load the list of websites from the JSON file
with open(r"WebsitesToScrape\websites.json", "r") as json_file:
    websites = json.load(json_file)

# Access the data for each website
for website in websites:
    name = website["name"]
    url = website["url"]
    metadata = website["metadata"]

    if(name=='Palais'): Scraper.scrapePalais(url,end_date)
    if(name=='SLUB'): Scraper.scrapeSLUB(url,end_date)