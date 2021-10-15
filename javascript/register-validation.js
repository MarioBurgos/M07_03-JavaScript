const form = document.getElementById('myForm');

function registerValidate() {
    var acumErrores = 0;

    form.classList.remove('is-invalid');

    //var inputEmail = document.forms["myForm"]["inputEmail"];

    var inputEmail = document.getElementById('inputEmail');

    var inputPassword = document.forms["myForm"]["inputPassword"];
    var inputAddress = document.forms["myForm"]["inputAddress"];
    var inputProvince = document.forms["myForm"]["inputProvince"];
    var inputCity = document.forms["myForm"]["inputCity"];
    var inputZip = document.forms["myForm"]["inputZip"];
    var gridCheck = document.forms["myForm"]["gridCheck"];

    if (inputEmail.value == "") {
        inputEmail.classList.add("is-invalid");
        document.getElementById("errorEmail").textContent = "El campo es obligatorio";
        acumErrores++;
    } else if (!validar_email(inputEmail.value)) {
        inputEmail.classList.add("is-invalid");
        document.getElementById("errorEmail").textContent = "El email no cumple el formato";
        acumErrores++;
    }

    if (inputPassword.value == "") {
        inputPassword.classList.add("is-invalid");
        document.getElementById("errorPassword").textContent = "El campo es obligatorio";
        acumErrores++;
    }

    if (inputAddress.value == "") {
        inputAddress.classList.add("is-invalid");
        document.getElementById("errorAddress").textContent = "El campo es obligatorio";
        acumErrores++;
    }

    if (inputProvince.value == "") {
        inputProvince.classList.add("is-invalid");
        document.getElementById("errorProvince").textContent = "La provincia es obligatoria";
        acumErrores++;
    }

    if (inputCity.value == "") {
        inputCity.classList.add("is-invalid");
        document.getElementById("errorCity").textContent = "Falta la ciudad";
        acumErrores++;
    }

    if (!validarZip(inputZip.value)) {
        inputZip.classList.add("is-invalid");
        document.getElementById("errorZip").textContent = "El codigo postal no cumple los requisitos";
        acumErrores++;
    }

    if (!gridCheck.checked) {
        gridCheck.classList.add("is-invalid");
        document.getElementById("errorCheck").textContent = "Debes aceptar las bases";
        acumErrores++;
    }

    if (acumErrores > 0) {
        return false;
    } else {
        return true;
    }
}



form.addEventListener('blur', (event) => {
    console.log(event);
    if (event.target.value != '') event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);

function validar_email(email) {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}

function validarZip(zip) {
    var regex = /^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/;
    return regex.test(zip) ? true : false;
}