let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function renderCart() {
  const cartList = document.getElementById("cart");
  const total = document.getElementById("total");
  cartList.innerHTML = "";
  let sum = 0;
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} – CHF ${item.price.toFixed(2)}`;
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Entfernen";
    removeBtn.onclick = () => {
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    };
    li.appendChild(removeBtn);
    cartList.appendChild(li);
    sum += item.price;
  });
  total.textContent = "Total: CHF " + sum.toFixed(2);
}

renderCart();
