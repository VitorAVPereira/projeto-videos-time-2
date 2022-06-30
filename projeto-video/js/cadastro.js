var formC=document.forms.formCadastro

let senha = document.getElementById('senha');
let senhaC = document.getElementById('senhaC');

function validarSenha() {
  if (senha.value != senhaC.value) {
   senhaC.setCustomValidity("Senhas diferentes!");
   senhaC.reportValidity();
   return false;
   }else {
   senhaC.setCustomValidity("");
    return true;
  }
}
document.querySelector("#btContato").onclick=function(){
    if(formC.nomeContato.value == ""){
        alert ("Preencha o nome!")
    }else if (formC.emailContato.value == ""){
        alert ("Preencha com seu E-mail!")
    }else if (formC.telefoneContato.value == ""){
        alert ("Preencha com seu telefone!")
    }else if (formC.preferenciaContato.value == ""){
        alert ("Escolha uma Preferễncia!")
    }else if (formC.senha.value == ""){
        alert ("Crie sua senha!")
    }else if (formC.senhaC.value == ""){
        alert ("Confirme sua senha!")
    }else if (formC.senhaC.value != formC.senha.value){
        validarSenha()
    }else{

         formC.submit()
        localStorage.nomeUser=formC.nomeContato.value
        localStorage.emailUser=formC.emailContato.value
        localStorage.telefoneUser=formC.telefoneContato.value
        localStorage.preferenciaUser=formC.preferenciaContato.value
    //  localStorage.senhaUser=formC.senha.value
    }
    }

    //IDENTIFICAÇÃO DO USUÁRIO 
    let user = localStorage.emailUser
    let bemVindo = document.querySelector("#bemVindo")
    let entrar = document.querySelector("#entrar")
    let sair = document.querySelector("#sair")
    let cadastro = document.querySelector("#cadastro")
    
    //SAUDAÇÃO
    function msgUser() {
        let nomeUser = user.substring(0, user.indexOf('@'))
        bemVindo.innerHTML = 'Olá <b>' + nomeUser + '<b/>'
        entrar.style.display = "none"
        cadastro.style.display = "none"
    }
    
    //ESCONDE O BOTÃO ENTRAR
    function resetUser() {
        sair.style.display = "none"
    }
    sair.onclick = function () {
        localStorage.removeItem("emailUser")
        location.href = 'index.html'
    }
    localStorage.emailUser ? msgUser() : resetUser()
