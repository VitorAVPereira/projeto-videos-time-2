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

    localStorage.emailUser ? msgUser() : resetUser()
    