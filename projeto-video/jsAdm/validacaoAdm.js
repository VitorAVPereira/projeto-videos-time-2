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
senhaC.addEventListener('input', validarSenha);
    document.querySelector("#btContato").onclick=function(){
        if (formC.nomeContato.value == ""){
            alert("Preencha o nome!")
        }else if (formC.emailContato.value == ""){
            alert("Preencha o e-mail!")
        }else if (formC.senha.value == ""){
            alert("Preencha a senha!")
        }else if (formC.senhaC.value == ""){
            alert("Confirme a senha!")
        }else{
            formC.submit()
        }
    }
    
    let sair=document.querySelector("#sair")
sair.onclick=function(){
    localStorage.removeItem("emailUser")
    location.href='../adm/loginAdm.html'
}

localStorage.emailUser ? msgUser() : resetUser()