const cartButtons = document.querySelectorAll(".add-cart");
const cartCountElement = document.getElementById("cart-count");
let cart = JSON.parse(localStorage.getItem("lumoraCart")) || [];
function updateCartCount() {
    let totalQuantity = 0;
    cart.forEach(function (product) {
        totalQuantity += product.quantity || 1;
    });
    cartCountElement.textContent = totalQuantity;
}
updateCartCount();
cartButtons.forEach(function (button) {
    button.addEventListener("click", function () {

        const productName = button.dataset.name;
        const productPrice = Number(button.dataset.price);
        const productImage = button.dataset.image;
        console.log(productName, productPrice, productImage);
        const existingProduct = cart.find(function (product) {
            return product.name === productName;
        });
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({
                name: productName,
                price: productPrice,
                image: productImage,
                quantity: 1
            });
        }
        localStorage.setItem("lumoraCart", JSON.stringify(cart));
        updateCartCount();
        button.textContent = "Added ✓";

        setTimeout(function () {
            button.textContent = "Add to cart";
        }, 1500);
    });
});