// popup.js

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const resultsArea = document.getElementById('resultsArea');
    const resultsCount = document.getElementById('resultsCount');

    // Ensure essential elements exist
    if (!searchInput || !resultsArea || !resultsCount) {
        console.error("One or more essential UI elements (searchInput, resultsArea, resultsCount) are missing from popup.html.");
        if (resultsArea) resultsArea.innerHTML = '<p id="initialMessage" class="text-red-500 text-center p-4">Critical UI Error. Check console.</p>';
        return;
    }

    if (typeof acronymData === 'undefined' || !Array.isArray(acronymData)) {
        console.error("Acronym data (acronymData) not found or is not an array. Make sure data.js is loaded correctly and the variable is defined.");
        resultsArea.innerHTML = '<p id="initialMessage" class="text-red-500 text-center p-4">Error: Acronym data could not be loaded. Please check data.js and the console.</p>';
        resultsCount.textContent = "Error";
        return;
    }

    const displayInitialMessage = () => {
        if (acronymData.length === 0) {
            resultsArea.innerHTML = `<p id="initialMessage">No acronyms loaded. Please check your data.js file.</p>`;
        } else {
            resultsArea.innerHTML = `<p id="initialMessage">Search your acronyms... System Online</p>`;
        }
        resultsCount.textContent = acronymData.length;
    };

    const highlightText = (text, query) => {
        if (!query || !text) return String(text);
        const escapedQuery = String(query).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`(${escapedQuery})`, 'gi');
        return String(text).replace(regex, '<span class="highlight">$1</span>');
    };

    const renderResults = (results, query = "") => {
        resultsArea.innerHTML = ''; 

        if (results.length === 0 && query) {
            resultsArea.innerHTML = `<p class="empty-message">No data nodes found for query: "${highlightText(query, query)}".</p>`;
        } else if (results.length === 0 && !query && acronymData.length > 0) {
             displayInitialMessage();
        } else if (results.length === 0 && acronymData.length === 0) {
            resultsArea.innerHTML = `<p id="initialMessage">Acronym database is empty. Please populate data.js.</p>`;
        } else {
            results.forEach(item => {
                const resultItem = document.createElement('div');
                resultItem.className = 'result-item'; // Main class for styling

                const acronymHTML = highlightText(item.acronym || "N/A", query);
                const contextHTML = highlightText(item.context || "N/A", query);
                const shortExplanationHTML = highlightText(item.shortExplanation || "No short explanation.", query);
                const longExplanationHTML = highlightText(item.longExplanation || "No further details.", query);

                let linkHTML = '';
                if (item.link) {
                    let validLink = String(item.link);
                    if (!validLink.startsWith('http://') && !validLink.startsWith('https://')) {
                        validLink = 'https://' + validLink;
                    }
                    try {
                        new URL(validLink);
                        // SVG arrow icon, ensure it can inherit color via 'currentColor' in CSS
                        const arrowSVG = `<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>`;
                        linkHTML = `<div class="link-container">
                                        <a href="${validLink}" target="_blank" rel="noopener noreferrer">
                                            Access Holo-Link ${arrowSVG}
                                        </a>
                                    </div>`;
                    } catch (e) {
                        linkHTML = `<div class="link-container"><span class="text-sm text-cyber-gray/70">(Invalid link format)</span></div>`;
                    }
                } else {
                    linkHTML = `<div class="link-container"><span class="text-sm text-cyber-gray/70">No external link</span></div>`;
                }

                resultItem.innerHTML = `
                    <h3>${acronymHTML}</h3>
                    <div class="context-tag">${contextHTML}</div>
                    <p class="explanation">${shortExplanationHTML}</p>
                    ${item.longExplanation && String(item.longExplanation).trim() !== "" ? `
                    <div class="details-section">
                        <strong>DATA STREAM (More Details):</strong>
                        <p>${longExplanationHTML}</p>
                    </div>
                    ` : ''}
                    ${linkHTML}
                `;
                resultsArea.appendChild(resultItem);
            });
        }
        resultsCount.textContent = results.length;
         if (results.length === 0 && !query && acronymData.length > 0) {
            resultsCount.textContent = acronymData.length;
        }
    };

    const searchAcronyms = (query) => {
        const lowerCaseQuery = String(query).toLowerCase().trim();

        if (!lowerCaseQuery) {
            if (acronymData.length > 0) {
                renderResults(acronymData, ""); // Show all items if search is cleared
            } else {
                displayInitialMessage(); // Show "No acronyms loaded" if data is empty
            }
            return;
        }

        const filteredResults = acronymData.filter(item => {
            const acronymMatch = item.acronym && String(item.acronym).toLowerCase().includes(lowerCaseQuery);
            const contextMatch = item.context && String(item.context).toLowerCase().includes(lowerCaseQuery);
            const shortExpMatch = item.shortExplanation && String(item.shortExplanation).toLowerCase().includes(lowerCaseQuery);
            const longExpMatch = item.longExplanation && String(item.longExplanation).toLowerCase().includes(lowerCaseQuery);
            return acronymMatch || contextMatch || shortExpMatch || longExpMatch;
        });

        renderResults(filteredResults, query);
    };

    let debounceTimer;
    const debouncedSearch = (query) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            searchAcronyms(query);
        }, 250);
    };

    searchInput.addEventListener('input', (event) => {
        debouncedSearch(event.target.value);
    });
    
    // Initial display
    if (acronymData.length > 0) {
        displayInitialMessage(); // This will show the "System Online" message
        // To show all results initially instead of the message, uncomment the next line and comment out displayInitialMessage():
        // renderResults(acronymData, ""); 
    } else {
        displayInitialMessage(); // This will show "No acronyms loaded..."
    }
});
