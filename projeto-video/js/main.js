let shop = document.getElementById("shop")
let prefe = document.getElementById("pref")
let cesta = JSON.parse(localStorage.getItem("data")) || []
let singleP = JSON.parse(localStorage.getItem("single")) || []
let pref = JSON.parse(localStorage.getItem("pref")) || []

let gerarShop = () => {
  return (shop.innerHTML = dadosTeste
    .map((x) => {
      let {id, nome, ano, desc, diretor, img, trailer, preco  } = x
      let busca = cesta.find((y) => y.id === id) || []
      return `
      <div id=product-id-${id} class="col-sm-4 mb-5">
      <h2>${nome}</h2>
        <img src=${img} onclick="single(${id})"  id="img0" class="w-100 img mt-2" />
            <div id=${id} class="quantity" ${busca.item === undefined ? 0 : busca.item}></div>
      </div>
      `
    })
    .join(""))
}

gerarShop()

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
  atualiza(selecionarItem.id)
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

  atualiza(selecionarItem.id)
  cesta = cesta.filter((x) => x.item !== 0)
  console.log(cesta)
  localStorage.setItem("data", JSON.stringify(cesta))
}

let atualiza = (id) => {
  let busca = cesta.find((x) => x.id === id)
  document.getElementById(id).innerHTML = busca.item
  calculation()
}

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount")
  cartIcon.innerHTML = cesta.map((x) => x.item).reduce((x, y) => x + y, 0)
}

calculation()


let gerarPreferencias = () => {
  if (pref.length !== 0) {
    return (prefe.innerHTML = pref
      .map((x) => {
        let { id, item } = x
        let search = dadosTeste.find((x) => x.id === id) || []
        let { img, preco, nome } = search
        return `
        <div>
        <a href="singleproduto.html">
        <img src=${img} id="img0" class="w-100 img mt-2" /> </a>
        </div>

      `
      })
      .join(""))
  } else {
    prefe.innerHTML = ""
    label.innerHTML = `
    <h2>Sem preferencias</h2>

    `
  }
}

gerarPreferencias()


let single = (id) => {
  localStorage.removeItem("single")
  let selecionarItem = id,nome
  let busca = singleP.find((x) => x.id === selecionarItem.id)
  
  if (busca === undefined) {
    singleP.push({
      id: selecionarItem.id,
      item: 1 ,
      preco: selecionarItem.preco,
      trailer: selecionarItem.trailer,
      nome: selecionarItem.nome,
      ano: selecionarItem.ano,
      desc: selecionarItem.desc,
      diretor: selecionarItem.diretor,
      img: selecionarItem.img,
    })
    pref.push({
      id: selecionarItem.id,
      item: 1 ,
      preco: selecionarItem.preco,
      trailer: selecionarItem.trailer,
      nome: selecionarItem.nome,
      ano: selecionarItem.ano,
      desc: selecionarItem.desc,
      diretor: selecionarItem.diretor,
      img: selecionarItem.img,
    }
 )
  } else {
    localStorage.removeItem("single")
  }

  console.log(singleP)
  localStorage.setItem("single", JSON.stringify(singleP))
  localStorage.setItem("pref", JSON.stringify(pref))
  location.href = 'singleproduto.html'
}

let limparSingle= () => {
  singleP = []
  localStorage.setItem("single", JSON.stringify(cesta))
}

limparSingle()


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
