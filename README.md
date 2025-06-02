# Acronym.DB - Chrome Extension

## Description

Acronym.DB is a New Relic Chrome extension designed for quick and easy searching of a predefined list of acronyms, their meanings, and related information. It features a cyberpunk-themed UI and allows users to instantly find explanations for various terms directly within their browser.

This extension is ideal for teams or individuals who frequently encounter specific jargon or acronyms and need a readily accessible reference tool.

## Features

* **Instant Search:** Quickly search through a local database of acronyms.
* **Comprehensive Details:** Displays the acronym, its context, a short explanation, and more detailed information.
* **Direct Links:** Provides direct links to relevant resources for further reading, where available.
* **Cyberpunk UI:** Aesthetically pleasing interface with a cyberpunk theme, inspired by New Relic's design language.
* **Client-Side Data:** All acronym data is stored locally within the extension for fast, offline access.
* **Responsive Popup:** The extension popup is designed to be clear and usable.
* **Easy Customization:** Acronym data can be easily updated by modifying the `js/data.js` file.

## Folder Structure

```text
acronym-search-extension/
├── css/
│   └── styles.css    # Custom CSS for styling the popup
├── js/
│   ├── data.js       # Contains the array of acronym objects
│   └── popup.js      # JavaScript logic for search and UI rendering
├── images/
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
├── manifest.json     # Chrome extension manifest file
├── popup.html        # HTML structure for the extension's popup
└── README.md         # This file
```

## Setup and Installation

To install and use this extension locally:

1.  **Clone or Download:** Get the project files onto your local machine.
2.  **Load into Chrome:**
    * Open Google Chrome and navigate to `chrome://extensions`.
    * Enable "Developer mode" using the toggle in the top right corner.
    * Click the "Load unpacked" button.
    * Select the `acronym_db` project folder.
3.  **Pin the Extension (Optional):** Click the puzzle piece icon in the Chrome toolbar, find "Acronym.DB", and click the pin icon to keep it visible.

## How to Use

1.  Click the Acronym.DB extension icon in your Chrome toolbar.
2.  The popup window will appear.
3.  Type your search query (acronym, keyword from explanation, context, etc.) into the search bar.
4.  Results will be displayed dynamically as you type.
5.  Click on any "Access Holo-Link" (if available) to open the associated URL in a new tab.

## Customization

* **Acronym Data:** The primary source of data is `js/data.js`. You can add, remove, or modify entries in the `acronymData` array. Ensure the JavaScript array and object syntax is correct.
* **Styling:** The visual appearance is controlled by `popup.html` (using Tailwind CSS classes) and `css/styles.css`. You can modify these files to change colors, fonts, layout, etc. The cyberpunk theme colors are defined as CSS variables in `css/styles.css`.
* **Icons:** Replace the placeholder icons in the `images/` folder with your own `icon16.png`, `icon48.png`, and `icon128.png`.

## Contributing
If you would like to contribute to this project, please follow these steps:
1.  Fork the repository on GitHub.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with clear messages.
4.  Push your changes to your forked repository.
5.  Submit a pull request to the main repository.

---

Happy Searching!
