import json

# Create a list of website dictionaries
websites = [
    {
        "name": 'Palais',
        "url": r'https://japanisches-palais.skd.museum/programm/',
        "metadata": ''
    },
    {
        "name": 'SLUB',
        "url": r'https://www.slub-dresden.de/besuchen/veranstaltungen',
        "metadata": ''
    },
    # Add more websites as needed
]

# Save the list of websites to a JSON file
with open(r"WebsitesToScrape\websites.json", "w") as json_file:
    json.dump(websites, json_file)
