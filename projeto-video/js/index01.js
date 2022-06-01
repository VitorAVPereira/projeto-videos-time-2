
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
let imgNome = '{"img":["imagens/deadpool.jpg","imagens/homem.jpg","imagens/homemf.jpg","imagens/capitao.jpeg","imagens/xmen.jpg","imagens/ironman.jpg","imagens/captain.jpeg","imagens/formiga.jpeg","imagens/estranho.jpg"], "nome":["Deadpool 2","Homem de Ferro","Homem-Formiga e a Vespa","Capitão América - O Primeiro Vingador","X-Men Dias de um Futuro Esquecido","Homem de Ferro 3","Capitã Marvel","Homem-Formiga","Doutor Estranho"]}'
let imgJson=JSON.parse(imgNome)
// console.log(imgJson.img[3])

let clique_img = function (){
    let dados=imgJson.img[0]
    localStorage.setItem("filme-0",dados)
}
document.querySelector('#img0').addEventListener('click',clique_img)

let clique_img01 = function (){
    let dados=imgJson.img[1]
    localStorage.setItem("filme-1",dados)
}
document.querySelector('#img1').addEventListener('click', clique_img01)

let clique_img02 = function (){
    let dados=imgJson.img[2]
    localStorage.setItem("filme-2",dados)
}
document.querySelector('#img2').addEventListener('click', clique_img02)

let clique_img03 = function (){
    let dados=imgJson.img[3]
    localStorage.setItem("filme-3",dados)
}
document.querySelector('#img3').addEventListener('click', clique_img03)

let clique_img04 = function (){
    let dados=imgJson.img[4]
    localStorage.setItem("filme-4",dados)
}
document.querySelector('#img4').addEventListener('click', clique_img04)

let clique_img05 = function (){
    let dados=imgJson.img[5]
    localStorage.setItem("filme-5",dados)
}
document.querySelector('#img5').addEventListener('click', clique_img05)

let clique_img06 = function (){
    let dados=imgJson.img[6]
    localStorage.setItem("filme-6",dados)
}
document.querySelector('#img6').addEventListener('click', clique_img06)

let clique_img07 = function (){
    let dados=imgJson.img[7]
    localStorage.setItem("filme-7",dados)
}
document.querySelector('#img7').addEventListener('click', clique_img07)

let clique_img08 = function (){
    let dados=imgJson.img[8]
    localStorage.setItem("filme-8",dados)
}
document.querySelector('#img8').addEventListener('click', clique_img08)


var i = 0 

for (key in localStorage) {

    if(i<localStorage.length){
    
        if(key.includes('filme-')){
            let recImg= localStorage.getItem(key)
            chArray = (recImg.split(","))
            console.log(chArray)
            var imagem = document.getElementById("img1")
            imagem.src = chArray[0]
            var imagem = document.getElementById("img2")
            imagem.src = chArray[1]
            var imagem = document.getElementById("img3")
            imagem.src = chArray[2]
            i++
            }else{
                break
            }
    }
}  






// localStorage.setItem("deadpool2","imagens/deadpool.jpg")
// let imageurl=localStorage.getItem("deadpool2");
// document.getElementById("img1").src="imagens/deadpool.jpg"
// let imagem= document.querySelector('#filme')

// imagem.onclick = function () {
//     let chamar = imageurl
    
//     return chamar
// }

// localStorage.setItem("Homem de Ferro","imagens/homem.jpg")
// let imageurl2=localStorage.getItem("Homem de Ferro");
// document.getElementById("img2").src="imagens/homem.jpg"
// let imagem2= document.querySelector('#filme1')

// imagem2.onclick = function () {
//     let chamar1 = imageurl2
    
//     return chamar1
// }

// localStorage.setItem("Homem Formiga","imagens/homemf.jpg")
// let imageurl3=localStorage.getItem("Homem de Ferro");
// document.getElementById("img3").src="imagens/homemf.jpg"
// let imagem3= document.querySelector('#filme2')

// imagem3.onclick = function () {
//     let chamar3 = imageurl3
    
//     return chamar3
// }

