
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

/////////////////////////////////////////////////

// const filme =  {
//     titulo: "Homem-Formiga",
//     sinopse:"",
//     img:"id=filme1",
//     genero:""
// }



let imgArray = []
let conteudo = [
    ["../imagens/deadpool.jpg", "Deadpool 2"],
    ["../imagens/homem.jpg", "Homem de Ferro"],
    ["../imagens/homemf.jpg", "Homem-Formiga e a Vespa"],
    ["../imagens/capitao.jpeg", "Capitão América - O Primeiro Vingador"],
    ["../imagens/xmen.jpg", "X-Men Dias de um Futuro Esquecido"],
    ["../imagens/ironman.jpg", "Homem de Ferro 3"],
    ["../imagens/captain.jpeg", "Capitã Marvel"],
    ["../imagens/formiga.jpeg", "Homem-Formiga"],
    ["../imagens/estranho.jpg", "Doutor Estranho"]
]

n = 0

for(var i=0;i<9;i++){
    var bt = document.querySelector("#img"+i)
    bt.index=i
    bt.onclick=function(){
    //     if(n>15){ 
    //     localStorage.removeItem('img'+imgArray[0]);
    //     // console.log(imgArray)
    //     imgArray.shift()
    //     // console.log(imgArray)
    //     n++
    // }
        
       
        
        pref=(this.index + "," +conteudo[this.index][0] + "," + conteudo[this.index][1]).split(',')
        imgArray.push(pref)
        localStorage.setItem('img'+this.index,pref)
        leitura()
        }
    }
    
    //elemento1,elmento2,elemento3,elemento4
    
    
    //Quando carrega a página
    function leitura(){
    document.querySelector("#a").innerHTML=""
    for(var i=0;i<10;i++){
        if (localStorage.getItem('img'+i)){
            var result = localStorage.getItem('img'+i).split(',')
            console.log(result)
            
            document.querySelector("#a").innerHTML += `<img id="imagem0" width="260" src="${result[1]}" />`
            // document.querySelector("#a1").innerHTML+= `<img id="imagem1" width="260" src="${result[1]}" />`
            // document.querySelector("#a2").innerHTML+= `<img id="imagem2" width="260" src="${result[1]}" />`
        }
    }
    }
    
    leitura()

// for(var i=0;i<9;i++){
// var bt = document.querySelector("#img" + i)
// console.log(bt)
// bt.index = i
// bt.onclick=function(){
//     n++
//     if(n>3){ 
//         localStorage.removeItem('img'+imgArray[0][0]);
//         imgArray.shift()
//         console.log(imgArray)
//     }

//     pref=(this.index + "," +conteudo[this.index][0] + "," + conteudo[this.index][1]).split(',')
//         imgArray.push(pref)
//         localStorage.setItem('img'+this.index,pref)
//         leitura()
//         }
//     }


// function leitura() {
//     // document.querySelector("#imagem0").innerHTML = ""
//     for (var i = 0; i < 4; i++) {
//         if(localStorage.getItem('img'+i)){
            
//             imgArray.push(localStorage.getItem('img'+i).split(','))
//             // document.querySelector("#imagem0").innerHTML+= imgArray[1] +  '<br/>'
//             // let recImg = localStorage.getItem(ar)
//             console.log(imgArray[0][1])
//             console.log(imgArray)
            
//             // console.log(imgArray[2][1])
//             document.querySelector('#a1').innerHTML+=`<img id="imagem0" width="250" src="${imgArray[0][1]}" />`  
//             // console.log(imgArray[1][1])
//             // document.querySelector('#a1').innerHTML+=`<img id="imagem0" width="250" src="${imgArray[1][1]}" />`  
//             // document.querySelector('#a1').innerHTML+=`<img id="imagem0" width="250" src="${imgArray[2][1]}" />`  
            
//             // var imagem = document.querySelector("#imagem1")
//             // imagem.src = imgArray[1][1]
//             // var imagem = document.querySelector("#imagem2")
//             // imagem.src = imgArray[2][1]

//         }
//     }
// }

// leitura()



