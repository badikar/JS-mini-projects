import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupSearch = (store) => {
  const form = getElement('.input-form');
  const nameInput = getElement('.search-input');

  form.addEventListener('keyup', function (e) {
    const value = nameInput.value;
    if (value) {
      const newStore = store.filter((product) => {
        //  prop of product obj
        let { name } = product;
        name = name.toLowerCase();
        if (name.startsWith(value)) {
          return product;
        }
      });
      display(newStore, getElement('.products-container'));
      if (newStore.length < 1) {
        const products = getElement('.products-container');
        products.innerHTML = `<h3 class="filter-error">Sorry, no products match your search</3>`;
      }
    } else {
      display(store, getElement('.products-container'));
    }
  });
};

export default setupSearch;
