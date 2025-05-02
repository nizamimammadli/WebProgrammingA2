//Access Elements from the web page
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const result = document.getElementById("result");
const form = document.getElementById("registrationForm");
const resetBtn = document.getElementById("resetBtn");

//Username Validation
function validateUsername() {
    const message = document.getElementById("usernameMessage");
    if (username.value.length < 4) {
        username.classList.add("error");
        username.classList.remove("success");
        message.innerText = "Username too short (min 4 characters)";
        return false;
    } else {
        username.classList.remove("error");
        username.classList.add("success");
        message.innerText = "";
        return true;
    }
}

//Email Validation
function validateEmail() {
    const message = document.getElementById("emailMessage");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        email.classList.add("error");
        email.classList.remove("success");
        message.innerText = "Invalid email format";
        return false;
    } else {
        email.classList.remove("error");
        email.classList.add("success");
        message.innerText = "";
        return true;
    }
}

//Password Validation
function validatePassword() {
    const message = document.getElementById("passwordMessage");
    if (password.value.length < 6) {
        password.classList.add("error");
        password.classList.remove("success");
        message.innerText = "Password too short (min 6 characters)";
        return false;
    } else {
        password.classList.remove("error");
        password.classList.add("success");
        message.innerText = "";
        return true;
    }
}

//Confirm Password Validation
function validateConfirmPassword() {
    const message = document.getElementById("confirmPasswordMessage");
    if (confirmPassword.value !== password.value || confirmPassword.value === "") {
        confirmPassword.classList.add("error");
        confirmPassword.classList.remove("success");
        message.innerText = "Passwords do not match";
        return false;
    } else {
        confirmPassword.classList.remove("error");
        confirmPassword.classList.add("success");
        message.innerText = "";
        return true;
    }
}

//Event Listeners for Real-time Validation
username.addEventListener("input", validateUsername);
email.addEventListener("input", validateEmail);
password.addEventListener("input", validatePassword);
confirmPassword.addEventListener("input", validateConfirmPassword);

// Submit Event
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const isUsernameValid = validateUsername();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    if (isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
        result.innerHTML = `<p style="color: green;">Registration Successful!</p>`;
    } else {
        result.innerHTML = "";
    }
});

// Reset Button
resetBtn.addEventListener("click", function() {
    username.value = "";
    email.value = "";
    password.value = "";
    confirmPassword.value = "";

    username.classList.remove("error", "success");
    email.classList.remove("error", "success");
    password.classList.remove("error", "success");
    confirmPassword.classList.remove("error", "success");

    document.getElementById("usernameMessage").innerText = "";
    document.getElementById("emailMessage").innerText = "";
    document.getElementById("passwordMessage").innerText = "";
    document.getElementById("confirmPasswordMessage").innerText = "";
    result.innerHTML = "";
});



//Nizami Mammadli 64230032