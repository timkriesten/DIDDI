# ---
# jupyter:
#   jupytext:
#     text_representation:
#       extension: .py
#       format_name: percent
#       format_version: '1.3'
#       jupytext_version: 1.15.2
#   kernelspec:
#     display_name: Python 3 (ipykernel)
#     language: python
#     name: python3
# ---

# %% [markdown]
# #### Input Scraping Project Test now again and again.. and another time

# %%
import ipywidgets as widgets
from ipywidgets import HBox, VBox, Button, Dropdown, FloatText, BoundedFloatText, BoundedIntText, Label, ToggleButtons, HTML, Checkbox, AppLayout, Layout, DatePicker
from ipyaggrid import Grid
import webbrowser
import pandas as pd
from src import ScraperCollection, events_list2df
from datetime import datetime, timedelta

# %%
# generate date and scraper widgets

today = datetime.now().date()
days_until_next_monday = (0 - today.weekday()) % 7
next_monday = today + timedelta(days=days_until_next_monday)
date_widgets = {
    'start': DatePicker(description = 'Startdatum', value = next_monday),
    'end':   DatePicker(description = 'Enddatum', value = next_monday+timedelta(6))
}

checkbox_layout = {'width': '20px'}
label_layout  = {'width': '200px'}
button_layout = {'width': '100px'}
scraper_widget_rows = [{
#    'check': Checkbox(value=False, descrption='', indent=False, layout=checkbox_layout),
    'label': Label(scraper.name, layout = label_layout),
    'start_scraper': Button(description='get events', layout = button_layout, disabled = not scraper.ready),
    'open_url': Button(description='open url', layout = button_layout)
} for scraper in ScraperCollection.scrapers]

date_and_scrapers = VBox([
    HBox(list(date_widgets.values())),
    *[HBox(list(widget_row.values())) for widget_row in scraper_widget_rows],
    ])

# date_and_scrapers

# %%
# generate grid_draft widget

column_defs = [{'headerName':'Start','field':'start_date', 'cellDataType': 'dateString', 'editable': True},
               {'headerName':'Typ','field':'event_type', 'editable': True},
               {'headerName':'Titel','field':'title', 'editable': True},
               {'headerName':'URL','field':'url'},
               {'headerName':'Organisation','field':'organiser', 'editable': True},
               {'headerName':'Ort','field':'location', 'editable': True},
               {'headerName':'regelmäßig','field':'periodic', 'editable': True, 'cellDataType': 'boolean'},
              ]

grid_options = {
    'columnDefs' : column_defs,
    'enableSorting': True,
    'enableColResize': True,
    'enableFilter': True,
    'enableRangeSelection': True,
    'rowSelection': 'multiple',
}

grid_draft = Grid(grid_data=events_list2df([]),
         grid_options=grid_options,
         theme='ag-theme-balham',
         quick_filter=True,
         sync_on_edit=True,
         columns_fit='auto',
         index=False,
         keep_multiindex=False,)

# grid_draft

# %%
button_add_final = Button(description='add selection to final', layout = button_layout)

# %%
# generate grid_final widget

grid_options = {
    'columnDefs' : column_defs,
    'enableSorting': True,
    'enableColResize': True,
    'enableFilter': True,
    'enableRangeSelection': True,
    'rowSelection': 'multiple',
}

grid_final = Grid(grid_data=events_list2df([]),
         grid_options=grid_options,
         theme='ag-theme-balham',
         quick_filter=True,
         sync_on_edit=True,
         columns_fit='auto',
         index=False,
         keep_multiindex=False,)

# grid_final

# %%
# display the app

app = VBox([
    date_and_scrapers,
    grid_draft,
    button_add_final,
    grid_final
    ])

app


# %%
# add functionality to widgets

def open_url_func(url):
    def open_url(button):
        webbrowser.open_new_tab(url)
    return open_url

def add_scraped_events_to_grid_draft(scraper):
    def add_scraped_events(button):
        start_datetime = datetime.combine(date_widgets['start'].value, datetime.min.time())
        end_datetime = datetime.combine(date_widgets['end'].value, datetime.min.time())
        button.button_style = 'info'
        events = scraper.scrape_events(end_datetime, start_datetime)
        events_df = events_list2df(events)
        df_old = grid_draft.grid_data_out['grid']
        df_new = pd.concat([df_old, events_df], ignore_index=True)
        grid_draft.update_grid_data(df_new)
        button.button_style = 'success'
    return add_scraped_events

def change_color(button):
    button.button_style = 'success' 

for i, widget_row in enumerate(scraper_widget_rows):
    url_button = widget_row['open_url']
    scraper_button = widget_row['start_scraper']
    url_button.on_click(open_url_func(ScraperCollection.scrapers[i].url))
    url_button.on_click(change_color)
    scraper_button.on_click(change_color)
    scraper_button.on_click(add_scraped_events_to_grid_draft(ScraperCollection.scrapers[i]))
