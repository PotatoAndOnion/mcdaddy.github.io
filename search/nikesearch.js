import {nike_data} from '../data/nikedata.js';
let database = nike_data;
let currentPage = 1;
let resultsPerPage = 3;
let currentResults = [];

document.getElementById('btn').addEventListener('click', () => {
    let searchQuery = document.getElementById('searchInput').value.toLowerCase();
    currentResults = database.filter(entry => 
        entry.value.toLowerCase().includes(searchQuery) || 
        entry.data.retail_price_cents.toString().toLowerCase().includes(searchQuery)
    );
    currentPage = 1;
    displayResults();
});

function displayResults() {
    let resultsDiv = document.getElementById('searchResults');
    resultsDiv.innerHTML = '';

    let startIndex = (currentPage - 1) * resultsPerPage;
    let endIndex = startIndex + resultsPerPage;
    let paginatedResults = currentResults.slice(startIndex, endIndex);

    if (paginatedResults.length > 0) {
        paginatedResults.forEach(result => {
            let resultElement = document.createElement('div');
            resultElement.textContent = `Name: ${result.value}, Price: ${result.data.retail_price_cents}`;
            resultsDiv.appendChild(resultElement);
        });
    } else {
        resultsDiv.textContent = 'No Results Found';
    }
}
