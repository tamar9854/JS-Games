const shopping = {
  products: [
    { id: 1, name: "phone 1", price: 1100, img: "phone1.jpeg" },
    { id: 2, name: "phone 2", price: 1500, img: "phone2.jpg" },
    { id: 3, name: "phone 3", price: 1600, img: "phone3.jpg" },
    { id: 4, name: "Dell Computer", price: 2000, img: "computer.webp" },
    { id: 5, name: "Logitech Mouse", price: 80, img: "mouse2.webp" },
    { id: 6, name: "Mouse pad", price: 15, img: "pad.jpeg" },
    { id: 7, name: "Asus Computer", price: 2200, img: "asus.jpeg" },
    { id: 8, name: "HP Mouse", price: 99, img: "mouse2.webp" },
    { id: 9, name: "KSP Computer", price: 1100, img: "ksp.jpeg" },
    { id: 10, name: "Ivory Computer", price: 1100, img: "ivory.jpeg" },
  ],
  cart: [],
};
function removeProduct(productIndex) {
  shopping.cart.splice(productIndex, 1);
  showCart();
}
function addProduct(product) {
  shopping.cart.push(product);
  showCart();
}

function showCart() {
  const cartList = document.querySelector(".shopping-list");
  const cartTotal = document.querySelector(".cart-total");
  while (cartList.children.length > 0) {
    cartList.removeChild(cartList.firstChild);
  }
  let sum = 0;
  let productIndex = 0;
  for (const p of shopping.cart) {
    const index = productIndex;
    sum += p.price;
    const li = document.createElement("li");
    li.setAttribute("data-id", p.id);
    const productName = document.createElement("h3");
    productName.textContent = p.name;
    li.appendChild(productName);
    const price = document.createElement("label");
    price.textContent = p.price;
    li.appendChild(price);
    const addButton = document.createElement("button");
    addButton.textContent = "remove";
    addButton.addEventListener("click", () => removeProduct(index));
    li.appendChild(addButton);
    cartList.appendChild(li);
    productIndex++;
  }
  cartTotal.textContent = `Total amount is ${sum}`;
}

function showProducts() {
  const productList = document.querySelector(".product-list");
  for (const p of shopping.products) {
    const li = document.createElement("li");
    li.setAttribute("data-id", p.id);
    const productName = document.createElement("h3");
    productName.textContent = p.name;
    li.appendChild(productName);
    const price = document.createElement("label");
    price.textContent = p.price;
    li.appendChild(price);
    const img = document.createElement("img");
    img.src = `images\\${p.img}`;
    img.alt = p.name;
    li.appendChild(img);
    li.appendChild(document.createElement("br"));
    const addButton = document.createElement("button");
    addButton.textContent = "add";
    addButton.addEventListener("click", () => addProduct(p));
    li.appendChild(addButton);
    productList.appendChild(li);
  }
}

function save() {
  const data = JSON.stringify(shopping.cart);
  localStorage.setItem("cart", data);
}

function get() {
  const getit = localStorage.getItem("cart");
  if (getit) {
    shopping.cart = JSON.parse(getit);
    showCart();
  }
}

function clear() {
  shopping.cart = [];
  showCart();
}

function buy() {
  if (shopping.cart.length == 0) {
    alert("your Cart List is Empty");
    return;
  } else {
    alert("thank you for buying");
    clear();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  showProducts();
  const btnsave = document.querySelector("#btnsave");
  btnsave.addEventListener("click", save);
  const load = document.querySelector("#load");
  load.addEventListener("click", get);
  const clearbtn = document.getElementById("clear");
  clearbtn.addEventListener("click", clear);
  const paybtn = document.getElementById("pay");
  paybtn.addEventListener("click", buy);
});
