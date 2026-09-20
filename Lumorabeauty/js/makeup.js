const cartCountElement = document.getElementById("cart-count");
const addCartButtons = document.querySelectorAll(".add-cart");
const cart = JSON.parse(localStorage.getItem("lumoraCart")) || [];
function updateCartCount() {
    let totalQuantity = 0;
    cart.forEach(function (item) {
        totalQuantity += item.quantity;
    });
    cartCountElement.textContent = totalQuantity;
}
updateCartCount();
addCartButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const productName = button.dataset.name;
        const productPrice = button.dataset.price;
        const productImage = button.dataset.image;

        console.log(productName);
        console.log(productPrice);
        console.log(productImage);
        const product = { name: productName, price: productPrice, image: productImage, quantity: 1 };
        const existingProduct = cart.find(function (item) {
            return item.name === productName;
        });
        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push(product);
        }
        localStorage.setItem("lumoraCart", JSON.stringify(cart));
        updateCartCount();
        button.textContent = "ADDED ✅";
        setTimeout(function () {
            button.textContent = "ADD TO CART";
        }, 1500);
    })
});
