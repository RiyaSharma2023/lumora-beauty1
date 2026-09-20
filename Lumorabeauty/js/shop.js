let cartCount = 0;
const cartButtons = document.querySelectorAll(".shop-add-cart");
const cartCountElement = document.getElementById("cart-count");
let cart = JSON.parse(localStorage.getItem("lumoraCart")) || [];
cartCount = cart.length;
cartCountElement.textContent = cartCount;
cartButtons.forEach(function(button){
    button.addEventListener("click", function(){
       const product = {name:button.dataset.name, price: Number(button.dataset.price),image:button.dataset.image};
       cart.push(product);
       localStorage.setItem("lumoraCart", JSON.stringify(cart));
       cartCount = cart.length;
       cartCountElement.textContent = cartCount;
       button.textContent = "ADDED ✅";
       setTimeout(function(){
        button.textContent = "Add To Cart"
       }, 1500);
    });
    }); 