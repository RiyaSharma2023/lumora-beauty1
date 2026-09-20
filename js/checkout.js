const checkoutItems = document.querySelectorAll(".checkout-item");
console.log("checkout-item");
const cart = JSON.parse(localStorage.getItem("lumoraCart")) || [];
console.log(cart);
const checkoutSummary = document.querySelector(".checkout-summary");
console.log("checkoutSummary");
const subtotalElement = document.querySelector(".summary-row span:last-child");
console.log(subtotalElement);
const discountElement = document.querySelectorAll(".summary-row")[2].querySelector("span:last-child");
console.log(discountElement);
const totalElement = document.querySelector(".summary-total span:last-child");
console.log(totalElement);
let subtotal = 0;
cart.forEach(function (product) {
    const productName = product.name;
    const productPrice = parseFloat(product.price.toString().replace("₹", ""));
    const quantity = product.quantity || 1;
    const itemTotal=  productPrice * quantity;
    subtotal = subtotal + itemTotal;

    console.log(productName);
    console.log(productPrice);
    const checkoutItem = document.createElement("div");
    checkoutItem.classList.add("checkout-item");
    checkoutItem.innerHTML = `<div> <h6>${productName}</h6>
    <span>Qty: ${quantity}</span>
    </div>
    <strong>₹${itemTotal.toFixed(2)}</strong>`;
    checkoutSummary.insertBefore(checkoutItem, checkoutSummary.querySelector(".summary-row"));
});
subtotalElement.textContent = "₹"+ subtotal.toFixed(2);
let discount = 0;
if(subtotal >= 1000){
   discount = subtotal * 0.10;
}
console.log(discount);
discountElement.textContent = "₹" + discount.toFixed(2);
const total = subtotal - discount;
totalElement.textContent = "₹" + total.toFixed(2);
const placeOrderButton = document.querySelector(".place-order-btn");
console.log(placeOrderButton);
placeOrderButton.addEventListener("click", function () {
    const firstName = document.getElementById("firstname");
    if (firstName.value.trim() === "") {
        alert("Please enter your first name");
        firstName.focus();
        return;
    }
    if (!/^[A-Za-z]+$/.test(firstName.value)) {
        alert("Please enter a valid first name");
        firstName.focus();
        return;
    }
    console.log("First Name:", firstName.value);
    const lastName = document.getElementById("lastname");
    if (lastName.value.trim() === "") {
        alert("Please enter your last name");
        lastName.focus();
        return;
    }
    if (!/^[A-Za-z]+$/.test(lastName.value)) {
        alert("Please enter a valid last name");
        lastName.focus();
        return;
    }
    console.log("Last Name:", lastName.value);
    const email = document.getElementById("email");
    if (email.value.trim() === "") {
        alert("Please enter your email");
        email.focus();
        return;
    }
if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        alert("please enter valid email");
        email.focus();
        return;
    }
    console.log("email:", email.value);
    const mobile = document.getElementById("mobile");
    if (mobile.value.trim() === "") {
        alert("Please enter your mobile");
        mobile.focus();
        return;
    }
    if (!/^\d+$/.test(mobile.value)) {
        alert("Please enter a valid mobile number");
        mobile.focus();
        return;
    }
    if (mobile.value.length != 10) {
        alert("please enter a 10 digit mobile number");
        mobile.focus();
        return;
    }

    console.log("mobile:", mobile.value);
    const address = document.getElementById("address");
    if (address.value.trim() === "") {
        alert("Please enter your adddress");
        address.focus();
        return;
    }
    if (address.value.trim().length < 5) {
        alert("Please enter a valid address");
        address.focus();
        return;
    }
    console.log("address:", address.value);
    const city = document.getElementById("city");
    if (city.value.trim() === "") {
        alert("Please enter your city");
        city.focus();
        return;
    }
    if (!/^[A-Za-z]+$/.test(city.value)) {
        alert("Please enter a valid city");
        city.focus();
        return;
    }
    console.log("City:", city.value);
    const postalCode = document.getElementById("postalcode");
    if (postalCode.value.trim() === "") {
        alert("Please enter your postal");
        postalCode.focus();
        return;
    }
    if (!/^\d+$/.test(postalCode.value)) {
        alert("Please enter a valid postal code");
        postalCode.focus();
        return;
    }
    if (postalCode.value.length != 6) {
        alert("please enter a 6 digit postal code");
        postalCode.focus();
        return;
    }
    console.log("Postal Code:", postalCode.value);
    const paymentMethod = document.querySelector('input[name="payment"]:checked');
    if (!paymentMethod) {
        alert("Please select a payment method");
        return;
    }

    alert("Order Placed Successfully!");
    localStorage.removeItem("lumoraCart");
    window.location.href = "success.html";
});

