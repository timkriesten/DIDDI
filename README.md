# DIDDI

## How to install

1. Make sure you use Python 3.11.5 (other versions might also work, but this is tested)
2. Generate a virtual environment, e.g. via the following command in a terminal
   ```
   python -m venv .venv
   ```
3. Start the virtual environment, e.g. via the following command in Windows
   ```
   \.venv\Scripts\activate
   ```
4. Install the required python modules in your virtual environemnt, via
   ```
   pip install -r requirements.txt
   ```
5. Open the main.ipynb from the virtual environment with jupyter (with code cells)
   ```
   jupyter notebook main.ipynb
   ```
   or directly with voila (no code cells)
   ```
   voila main.ipynb
   ```

## Notes regarding the repository structure
Create the website scraper classes in src/scrapers/. They all must have a ```name``` and ```url``` attribute as defined in their
superclass ```InputWebsiteScraper```. When the scraper is ready to use, set the ```ready``` class variable to True.
Also, the scraper classes must all have a method ```scrape_events``` which returns a list of events. Have a look at the [_scraper_template.py](/src/scrapers/_scraper_template.py) for an example.
The events type is defined in the ```Event``` class.

In the end, we only import the ```scrapers_list```, which is a list of all scraper classes in the main Jupyter Notebook.

## Notes for SCRAPER-DEVELOPMENT
When creating new scrapers follow the scraper structure of stura. You can directly run the scraper script during devloping. If some modules are not found add the path of the src directory to your PYTHONPATH system variable.

## Notes regarding SCRAPER-Functionality
The scraper does not check for double occurence in the event lists. At some websites it can happen, that the scraper catched one event twice, if the event is listed twice on the website e.g. under a specific date and unter upcomming events
Double scraping of events can also occur if different calendars contain the same event..