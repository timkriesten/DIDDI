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
# #### Input Scraping Project

# %%
import ipywidgets as widgets
from ipywidgets import HBox, VBox, Button, Dropdown, FloatText, BoundedFloatText, BoundedIntText, Label, ToggleButtons, HTML, Checkbox, AppLayout, Layout, DatePicker
from ipyaggrid import Grid
import webbrowser
import pandas as pd
from src import scrapers_list, events_list2df, Event
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
} for scraper in scrapers_list]

date_and_scrapers = VBox([
    HBox(list(date_widgets.values())),
    *[HBox(list(widget_row.values())) for widget_row in scraper_widget_rows],
    ])

# date_and_scrapers

# %%
# generate draft grid widget

draft_column_defs = [{'headerName':'Start','field':'start_date', 'cellDataType': 'dateString', 'checkboxSelection': True},
               {'headerName':'Typ','field':'event_type'},
               {'headerName':'Titel','field':'title'},
               {'headerName':'URL','field':'url'},
               {'headerName':'Organisation','field':'organiser'},
               {'headerName':'Ort','field':'location'},
               {'headerName':'regelmäßig','field':'periodic', 'cellDataType': 'boolean'},
              ]

draft_grid_options = {
    'columnDefs' : draft_column_defs,
    'rowSelection': 'multiple',
    'suppressRowClickSelection': True,
    'defaultColDef': {
        'sortable': True,
        'editable': True,
        'resizable': True,
    # 'enableColResize': True,
    # 'enableFilter': True,
    # 'enableRangeSelection': True,
    }
}

draft_grid = Grid(grid_data=events_list2df([]),
         grid_options=draft_grid_options,
         theme='ag-theme-balham-dark',
         export_mode="auto",
         quick_filter=True,
         sync_on_edit=True,
         sync_grid=True,
         columns_fit='size_to_fit',
         # show_toggle_delete=True,
)

# grid_draft

# %%
# generate buttons for final grid

draft_button_add = Button(description='Neues Event', layout = button_layout)
draft_button_to_final = Button(description='Nach unten', layout = button_layout)
draft_button_delete = Button(description='Auswahl löschen', layout = button_layout)
draft_button_empty = Button(description='Tabelle löschen', layout = button_layout)
draft_buttons = HBox([draft_button_add, draft_button_to_final, draft_button_delete, draft_button_empty])


# %%
# generate final grid widget

final_column_defs = [{'headerName':'Start','field':'start_date', 'cellDataType': 'dateString', 'checkboxSelection': True},
               {'headerName':'Typ','field':'event_type'},
               {'headerName':'Titel','field':'title'},
               {'headerName':'URL','field':'url'},
               {'headerName':'Organisation','field':'organiser'},
               {'headerName':'Ort','field':'location'},
               {'headerName':'regelmäßig','field':'periodic', 'cellDataType': 'boolean'},
              ]

final_grid_options = {
    'columnDefs' : final_column_defs,
    'rowSelection': 'multiple',
    'suppressRowClickSelection': True,
    'defaultColDef': {
        'sortable': True,
        'editable': True,
        'resizable': True,
    # 'enableColResize': True,
    # 'enableFilter': True,
    # 'enableRangeSelection': True,
    }
}

final_grid = Grid(grid_data=events_list2df([]),
         grid_options=final_grid_options,
         theme='ag-theme-balham-dark',
         export_mode="auto",
         quick_filter=True,
         sync_on_edit=True,
         sync_grid=True,
         columns_fit='size_to_fit',
         show_toggle_edit=True,
         # show_toggle_delete=True,
)

# final_grid

# %%
# generate buttons for final grid

final_button_add = Button(description='Neue Veranstaltung', layout = button_layout)
final_button_delete = Button(description='Auswahl löschen', layout = button_layout)
final_buttons = HBox([final_button_add, final_button_delete])

# %%
# display the app

app = VBox([
    date_and_scrapers,
    draft_grid,
    draft_buttons,
    final_grid,
    final_buttons
    ])

app


# %%
# add functionality to date and scraper widgets

def open_url_func(url):
    def open_url(button):
        webbrowser.open_new_tab(url)
        button.button_style = 'sucess'
    return open_url

def add_scraped_events_to_grid_draft(scraper):
    def add_scraped_events(button):
        start_datetime = datetime.combine(date_widgets['start'].value, datetime.min.time())
        end_datetime = datetime.combine(date_widgets['end'].value, datetime.min.time())
        button.button_style = 'info'
        events = scraper.scrape_events(start_datetime, end_datetime)
        events_df = events_list2df(events)
        draft_grid.get_grid()
        df_old = draft_grid.grid_data_out['grid']
        df_new = pd.concat([df_old, events_df], ignore_index=True)
        draft_grid.update_grid_data(df_new)
        button.button_style = 'success'
    return add_scraped_events

for i, widget_row in enumerate(scraper_widget_rows):
    url_button = widget_row['open_url']
    scraper_button = widget_row['start_scraper']
    url_button.on_click(open_url_func(scrapers_list[i].url))
    scraper_button.on_click(add_scraped_events_to_grid_draft(scrapers_list[i]))


# %%
# add functionality to draft and final grid buttos

def add_row(grid: Grid):
    def add_row(button: Button):
        grid.get_grid()
        df_old = grid.grid_data_out['grid']
        start_datetime = datetime.combine(date_widgets['start'].value, datetime.min.time())
        df_new = pd.concat([df_old, events_list2df([Event(title = "TITEL", start_date = start_datetime, url = "www.gib_mir_einen_link.de")])], ignore_index=True)
        grid.update_grid_data(df_new)
    return add_row

def delete_rows(grid: Grid):
    def delete_rows(button: Button):
        grid.delete_selected_rows()
    return delete_rows

def empty(grid: Grid):
    def empty(button: Button):
        grid.update_grid_data(events_list2df([]))
    return empty

def move_selection(from_grid: Grid, to_grid: Grid):
    def move_selection(button: Button):
        from_grid.get_grid()
        to_grid.get_grid()
        df_selection = from_grid.grid_data_out['rows']
        df_to_grid = to_grid.grid_data_out['grid']
        df_combined = pd.concat([df_to_grid, df_selection], ignore_index=True)
        to_grid.update_grid_data(df_combined)
    return move_selection

draft_button_add.on_click(add_row(draft_grid))
draft_button_delete.on_click(delete_rows(draft_grid))
draft_button_empty.on_click(empty(draft_grid))
draft_button_to_final.on_click(move_selection(draft_grid, final_grid))

final_button_add.on_click(add_row(final_grid))
final_button_delete.on_click(delete_rows(final_grid))

# %%
