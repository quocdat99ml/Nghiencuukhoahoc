var username = document.getElementById("username");
var password = document.getElementById("password");

var username_error = document.getElementById('username_error');
var password_error = document.getElementById('password_error');
var successfullyLogin = document.getElementById("successfully-login");

var correctUsername = "admin";
var correctPassword = "admin";

function listenEnterPress(event) {
    if (event.key === "Enter") {
        console.log("enter pressed");
        validated();
    }
}

username.addEventListener("keypress", listenEnterPress);
password.addEventListener("keypress", listenEnterPress);

function validated() {
    if (username.value === correctUsername && password.value === correctPassword) {
        console.log("successfully login");
    } else {
        console.log("failed login");
    }
    if (username.value === correctUsername) {
        if (password.value === correctPassword) {
            console.log("successfully login");
            username_error.style.display = "none";
            password_error.style.display = "none";
            successfullyLogin.innerHTML = "Successfully Login";
            successfullyLogin.style.color = "green";
            window.location.href = "../main/index.html"
        } else {
            password_error.style.display = "block";
            username_error.style.display = "none";
            password_error.innerHTML = "Your password is incorrect";
        }
    } else {
        username_error.style.display = "block";
        password_error.style.display = "none";
        username_error.innerHTML = "Your username is incorrect";
    }
    // console.log("click")
}