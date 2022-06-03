//Inicio de Trailers

let trailerArr=["https://www.youtube.com/embed/RxeD6EOoyYs","https://www.youtube.com/embed/2m1drlOZSDw","https://www.youtube.com/embed/wxN1T1uxQ2g",
"https://www.youtube.com/embed/_wUjoIp6v8o",
"https://www.youtube.com/embed/wAmkU6FEKUw","https://www.youtube.com/embed/U2yDAZQL89s","https://www.youtube.com/embed/r0dSJpHUD1k","https://www.youtube.com/embed/w1dIkYegWuQ","https://www.youtube.com/embed/KPND6SgkN7Q"]

var randfilmes =[]
var imagem

function carregarImagem() {
  while (randfilmes.length < 4){
    aleatorio=trailerArr[Math.floor(Math.random() * trailerArr.length)]

    if(randfilmes.indexOf(aleatorio) == -1)
    randfilmes.push(aleatorio)
    console.log(randfilmes)
    imagem = document.getElementById("fml")
    imagem.src = randfilmes[0]
    imagem = document.getElementById("fml1")
    imagem.src = randfilmes[1]
    imagem = document.getElementById("fml2")
    imagem.src = randfilmes[2]
    }
  }

  carregarImagem()

//Fim de Trailers
// Inicio de saudações

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
      location.href='index.html'
  }
  localStorage.emailUser ? msgUser() : resetUser()

 