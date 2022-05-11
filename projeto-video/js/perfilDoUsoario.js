
console.log('Testando JS')

//escopos var let const
let videos='{"tipo":"Site de Assinatura","nome":"Sareh na","idade":35,"email":"sareh@gmail.com","preferencia":"Comedia","dataInicio":"05/04/2022","tipoAssinatura":"Gold","valor":30}'

console.log(videos)
let videosJSON= JSON.parse(videos)

console.log(videosJSON)

let conteudo=document.querySelector("#conteudo")
let h3=document.querySelector("#conteudo h3")
let p1=document.querySelector("#p1")
let p2=document.querySelector("#p2")
let p3=document.querySelector("#p3")
let p4=document.querySelector("#p4")
let p5=document.querySelector("#p5")
let p6=document.querySelector("#p6")
let p7=document.querySelector("#p7")

h3.innerHTML=videosJSON.tipo
p1.innerHTML="Nome :"+videosJSON.nome
p2.innerHTML="Idade :"+videosJSON.idade
p3.innerHTML="Email :"+videosJSON.email
p4.innerHTML="Preferencia :"+videosJSON.preferencia
p5.innerHTML="Data Do Inicio:"+videosJSON.dataInicio
p6.innerHTML="Tipo de Assinatura:"+videosJSON.tipoAssinatura
p7.innerHTML="Valor :"+videosJSON.valor+" R$"


