let user=localStorage.emailUser
let bemVindo=document.querySelector("#bemVindo")
let entrar=document.querySelector("#entrar")
let sair=document.querySelector("#sair")

function msgUser(){
    let nomeUser=user.substring(0,user.indexOf('@'))
    bemVindo.innerHTML= 'Olá <b>' + nomeUser + '<b/>'
    entrar.style.display="none"
}
function resetUser(){
    sair.style.display="none"
}
sair.onclick=function(){
    localStorage.removeItem("emailUser")
    location.href='../adm/indexAdm.html'
}

localStorage.emailUser ? msgUser() : resetUser()

//=============================================================================================
//Pega valores com a chave "Chamados"
var recuperaChamadosArray = [];
var listaResult = [];
if (localStorage.getItem("Chamados") != null) {
  recuperaChamadosArray = JSON.parse(localStorage.getItem("Chamados"))
}
console.log(recuperaChamadosArray)

//Função que mostra clientes que ainda não foram atendidos e resumo
function users() {
  let totalPendentes = document.querySelector('#totalPendentes');
  totalPendentes.innerHTML = recuperaChamadosArray.length > 0 ? '<p id="totalPendentes">Total: ' + (recuperaChamadosArray.length) + '</p>' :
    '<p id="totalPendentes">Todos os clientes foram atendidos</p>'
  document.querySelector('#next').innerHTML = "";
  let totalAtendidos = document.querySelector('#totalAtendidos');
  totalAtendidos.innerHTML = '<p id="totalAtendidos">Total: ' + (listaResult.length) + '</p>'

  for (var i = 0; i < recuperaChamadosArray.length; i++) {
    document.querySelector('#next').innerHTML = "";
    let divRowClientesAtendidos = document.createElement('div')
    divRowClientesAtendidos.className = 'row text-center'

    let nome = '<p class="col-sm-3">' + recuperaChamadosArray[i][1] + '</p>'
    let email = '<p class="col-sm-3">' + recuperaChamadosArray[i][2] + '</p>'
    let telefone = '<p class="col-sm-3">' + recuperaChamadosArray[i][3] + '</p>'
    let assunto = '<p class="col-sm-3">' + recuperaChamadosArray[i][4].substring(0, 25) + '...</p>'

    divRowClientesAtendidos.innerHTML += nome;
    divRowClientesAtendidos.innerHTML += email;
    divRowClientesAtendidos.innerHTML += telefone;
    divRowClientesAtendidos.innerHTML += assunto;

    document.querySelector('#clientesAtendidos').appendChild(divRowClientesAtendidos);
    document.querySelector('#clientesAtendidos').innerHTML += '<hr style="">'
    document.querySelector('#next').innerHTML += recuperaChamadosArray[i][1]
  }
  recuperaChamadosArray.length > 0 ? document.querySelector('#next').innerHTML = recuperaChamadosArray[0][1] : null;
}
users();

//Função para dar baixa no atendimento, retirar do array e do localStorage
document.querySelector('#btAtende').onclick = () => { darBaixa() }
function darBaixa() {
  if (recuperaChamadosArray.length > 0) {
    document.querySelector('#clientesAtendidos').innerHTML = "";
    listaResult.push(recuperaChamadosArray[0]);
    totalAtendidos.innerHTML = '<p id="totalAtendidos">Total: ' + (listaResult.length) + '</p>'
    recuperaChamadosArray.shift();
    localStorage.setItem('Chamados', JSON.stringify(recuperaChamadosArray))
    users();
  }
}
