const form = document.getElementById("newsForm");

form.addEventListener('blur', (event) => {
    console.log(event);
    if (event.target.value != "") {
        event.target.classList.remove("is-valid");
    }
}, true);

function newsletterValidate() {
    var acumErrors = 0;

    var inputEmail = document.forms["newsForm"]["inputEmail"];

    form.classList.remove('is-invalid');

    // email validation
    if (inputEmail.value === "") {
        inputEmail.classList.add("is-invalid");
        acumErrors++;
    } else if (!validateEmail(inputEmail.value)) {
        inputEmail.classList.add("is-invalid");
        acumErrors++;
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