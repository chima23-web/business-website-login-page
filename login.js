const password =
document.getElementById("password");
const togglePassword =
document.getElementById("toggle-password");
togglePassword.addEventListener("click", function() {
 if (password.type  === "password") {
 password.type = "text";
}
else {
 password.type = "password";
 
}
});
const email =
document.getElementById("email");
const loginMessage =
document.getElementById("login-message");
const Button = 
document.getElementById("login");
if (Button) {
Button.addEventListener("click", function(event) {
 if (email.value.trim() === "" || 
password.value.trim() === "") {
 loginMessage.textContent = "please fill in all required fields.";
}
else {
 window.location.href ="dashboard.html";
}
});
}
