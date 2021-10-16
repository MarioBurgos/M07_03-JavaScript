$(document).ready(function() {
    $('#registerForm').submit(function(e) {
        e.preventDefault();
    }).validate({
        errorClass: "is-invalid",
        validClass: "is-valid",
        errorElement: "small",

        rules: {
            inputEmail: {
                required: true,
                regexEmail: true,
            },
            inputPassword: {
                required: true,
                minlength: 8,
                regexPassword: true,
            },
            inputAddress: {
                required: true,
            },
            inputProvince: {
                required: true,
            },
            inputCity: {
                required: true,
            },
            inputZip: {
                required: true,
                minlength: 5,
                regexZip: true
            },
            gridCheck: {
                required: true,
            }
        },
        messages: {
            inputEmail: {
                required: "Email requerido.",
                regexEmail: "Email incorrecto.",
            },
            inputPassword: {
                required: "Contraseña requerida.",
                minlength: "Contraseña demasiado corta.",
                regexPassword: "La contraseña es demasiado débil."

            },
            inputAddress: { required: "Dirección requerida.", },
            inputProvince: { required: "Provincia requerida.", },
            inputCity: { required: "Ciudad requerida.", },
            inputZip: {
                required: "Código Postal requerido.",
                minlength: "Demasiado corto.",
                regexZip: "Código Postal incorrecto."
            },
            gridCheck: "Debe aceptar la política de privacidad.",
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
    $.validator.addMethod("regexEmail", function(value, element) {
        var pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return this.optional(element) || pattern.test(value);
    });
    $.validator.addMethod("regexPassword", function(value, element) {
        var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; //no acepta caracteres especiales: #$%&
        return this.optional(element) || pattern.test(value);
    });
    $.validator.addMethod("regexZip", function(value, element) {
        var pattern = /^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/;
        return this.optional(element) || pattern.test(value);
    });


});