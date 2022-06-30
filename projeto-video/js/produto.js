//Inicio de Trailers

let trailerArr=["https://www.youtube.com/embed/PJza3ZaFeAU","https://www.youtube.com/embed/igfXmU1r_mc","https://www.youtube.com/embed/QDvbNyl5xnA",
"https://www.youtube.com/embed/AK_lkakIjwA",
"https://www.youtube.com/embed/3p1d_6_ocEE","https://www.youtube.com/embed/4jGRyEa2jhE","https://www.youtube.com/embed/spJoZReeIeQ","https://www.youtube.com/embed/FV7AxLbHcrE","https://www.youtube.com/embed/0HGBv7s1Y7E"]

var randfilmes =[]
var imagem

function carregarImagem() {
  while (randfilmes.length < 4){
    aleatorio=trailerArr[Math.floor(Math.random() * trailerArr.length)]

    if(randfilmes.indexOf(aleatorio) == -1)
    randfilmes.push(aleatorio)
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

 