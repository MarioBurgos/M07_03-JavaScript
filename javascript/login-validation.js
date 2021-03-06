const form = document.getElementById("loginFormId");

form.addEventListener('blur', (event) => {
    console.log(event);
    if (event.target.value != "") {
        event.target.classList.remove("is-valid");
    }
}, true);

function loginValidate() {
    var acumErrors = 0;

    var inputEmail = document.forms["loginForm"]["inputEmail"];
    var inputPassword = document.forms["loginForm"]["inputPassword"];
    // var inputEmail = document.getElementById("inputEmail");
    // var inputPassword = document.getElementById("inputPassword");

    form.classList.remove('is-invalid');

    // email validation
    if (inputEmail.value === "") {
        inputEmail.classList.add("is-invalid");
        document.getElementById("emailFeedback").textContent = "Este campo es obligatorio";
        acumErrors++;
    } else if (!validateEmail(inputEmail.value)) {
        inputEmail.classList.add("is-invalid");
        document.getElementById("emailFeedback").textContent = "Email incorrecto";
        acumErrors++;
    }

    // password validation
    if (inputPassword.value === "") {
        inputPassword.classList.add("is-invalid");
        document.getElementById("passwordFeedback").textContent = "Este campo es obligatorio";
        acumErrors++;
    } else if (String(inputPassword.value).length <= 3) {
        inputEmail.classList.add("is-invalid");
        document.getElementById("passwordFeedback").textContent = "Password demasiado corto";
        acumErrors++;
    } else {
        inputPassword.classList.remove("is-invalid");
        inputPassword.classList.add("is-valid");

    }

    // count errors
    if (acumErrors > 0) {
        return false;
    } else { return true; }
}

function validateEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email.toLowerCase()) ? true : false;
}