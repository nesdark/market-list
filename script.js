const createProductButton = document.querySelector('#create-product');

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
});

let counter = 0;
function addProduct() {
  const inputNameProduct = document.querySelector('#product-name').value;
  const products = document.querySelector('#products');

  products.innerHTML += `
  <li id="${counter}">
  <input
  aria-label="Product purchased checkbox"
  type="checkbox"
  id="isBought${counter}"
  />

  <label for="isBought${counter}"></label>
  <p>
    ${inputNameProduct}
  </p>


    <button onclick="deleteProduct(this)">
      <img src="./public/trash.svg" alt="Image of Trash" />
    </button>
  </li>  
  `;
  counter++;
}

function deleteProduct(buttonDelete) {
  const li = buttonDelete.parentElement;
  li.style.display = 'none';
}
