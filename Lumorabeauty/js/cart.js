const cart = JSON.parse(localStorage.getItem("lumoraCart")) || [];
console.log(cart);
const cartCotainer = document.querySelector(".col-lg-8");
cart.forEach(function (product) {
    const checkoutItem = document.createElement("div");
    checkoutItem.classList.add("cart-item");
    checkoutItem.innerHTML = `<div class="product-image"><img src="${product.image}" alt=${product.name}></div>
    <div class="product-info"><h5>${product.name}</h5><p>Premium beauty product</p>
    <div class="quantity"><button>-</button><span>${product.quantity || 1}</span><button>+</button></div></div>
    <div class="product-price"><span>${product.price}</span></div>
    <button class="remove-btn"><i class="fa-solid fa-trash"></i></button>`;
    cartCotainer.appendChild(checkoutItem);
});
const cartCountElement = document.getElementById("cart-count");
function updateCartCount() {
    const currentCartItems = document.querySelectorAll(".cart-item");
    let totalQuantity = 0;
    currentCartItems.forEach(function (item) {
        const quantity = parseInt(item.querySelector(".quantity span").textContent);
        totalQuantity = totalQuantity + quantity;
    });
    cartCountElement.textContent = totalQuantity;
}
const cartSection = document.querySelector(".cart-section");
const emptyCart = document.querySelector(".empty-cart");
emptyCart.style.display = "none";
const cartItems = document.querySelectorAll(".cart-item");
console.log(cartItems);
cartItems.forEach(function (items) {
    const plusButton = items.querySelectorAll(".quantity button")[1];
    const minusButton = items.querySelectorAll(".quantity button")[0];
    const removeButton = items.querySelector(".remove-btn");
    const quantitySpan = items.querySelector(".quantity span");
    const priceElement = items.querySelector(".product-price span");
    const price = parseFloat(priceElement.textContent.replace("₹", ""));
    const originalPrice = price;
    console.log(price);
    plusButton.addEventListener("click", function () {
        let quantity = parseInt(quantitySpan.textContent);
        quantity++;
        quantitySpan.textContent = quantity;
        updateItemPrice();
        updateSubTotal();
        saveCartToLocalStorage();
        updateCartCount();
    });
    minusButton.addEventListener("click", function () {
        let quantity = parseInt(quantitySpan.textContent);
        if (quantity > 1) {
            quantity--;

        }
        quantitySpan.textContent = quantity;
        updateItemPrice();
        updateSubTotal();
        saveCartToLocalStorage();
        updateCartCount();
    });
    removeButton.addEventListener("click", function () {
        items.remove();
        updateSubTotal();
        updateCartCount();
        saveCartToLocalStorage();
        const remainingItems = document.querySelectorAll(".cart-item");
        if (remainingItems.length === 0) {
            cartSection.style.display = "none";
            emptyCart.style.display = "block";
        }
    });
    function updateItemPrice() {
        priceElement.textContent = "₹" + originalPrice.toFixed(2);
    }
});
function updateSubTotal() {
    let subtotal = 0;
    const currentCartItems = document.querySelectorAll(".cart-item");
    const discountElement = document.getElementById("discount");
        const subtotalElement = document.getElementById("subtotal");
    const totalElement = document.getElementById("total");
    currentCartItems.forEach(function (item) {
        const itemPrice = parseFloat(item.querySelector(".product-price span").textContent.replace("₹", ""));
        const quantity = parseInt(item.querySelector(".quantity span").textContent);
        subtotal += itemPrice * quantity
    });
    subtotalElement.textContent = "₹" + subtotal.toFixed(2);
    totalElement.textContent = "₹" + subtotal.toFixed(2);
    if (subtotal >= 1000) {
        const discount = subtotal * 0.10;
        discountElement.textContent = "₹" + discount.toFixed(2);
        totalElement.textContent = "₹" + (subtotal - discount).toFixed(2);
    } else {
        discountElement.textContent = "₹0.00";
        totalElement.textContent = "₹" + subtotal.toFixed(2);
    }
}
updateCartCount();
updateSubTotal();
if (cart.length === 0) {
    cartSection.style.display = "none";
    emptyCart.style.display = "block";
}

const checkoutButton = document.querySelector(".checkout-btn");
checkoutButton.addEventListener("click", function () {
    window.location.href = "checkout.html";
});
function saveCartToLocalStorage() {
    const currentCartItems = document.querySelectorAll(".cart-item");
    const cart = [];
    currentCartItems.forEach(function (item) {
        const productName = item.querySelector(".product-info h5").textContent;
        const productImage = item.querySelector(".product-image img").getAttribute("src");
        const quantity = parseInt(item.querySelector(".quantity span").textContent);
        const priceText = item.querySelector(".product-price span").textContent;
        const price = parseFloat(priceText.replace("₹", "")) / quantity;
        cart.push({ name: productName, image: productImage, price: price, quantity: quantity });
    });
    localStorage.setItem("lumoraCart", JSON.stringify(cart));
}