console.log("Accessories js connected");
window.addEventListener("DOMContentLoaded", function () {
    const cartCountElement = document.getElementById("cart-count");
    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem("lumoraCart")) || [];
        let totalQuantity = 0;
        cart.forEach(function (product) {
            totalQuantity += product.quantity || 1;
        });
        cartCountElement.textContent = totalQuantity;
    }
    updateCartCount();
    const addCartButton = document.querySelectorAll(".add-cart1");
        console.log("Buttons:", addCartButton.length);
        addCartButton.forEach(function (button) {
            button.addEventListener("click", function () {
                button.textContent = "ADDED✅";
                setTimeout(function (){
                    button.textContent = "Add to cart";
                }, 1500);
                // console.log("Add To Cart Clicked");
                const productBottom = button.parentElement;
                console.log(productBottom);
                const productPrice = productBottom.querySelector(".product-price1");
                console.log(productPrice);
                const price = productPrice.textContent;
                console.log(price);
                const productInfo = productBottom.parentElement;
                console.log(productInfo);
                const productName = productInfo.querySelector(".product-category1");
                console.log(productName);
                const name = productName.textContent;
                console.log(name);
                const productImage = productInfo.parentElement;
                console.log(productImage);
                const image = productImage.querySelector("img");
                console.log(image);
                const imagesrc = image.src;
                console.log(imagesrc);
                const product = { name: name, price: price, image: imagesrc, quantity: 1 };
                console.log(product);
                const cart = JSON.parse(localStorage.getItem("lumoraCart")) || [];
                console.log(cart);
                const existingProduct = cart.find(function (product) {
                    return product.name === name;
                });
                console.log(existingProduct);
                if (existingProduct) {
                    existingProduct.quantity = (existingProduct.quantity || 1) + 1;
                    console.log("Quantity:", existingProduct.quantity);
                    localStorage.setItem("lumoraCart", JSON.stringify(cart));
                } else {
                    console.log("new product");
                    cart.push(product);
                    console.log("Product added:", cart);
                    localStorage.setItem("lumoraCart", JSON.stringify(cart));
                }
                updateCartCount();
            })
        });
    });
