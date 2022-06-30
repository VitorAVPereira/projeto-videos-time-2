let videos='{"tipo":"Bem vindo(a)!","idade":35,"dataInicio":"30/06/2022","tipoAssinatura":"Gold","valor":30}'
let videosJSON= JSON.parse(videos)
let conteudo=document.querySelector("#conteudo")
let h3=document.querySelector("#conteudo h3")

let dataUso=document.querySelector("#dataUso")

let nome=localStorage.nomeUser
let nomeUsu=document.querySelector("#nomeUsu")
    
    nomeUsu.innerHTML='Nome: '+ nome

let email=localStorage.emailUser
let emailUsu=document.querySelector("#emailUsu")
 
    emailUsu.innerHTML='Email: '+ email
    

let tel=localStorage.telefoneUser
let telUsu=document.querySelector("#telUsu")

let pref=localStorage.preferenciaUser
let preferenciaUsu=document.querySelector("#preferenciaUsu")

    
telUsu.innerHTML='Telefone: '+ tel
    


h3.innerHTML=videosJSON.tipo

preferenciaUsu.innerHTML="Preferencia: "+ pref
dataUso.innerHTML="Data De Inicio: "+videosJSON.dataInicio

var today=new Date()
  var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    document.getElementById("demo").innerHTML="Hoje :"+date
    
document.querySelector('button').onclick=function(){
  document.querySelector('#cupom').innerHTML="20j4"
}

/*let user=localStorage.emailUser
let bemVindo=document.querySelector("#bemVindo")
let entrar=document.querySelector("#entrar")
let sair=document.querySelector("#sair")
//console.log(user.indexOf('@'))
//console.log(user.substring(0,user.indexOf('@')))


function msgUser() {
    let nomeUser=user.substring(0,user.indexOf('@'))
    bemVindo.innerHTML='Olá<b>'+ nomeUser+'</b>'
    entrar.style.display="none"
}*/

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

