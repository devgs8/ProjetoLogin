document.addEventListener("DOMContentLoaded", function () {
    const signUpLink = document.querySelector(".login-form-subscribe a");
    const loginLink = document.querySelector(".sign-up-form-login a");

    const showFormSignUp = () => {
        document.querySelector(".login-form").style.display = "none";
        document.querySelector(".sign-up-form").style.display = "flex";
        document.querySelector(".login-text-content h2").innerHTML = 
        "Olá Seja bem-vindo(a).";
        document.querySelector(".login-text-content p").innerHTML = 
        "Cria a sua conta para acessar a plataforma.";
    };

    const showFormLogin = () => {
        document.querySelector(".login-form").style.display = "flex";
        document.querySelector(".sign-up-form").style.display = "none";
        document.querySelector(".login-text-content h2").innerHTML = 
        "Olá Seja <br /> bem-vindo(a) de volta.";
        document.querySelector(".login-text-content p").innerHTML = 
        "Faça login para continuar acessar a pagina.";
    };

    signUpLink.addEventListener("click", function (event) {
        event.preventDefault();
        showFormSignUp();
    });
    loginLink.addEventListener("click", function (event) {
        event.preventDefault();
        showFormLogin();
    });
});