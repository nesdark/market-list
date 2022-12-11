const createProductButton = document.querySelector('#create-product');

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
});

function updateProductsCount() {
  const ul = document.querySelector('#products');
  const productElement = document.querySelector('#quantity-products');
  productElement.innerHTML = ul.children.length;
}

function updatePurchasedCount() {
  const quantityOfProducts =
    document.querySelector('#products').children.length;

  setTimeout(() => {
    const purchasedElement = document.querySelector('#quantity-purchased');

    let checkboxCheckedLength =
      document.querySelectorAll('input:checked').length;

    purchasedElement.innerHTML = `${checkboxCheckedLength} of ${quantityOfProducts}`;
  }, 100);
}

let counter = 0;
let delay = 0;
function addProduct() {
  let inputNameProduct = document.querySelector('#product-name');
  const formNameProduct = document.querySelector('form');
  const products = document.querySelector('#products');

  const theUserNotFilled = inputNameProduct.value == '';

  if (theUserNotFilled) {
    return;
  }

  products.innerHTML += `
  <li id="${counter}" style="animation-delay: ${delay}s">
  <input
  aria-label="Product purchased checkbox"
  type="checkbox"
  id="isBought${counter}"
  
  />

  <label for="isBought${counter}" onclick="updatePurchasedCount()"></label>
  <p>
    ${inputNameProduct.value}
  </p>


    <button onclick="deleteProduct(this)">
      <img src="./public/trash.svg" alt="Image of Trash" />
    </button>
  </li>  
  `;
  counter++;
  delay += 0.2;
  updateProductsCount();
  updatePurchasedCount();
  noProducts();

  setTimeout(() => {
    formNameProduct.reset();
  }, 100);
}

function deleteProduct(buttonDelete) {
  const li = buttonDelete.parentElement;
  const ul = document.querySelector('#products');
  ul.removeChild(li);

  updateProductsCount();
  updatePurchasedCount();
  noProducts();
}

function noProducts() {
  const quantityOfProducts =
    document.querySelector('#products').children.length;
  const main = document.querySelector('main');
  if (quantityOfProducts == 0) {
    main.classList.add('no-products');
  } else {
    main.classList.remove('no-products');
  }
}
