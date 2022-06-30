let formL=document.forms.formLogin
document.querySelector("#btLogin").onclick=function(){
    if(formL.email.value == ""){
        alert ("Preencha o Email!")
    }else if (formL.senha.value == ""){
        alert ("Coloque sua Senha!")}
    else{
         formL.submit()
         localStorage.emailUser=formL.email.value 
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
