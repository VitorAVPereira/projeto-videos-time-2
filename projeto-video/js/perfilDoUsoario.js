
let videos='{"tipo":"Bem vinda!","idade":35,"preferencia":"Comedia","dataInicio":"05/04/2022","tipoAssinatura":"Gold","valor":30}'
let videosJSON= JSON.parse(videos)
let conteudo=document.querySelector("#conteudo")
let h3=document.querySelector("#conteudo h3")
let idadeUsu=document.querySelector("#idadeUsu")
let preferenciaUsu=document.querySelector("#preferenciaUsu")
let dataUso=document.querySelector("#dataUso")
let tipoUsu=document.querySelector("#tipoUsu")
let valorUsu=document.querySelector("#valorUsu")
let nome=localStorage.nomeUser

let nomeUsu=document.querySelector("#nomeUsu")
    
    nomeUsu.innerHTML='Nome : '+ nome

let email=localStorage.emailUser
let emailUsu=document.querySelector("#emailUsu")
 
    emailUsu.innerHTML='Email : '+ email
    

let tel=localStorage.telefoneUser
let telUsu=document.querySelector("#telUsu")

    
    telUsu.innerHTML='Telefone : '+ tel
    





h3.innerHTML=videosJSON.tipo
idadeUsu.innerHTML="Idade: "+videosJSON.idade
preferenciaUsu.innerHTML="Preferencia: "+videosJSON.preferencia
dataUso.innerHTML="Data Do Inicio: "+videosJSON.dataInicio
tipoUsu.innerHTML="Tipo de Assinatura: "+videosJSON.tipoAssinatura
valorUsu.innerHTML="Valor: "+videosJSON.valor+" R$"


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