const form = document.getElementById("form");
const email = document.getElementById("email");
const senha = document.getElementById("password");
const botao = document.getElementById("botao");

const emailFixo = "admin@gmail.com";
const senhaFixa = "12345";

function validarEmail(email){
    if (email === '' || email === null || email === undefined){
        console.log('Erro: Campo obrigatório');
        return false;
    }
    console.log('Campo válido');
    return true;
}







function validarEmail(email) {
     return email.includes('@') && email.includes('.');
}
    