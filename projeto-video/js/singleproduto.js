
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
  location.href = 'index'
}
localStorage.emailUser ? msgUser() : resetUser()

//Dinamico

let shop = document.getElementById("sigleProduto")
let prefe = document.getElementById("pref")
let cesta = JSON.parse(localStorage.getItem("data")) || []
let single = JSON.parse(localStorage.getItem("single")) || []

let gerarItensCarrinho = () => {
  if (single.length !== 0) {
    return (shop.innerHTML = single
      .map((x) => {
        let { id, item } = x
        let busca = dadosTeste.find((y) => y.id === id) || []
        let { nome, ano, desc, diretor, img, trailer, preco } = busca
        return `
        <div class=" col-sm-7 mt-5">
          <h2>${nome}</h2>
            <p>${ano}</p>
            <p>Direção: ${diretor}</p>    
        </div>
        <div class=" row">
          <div class="col-sm-6">
            <img src="${img}" width="500" />
          </div>
        <div id=product-id-${id}  class=" aqui item col-sm-6 ">
          <iframe width="560" height="315" src="${trailer}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div class="details">
            <p>${desc}</p>
            <div class="price-quantity">
              <h3>R$ ${preco}</h3>
            <div class="buttons">
              <i onclick="decremento(${id})" class="bi bi-dash-lg"></i>
              <div id=${id} class="quantity">${item}</div>
              <i onclick="incremento(${id})" class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>

      `
      })
      .join(""))
  } else {
    shop.innerHTML = ""
    label.innerHTML = `
    <h2>Produto não selecionado</h2>
    <a href="index.html">
      <button class="btn btn-primary">Volte ao inicio</button>
    </a>
    `
  }
}

gerarItensCarrinho()

let incremento = (id) => {
  let selecionarItem = id
  let busca = cesta.find((x) => x.id === selecionarItem.id)

  if (busca === undefined) {
    cesta.push({
      id: selecionarItem.id,
      item: 1,
    })
  } else {
    busca.item += 1
  }

  console.log(cesta)
  update(selecionarItem.id)
  localStorage.setItem("data", JSON.stringify(cesta))
}


let decremento = (id) => {
  let selecionarItem = id
  let busca = cesta.find((x) => x.id === selecionarItem.id)

  if (busca === undefined) return
  else if (busca.item === 0) return
  else {
    busca.item -= 1
  }

  update(selecionarItem.id)
  cesta = cesta.filter((x) => x.item !== 0)
  console.log(cesta)
  localStorage.setItem("data", JSON.stringify(cesta))
}

let update = (id) => {
  let busca = cesta.find((x) => x.id === id)
  document.getElementById(id).innerHTML = busca.item
  calculation()
}

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount")
  cartIcon.innerHTML = cesta.map((x) => x.item).reduce((x, y) => x + y, 0)
}

calculation()

