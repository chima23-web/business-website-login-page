const password =
document.getElementById("password");
const togglePassword =
document.getElementById("toggle-password");
const eyeIcon =
togglePassword.querySelector("i");
togglePassword.addEventListener("click", function() {
 if (password.type  === "password") {
 password.type = "text";
 eyeIcon.classList.remove("fa-eye-slash");
 eyeIcon.classList.add("fa-eye");
}
else {
 password.type = "password";
 eyeIcon.classList.remove("fa-eye-slash");
 eyeIcon.classList.add("fa-eye");
 
}
});
const email =
document.getElementById("email");
const registerMessage =
document.getElementById("register-message");
const Button = 
document.getElementById("register");
if (Button) {
Button.addEventListener("click", function(event) {
 if (email.value.trim() === "" || 
password.value.trim() === "") {
 registerMessage.textContent = "please fill in all required fields.";
}
else {
 window.location.href ="index.html";
}
});
}
