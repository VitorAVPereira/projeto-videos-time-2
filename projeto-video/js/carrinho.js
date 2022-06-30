
let ShoppingCart = document.getElementById("tabela")
let label = document.getElementById("label")
let tabela = document.getElementById("tabela")

let cesta = JSON.parse(localStorage.getItem("data")) || []

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount")
  cartIcon.innerHTML = cesta.map((x) => x.item).reduce((x, y) => x + y, 0)
}

calculation()


let gerarItensCarrinho = () => {
  if (cesta.length !== 0) {
    return (ShoppingCart.innerHTML = cesta
      .map((x) => {
        let { id, item } = x
        let search = dadosTeste.find((x) => x.id === id) || []
        let { img, preco, nome , ano} = search
        return `

        <tr>
        <td id="produto">
        <img width="100" src=${img} alt=""  />
        <p>${nome}</p>
        <p>${ano}</p>
        </td>
        <td>
        <div class="cart-buttons">
        <div class="buttons">
          <i onclick="decremento(${id})" class="bi bi-dash-lg"></i>
          <div id=${id} class="quantity">${item}</div>
          <i onclick="incremento(${id})" class="bi bi-plus-lg"></i>
        </div>
        </div>
        </td>
        <td>
          <div class="text-primary">
            <var id="preco">R$ ${item * preco}</var>
          </div>
        </td>
        <td>
          <input type="button" value="excluir" onclick='removeItem(${id})' class="btn btn-primary"> </input>
        </td>
      </tr>

      `
      })
      .join(""))
  } else {
    ShoppingCart.innerHTML = ""
    label.innerHTML = `
    <h2>Carrinho Vazio</h2>
    <a href="index.html">
      <button class="btn btn-primary">Volte ao inicio</button>
    </a>
    `
  }
}

gerarItensCarrinho()

let incremento = (id) => {
  let selectedItem = id
  let search = cesta.find((x) => x.id === selectedItem.id)

  if (search === undefined) {
    cesta.push({
      id: selectedItem.id,
      item: 1,
    })
  } else {
    search.item += 1
  }

  gerarItensCarrinho()
  atualizar(selectedItem.id)
  localStorage.setItem("data", JSON.stringify(cesta))
}

let decremento = (id) => {
  let selectedItem = id
  let search = cesta.find((x) => x.id === selectedItem.id)

  if (search === undefined) return
  else if (search.item === 0) return
  else {
    search.item -= 1
  }

  atualizar(selectedItem.id)
  cesta = cesta.filter((x) => x.item !== 0)
  gerarItensCarrinho()
  localStorage.setItem("data", JSON.stringify(cesta))
}

let atualizar = (id) => {
  let search = cesta.find((x) => x.id === id)
  document.getElementById(id).innerHTML = search.item
  calculation()
  valorTotal()
}

let removeItem = (id) => {
  let selectedItem = id
  cesta = cesta.filter((x) => x.id !== selectedItem.id)
  calculation()
  gerarItensCarrinho()
  valorTotal()
  localStorage.setItem("data", JSON.stringify(cesta))
}

var amount

let valorTotal = () => {
  if (cesta.length !== 0) {
    
    amount = cesta
      .map((x) => {
        let { id, item } = x
        let filterData = dadosTeste.find((x) => x.id === id)
        return filterData.preco * item
      })
      .reduce((x, y) => x + y, 0)
      console.log(cesta)
    return (total.innerHTML = `
    <tr  class="text-uppercase">
    <td id="total2">Total: R$ ${amount}</td>
    </tr>
    `)
  } else return
}

valorTotal()


let limparCarrinho = () => {
  cesta = []
  gerarItensCarrinho()
  calculation()
  localStorage.setItem("data", JSON.stringify(cesta))
}

let code =[123,456] ;
function validate(coupon) { 
   // let code =[123,456] ;
     
   if (code[0]==coupon) 
    { 
    window.alert("Código de cupom aceito! Clique no botão comprar!"); 
    document.querySelector("#total3").innerHTML=`    
    <tr  class="text-uppercase">
    <td id="total2">Valor final: R$ ${(amount -(amount*0.10))}</td>
    </tr> 
    `
    } 
     else if (code[1]==coupon) 
    { 
    window.alert("Código de cupom aceito! Clique no botão comprar"); 
    document.querySelector("#total3").innerHTML=`    
    <tr  class="text-uppercase">
    <td id="total2">Valor final: R$ ${(amount -(amount*0.20))}</td>
    </tr> 
    `
    } 
   else 
    { 
    window.alert("Desculpe, o código do cupom que você digitou é inválido. Por favor verifique e tente novamente!"); 
    } 
   } 




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

////////

function deleteRow(r) {
    var confir = confirm('Você deseja realmente excluir este produto?') 
    if(confir==true){
        var i = r.parentNode.parentNode.rowIndex
       document.querySelector("#tabela").deleteRow(i)
       
  }else{
     null
  }
}


function removeTable(exTabela) {
    var confirma = confirm('Você realmente deseja limpar o carrinho?')
    let excluTotal = document.querySelector('#exTabela')
        if(confirma == true){
            excluTotal.parentNode.removeChild(excluTotal)
       }else{
          null
       }
    }