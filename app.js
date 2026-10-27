const products = [
  { id: "titular", name: "Camiseta Titular", category: "Primera equipación", price: 58900, badge: "FAVORITA", art: "" },
  { id: "alternativa", name: "Camiseta Alternativa", category: "Edición visitante", price: 54900, badge: "NUEVA", art: "alternate" },
  { id: "retro", name: "Camiseta Retro 2000", category: "Edición retro", price: 62900, badge: "CLÁSICA", art: "retro" },
  { id: "campera", name: "Campera Xeneize", category: "Abrigo", price: 74900, badge: "ÚLTIMAS", art: "jacket" }
];

const sizes = ["S", "M", "L", "XL"];
const storageKey = "bestia-shop-cart";
const productList = document.querySelector("#product-list");
const cartItems = document.querySelector("#cart-items");
const cartCount = document.querySelector("#cart-count");
const cartHeadingCount = document.querySelector("#cart-heading-count");
const cartTotal = document.querySelector("#cart-total");
const clearCartButton = document.querySelector("#clear-cart");
const priceFormat = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0
});

function readCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
    if (!Array.isArray(saved)) return [];

    return saved.filter((item) => {
      const product = products.find((entry) => entry.id === item.productId);
      return product && sizes.includes(item.size) && Number.isInteger(item.quantity) && item.quantity > 0;
    });
  } catch {
    return [];
  }
}

let cart = readCart();

function saveCart() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(cart));
  } catch {
    // The cart remains usable for the current page if browser storage is unavailable.
  }
}

function renderProducts() {
  productList.innerHTML = products.map((product) => `
    <article class="product-card">
      <div class="product-art ${product.art}" role="img" aria-label="Diseño ilustrado de ${product.name}">
        <span class="product-badge">${product.badge}</span>
      </div>
      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3>${product.name}</h3>
        <p class="product-price">${priceFormat.format(product.price)}</p>
        <div class="product-actions">
          <label class="visually-hidden" for="size-${product.id}">Talle para ${product.name}</label>
          <select class="size-select" id="size-${product.id}" aria-label="Talle para ${product.name}">
            ${sizes.map((size) => `<option value="${size}">${size}</option>`).join("")}
          </select>
          <button class="add-button" type="button" data-add="${product.id}">Agregar al carrito</button>
        </div>
      </div>
    </article>
  `).join("");
}

function renderCart() {
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const total = cart.reduce((sum, item) => {
    const product = products.find((entry) => entry.id === item.productId);
    return sum + product.price * item.quantity;
  }, 0);

  cartCount.textContent = itemCount;
  cartHeadingCount.textContent = `${itemCount} ${itemCount === 1 ? "producto" : "productos"}`;
  cartTotal.textContent = priceFormat.format(total);
  clearCartButton.disabled = cart.length === 0;

  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="empty-cart">Todavía no agregaste productos.<br>¡Elegí tu favorito!</p>';
    return;
  }

  cartItems.innerHTML = cart.map((item) => {
    const product = products.find((entry) => entry.id === item.productId);
    return `
      <article class="cart-item">
        <div>
          <div class="cart-item-name">${product.name}</div>
          <div class="cart-item-size">Talle ${item.size}</div>
        </div>
        <span class="cart-item-price">${priceFormat.format(product.price * item.quantity)}</span>
        <div class="cart-item-controls" aria-label="Cantidad de ${product.name}, talle ${item.size}">
          <button class="quantity-button" type="button" data-change="-1" data-product="${item.productId}" data-size="${item.size}" aria-label="Quitar una unidad">−</button>
          <span class="quantity">${item.quantity}</span>
          <button class="quantity-button" type="button" data-change="1" data-product="${item.productId}" data-size="${item.size}" aria-label="Agregar una unidad">+</button>
          <button class="remove-button" type="button" data-remove="${item.productId}" data-size="${item.size}" aria-label="Eliminar ${product.name} talle ${item.size}">×</button>
        </div>
      </article>
    `;
  }).join("");
}

function updateCart() {
  saveCart();
  renderCart();
}

productList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add]");
  if (!button) return;

  const productId = button.dataset.add;
  const size = document.querySelector(`#size-${productId}`).value;
  const existingItem = cart.find((item) => item.productId === productId && item.size === size);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ productId, size, quantity: 1 });
  }
  updateCart();
});

cartItems.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  if (button.hasAttribute("data-change")) {
    const item = cart.find((entry) => entry.productId === button.dataset.product && entry.size === button.dataset.size);
    if (!item) return;
    item.quantity += Number(button.dataset.change);
    if (item.quantity <= 0) cart = cart.filter((entry) => entry !== item);
  } else if (button.hasAttribute("data-remove")) {
    cart = cart.filter((item) => item.productId !== button.dataset.remove || item.size !== button.dataset.size);
  }
  updateCart();
});

clearCartButton.addEventListener("click", () => {
  cart = [];
  updateCart();
});

renderProducts();
renderCart();
