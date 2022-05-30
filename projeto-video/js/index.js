let user=localStorage.emailUser
let bemVindo=document.querySelector("#bemVindo")
let entrar=document.querySelector("#entrar")
let sair=document.querySelector("#sair")
let cadastro=document.querySelector("#cadastro")

function msgUser(){
    let nomeUser=user.substring(0,user.indexOf('@'))
    bemVindo.innerHTML= 'Olá <b>' + nomeUser + '<b/>'
    entrar.style.display="none"
    cadastro.style.display = "none"
}
function resetUser(){
    sair.style.display="none"
}
sair.onclick=function(){
    localStorage.removeItem("emailUser")
    location.href='../adm/indexAdm.html'
}

localStorage.emailUser ? msgUser() : resetUser()

/////////////////////////////////////////////////

// const filme =  {
//     titulo: "Homem-Formiga",
//     sinopse:"",
//     img:"id=filme1",
//     genero:""
// }


localStorage.setItem("deadpool2","imagens/deadpool.jpg")
let imageurl=localStorage.getItem("deadpool2");
document.getElementById("img1").src="imagens/deadpool.jpg"
let imagem= document.querySelector('#filme')

imagem.onclick = function () {
    let chamar = imageurl
    
    return chamar
}

localStorage.setItem("Homem de Ferro","imagens/homem.jpg")
let imageurl2=localStorage.getItem("Homem de Ferro");
document.getElementById("img2").src="imagens/homem.jpg"
let imagem2= document.querySelector('#filme1')

imagem2.onclick = function () {
    let chamar1 = imageurl2
    
    return chamar1
}

localStorage.setItem("Homem Formiga","imagens/homemf.jpg")
let imageurl3=localStorage.getItem("Homem de Ferro");
document.getElementById("img3").src="imagens/homemf.jpg"
let imagem3= document.querySelector('#filme2')

imagem3.onclick = function () {
    let chamar3 = imageurl3
    
    return chamar3
}

