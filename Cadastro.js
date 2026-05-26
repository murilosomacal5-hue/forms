const form = document.querySelector(".form");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const cpf = document.getElementById("cpf");


// RegEx //

const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const regexTelefone = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;

function validarEmail(emailDigitado) {
    return regexEmail.test(emailDigitado);

}