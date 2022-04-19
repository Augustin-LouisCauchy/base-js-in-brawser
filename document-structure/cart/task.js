const quantatyBlock = document.getElementsByClassName(
  "product__quantity-controls"
);
const quantatyRemove = document.querySelectorAll(
  ".product__quantity-control_dec"
);
const quantatyAdd = document.querySelectorAll(".product__quantity-control_inc");
const quantatyValue = document.querySelectorAll(".product__quantity-value");
const cartProducts = document.querySelector(".cart__products");
const productAdd = document.querySelectorAll(".product__add");

//Увеличение кол-ва
quantatyAdd.forEach(
  (e, i) =>
    (e.onclick = () => {
      quantatyValue[i].textContent = +quantatyValue[i].textContent + 1;
    })
);

//Уменьшение кол-ва
quantatyRemove.forEach(
  (e, i) =>
    (e.onclick = () => {
      if (quantatyValue[i].textContent <= 1) {
        return;
      } else {
        quantatyValue[i].textContent = +quantatyValue[i].textContent - 1;
      }
    })
);

//Добавление в корзину товара
productAdd.forEach(
  (e, i) =>
    (e.onclick = () => {
      addProduct(e, i);
    })
);

function addProduct(e, i) {
  let product = e.closest(".product").querySelector("img");
  let dataID = e.closest(".product").getAttribute("data-id");
  //Массив с id-товаров из корзины
  let idf = Array.from(cartProducts.querySelectorAll(".cart__product")).map(
    (elem) => elem.getAttribute("data-id")
  );

  if (idf.includes(dataID)) {
    let newCartQuantaty = Array.from(
      cartProducts.querySelectorAll(".cart__product")
    )[idf.indexOf(dataID)];
    newCartQuantaty.querySelector(".cart__product-count").textContent =
      +newCartQuantaty.querySelector(".cart__product-count").textContent +
      +quantatyValue[i].textContent;
  } else {
    if (quantatyValue[i].textContent >= 1) {
      cartProducts.insertAdjacentHTML(
        "afterbegin",
        `<div class="cart__product" data-id="` +
          dataID +
          `">
     <img class="cart__product-image" src="` +
          product.getAttribute("src") +
          `">
     <div class="cart__product-count">` +
          quantatyValue[i].textContent +
          `</div></div>`
      );
    }
  }
  quantatyValue[i].textContent = 1;
}
