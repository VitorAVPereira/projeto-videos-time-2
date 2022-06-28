

//QUANTIDADE DE FILMES E QUANTIDADE DE VAlORES

var soma = [
    [1, 25],
    [1, 25],
    [1, 25]
]


//Objetos 
//Calculo do incremento de telas

let select = document.querySelector("#telas")
let select1 = document.querySelector("#telas_1")
let select2 = document.querySelector("#telas_2")
let preco=document.querySelector("#preco")
let preco1=document.querySelector("#preco1")
let preco2=document.querySelector("#preco2")
let Total=document.querySelector("#total")
let Total2=document.querySelector("#total2")
let btCalcular=document.querySelector("#btCalculoT")

var incremento
var incremento1
var incremento2
var calculo

let carrinho = {
    Telas: 'Quantidade de Telas ',
    multiplicarTelas:function(valor){
        incremento = (soma[0][1] * valor).toFixed(2)
        parseInt.incremento
        preco.innerHTML= 'R$ ' + incremento
    },
    multiplicarTelas1:function(valor){
        incremento1 = (soma[1][1] * valor).toFixed(2)
        preco1.innerHTML= 'R$ ' + incremento1 
    },
    multiplicarTelas2:function(valor){
        incremento2 = (soma[2][1] * valor).toFixed(2)
        preco2.innerHTML= 'R$ ' + incremento2
       
    },
    somaTotal:function(){
        let inc = Number(incremento)
        let inc1 = Number(incremento1)
        let inc2 = Number(incremento2)
        calculo =  inc + inc1 + inc2

        Total.innerHTML=`R$ ${(calculo).toFixed(2)}`
        Total2.innerHTML=`R$ ${(calculo).toFixed(2)}`
    }
}



function exibirCategoria(){
    
    switch(select.selectedIndex){
        case 0: carrinho.multiplicarTelas(0)
        break
        case 1 : carrinho.multiplicarTelas(1.00)
        break
        case 2 : carrinho.multiplicarTelas(1.07)
        break
        case 3 : carrinho.multiplicarTelas(1.14)
        break
        case 4 : carrinho.multiplicarTelas(1.21)
        break
        case 5 : carrinho.multiplicarTelas(1.28)
        break
    }
    switch(select1.selectedIndex){
        case 0: carrinho.multiplicarTelas1(0)
        break
        case 1 : carrinho.multiplicarTelas1(1.00)
        break
        case 2 : carrinho.multiplicarTelas1(1.07)
        break
        case 3 : carrinho.multiplicarTelas1(1.14)
        break
        case 4 : carrinho.multiplicarTelas1(1.21)
        break
        case 5 : carrinho.multiplicarTelas1(1.28)
        break
    }
    switch(select2.selectedIndex){
        case 0: carrinho.multiplicarTelas2(0)
        break
        case 1 : carrinho.multiplicarTelas2(1.00)
        break
        case 2 : carrinho.multiplicarTelas2(1.07)
        break
        case 3 : carrinho.multiplicarTelas2(1.14)
        break
        case 4 : carrinho.multiplicarTelas2(1.21)
        break
        case 5 : carrinho.multiplicarTelas2(1.28)
        break
    }
}
select.addEventListener('change', exibirCategoria)
select1.addEventListener('change', exibirCategoria)
select2.addEventListener('change', exibirCategoria)
btCalcular.addEventListener('click',carrinho.somaTotal)


//Fim do objeto


let code =["20j4","4i56"] ;
function validate(coupon) { 
   // let code =[123,456] ;
  
  
 
   
   if (code[0]==coupon) 
    { 
    window.alert("Código de cupom aceito! Clique no botão comprar!"); 
    document.querySelector("#total3").innerHTML= (calculo -(calculo*0.10)).toFixed(2)
    } 
     else if (code[1]==coupon) 
    { 
    window.alert("Código de cupom aceito! Clique no botão comprar"); 
    document.querySelector("#total3").innerHTML= (calculo -(calculo*0.20)).toFixed(2)
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
 