
let user = localStorage.emailUser
let bemVindo = document.querySelector("#bemVindo")
let entrar = document.querySelector("#entrar")
let sair = document.querySelector("#sair")
let cadastro = document.querySelector("#cadastro")

function msgUser() {
    let nomeUser = user.substring(0, user.indexOf('@'))
    bemVindo.innerHTML = 'Olá <b>' + nomeUser + '<b/>'
    entrar.style.display = "none"
    cadastro.style.display = "none"
}
function resetUser() {
    sair.style.display = "none"
}
sair.onclick = function () {
    localStorage.removeItem("emailUser")

    location.href = 'index'
}

localStorage.emailUser ? msgUser() : resetUser()

/////////////////////////////////////////////////

