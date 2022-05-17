//Validação do Formulário de Cadastro//
var formC=document.forms.formCadastro
document.querySelector('#btCad').onclick=function(){
    if(formC.nomeCad.value == ""){
        alert("Preencha o nome!")
    }else if(formC.categoria.value == ""){
        alert("Preencha a categoria!")
    }else if(formC.ano.value == ""){
        alert("Informe o ano!")
    }else if(formC.sinopse.value == ""){
        alert("Preencha a sinopse!")
    }else{
        formC.submit ();
    }
}

// Botão de entrar superior
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
// Fim

//////

function readImage() {
    if (this.files && this.files[0]) {
        var file = new FileReader();
        file.onload = function(e) {
            document.getElementById("preview").src = e.target.result;
        };       
        file.readAsDataURL(this.files[0]);
    }
}

document.getElementById("img-input").addEventListener("change", readImage, false);