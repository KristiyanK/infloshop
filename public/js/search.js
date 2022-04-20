const searchKey = decodeURI(location.pathname.split('/').pop());

const searchSpanElement = document.querySelector('#search-key');
searchSpanElement.innerHTML = searchKey;

getProducts(searchKey.toLowerCase()).then(data => createProductCards(data, '.card-container'));