

let user = localStorage.emailUser
let bemVindo = document.querySelector("#bemVindo")
let entrar = document.querySelector("#entrar")
let sair = document.querySelector("#sair")
let cadastro = document.querySelector("#cadastro")

function msgUser() {
    let nomeUser = user.substring(0, user.indexOf('@'))
    bemVindo.innerHTML = 'Olá, <b>' + nomeUser + '<b/>'
    entrar.style.display = "none"
    cadastro.style.display = "none"
}
function resetUser() {
    sair.style.display = "none"
}
sair.onclick = function () {
    localStorage.removeItem("emailUser")

    location.href = 'index.html'

}

localStorage.emailUser ? msgUser() : resetUser()

//////////////////////////////////////////////////////////////////////
//Validação do Formulário de Contato//
var formC=document.forms.formContato
document.querySelector('#envia').onclick=function(){
    if(formC.nomeContato.value == ""){
        alert("Preencha o nome!")
    }else if(formC.emailContato.value == ""){
        alert("Preencha o email!")
    }else if(formC.telefoneContato.value == ""){
        alert("Forneça um Telefone!")
    }else if(formC.assuntoContato.value == ""){
        alert("Informe o Assunto!")
    }else if(formC.comentarios.value == ""){
        alert("Preencha um comentário")}
    else{
        formC.submit ();
    }
}
//Fim da Validação do Formulário de Contato//
function HabiDsabi() {
    if (document.getElementById('habi').checked == true) {
        document.querySelector('#envia').onclick=function(){
        let idChamada=parseInt (Math.floor(Math.random() * (100000 - 9999) + 9999))
        let dados=formC.nomeContato.value+','+formC.emailContato.value+','+formC.telefoneContato.value+','+formC.assuntoContato.value
        localStorage.setItem("Chamada- "+idChamada,dados)
       
        formC.submit()
      }
    }
    if (document.getElementById('habi').checked == false) {

    }
  }
 let ana = document.getElementById('testep')
 console.log(ana)
