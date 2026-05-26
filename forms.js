const form = document.querySelector(".form");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const botao = document.getElementById("botao");

const emailFixo = "admin@gmail.com";
const senhaFixa = "12345";

function validarEmail(emailDigitado) {
    return emailDigitado.includes("@") && emailDigitado.includes(".");
}

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const valorEmail = email.value;
    const valorSenha = senha.value;

    if (valorEmail === "" || valorSenha === "") {
        alert("Preencha todos os campos!");
        return;
    }

    if (!validarEmail(valorEmail)) {
        alert("Digite um email válido!");
        return;
    }

    if (valorEmail === emailFixo && valorSenha === senhaFixa) {
        alert("Login realizado com sucesso!");
    } else {
        alert("email ou senha incorretos, autodestruição iniciada");
    }
});