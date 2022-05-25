//QUANTIDADE DE FILMES E QUANTIDADE DE VAlORES

var soma = [
    [1, 25],
    [1, 25],
    [1, 25]
]

let calculo = parseInt(soma[0][1] + soma[1][1] + soma[2][1])
let calculo2 = parseInt(soma[0][0] + soma[1][0] + soma[2][0])

document.querySelector("#total2").innerHTML = "Qtde de filmes: " + calculo2
document.querySelector("#total").innerHTML = "Valor final: " + calculo + ",00"
document.querySelector("#total3").innerHTML = "Valor final: " + calculo + ",00"

let code =[123,456] ;
function validate(coupon) { 
   // let code =[123,456] ;
  
  
 
   
   if (code[0]==coupon) 
    { 
    window.alert("Código de cupom aceito! Clique no botão comprar!"); 
    document.querySelector("#total3").innerHTML= (calculo -(calculo*0.10))
    } 
     else if (code[1]==coupon) 
    { 
    window.alert("Código de cupom aceito! Clique no botão comprar"); 
    document.querySelector("#total3").innerHTML= (calculo -(calculo*0.20))
    } 
   else 
    { 
    window.alert("Sorry, The Coupon Code you entered is invalid. Please check and try again!"); 
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

let excluir= document.querySelector('#btExcluir')
let excluir1= document.querySelector('#btExcluir1')
let excluir2= document.querySelector('#btExcluir2')

excluir.onclick = function p () {
    confirm('Você deseja realmente excluir este produto?')
    if(excluir){
        document.querySelector('#preco').innerHTML = 'R$0,00'
    }else{
        
    }
}

excluir1.onclick = function p1 () {
    confirm('Você deseja realmente excluir este produto?')
    if(confirm){
        document.querySelector('#preco1').innerHTML = 'R$0,00'
    }else{

    }
}
excluir2.onclick = function p2 () {
    confirm('Você deseja realmente excluir este produto?')
    if(confirm){
        document.querySelector('#preco2').innerHTML = 'R$0,00'
    }else{

    }
}
p ()
p1 ()
p2 ()

// let exclusao={
//     excluir: function(){
//         produto.style.display = "none"
//     }
// }

//  excluir.onclick = function(){
//      confirm('Você deseja realmente excluir este produto?')
//      if(alert += true){
//         exclusao.excluir() 
//  }else{
//      null
//  }
//  }