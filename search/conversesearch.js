import { converse_data } from '../data/conversedata.js';
let button = document.getElementById('button');

button.addEventListener('click', (event) => {
    event.preventDefault();
    const inputData = document.getElementById('searchInput').value;
  
    const products = converse_data.response.results;
    const searchResults = searchByProductName(products, inputData);
  
    displayResults(searchResults);
});



function searchByProductName(products, searchTerm) {
  const results = [];
  searchTerm = searchTerm.toLowerCase();

  products.forEach(product => {
    const productName = product.value.toLowerCase();
    if (productName.includes(searchTerm)) {
      results.push(product);
    }
  });

  return results;
}

function displayResults(searchResults) {
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = '';

  if (searchResults.length > 0) {
    searchResults.forEach(result => {
      const { value, retail_price_cents, image_url, release_date } = result.data;
      console.log(result.value)
      const productDiv = document.createElement('div');
      productDiv.innerHTML = `
      <div class="product-card">
        <p>Name: ${result.value}</p>
        <p>Retail Price: ${retail_price_cents}</p>
        <p>Release Date: ${release_date}</p>
        <img src="${image_url}" alt="${value}">
      </div>
      `;
      resultsContainer.appendChild(productDiv);
    });
  } else {
    resultsContainer.textContent = `No results found`;
  }
}