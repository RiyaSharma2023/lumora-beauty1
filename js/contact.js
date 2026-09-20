const contactForm = document.querySelector(".form form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const subjectInput = document.querySelector("#subject");
const messageInput = document.querySelector("#message");
console.log(contactForm);
contactForm.addEventListener("submit", function(event){
    event.preventDefault();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim();
    const message = messageInput.value.trim();
    if(name === "" || email === "" || subject === "" || message === ""){
        alert("Please fill in all fields");
        return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email)){
        alert("Please enter a valid email address");
        return;
    }
    alert("Thank You! Your message has been sent successfully!");
    contactForm.reset();
});