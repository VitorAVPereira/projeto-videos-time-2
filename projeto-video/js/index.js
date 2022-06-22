
let user = localStorage.emailUser
let bemVindo = document.querySelector("#bemVindo")
let entrar = document.querySelector("#entrar")
let sair = document.querySelector("#sair")
let cadastro = document.querySelector("#cadastro")

function msgUser() {
    let nomeUser = user.substring(0, user.indexOf('@'))
    bemVindo.innerHTML = 'Olá, <b>' + nomeUser + '<b/>'
    entrar.style.display = "none"
    cadastro.style.display = "none"
}
function resetUser() {
    sair.style.display = "none"
}
sair.onclick = function () {
    localStorage.removeItem("emailUser")

    location.href = 'index.html'

}

localStorage.emailUser ? msgUser() : resetUser()

/////////////////////////////////////////////////

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
       
        
        pref=(this.index + "," +conteudo[this.index][0] + "," + conteudo[this.index][1]).split(',')
        imgArray.push(pref)
        localStorage.setItem('img'+this.index,pref)
        leitura()
        }
    }

    function leitura(){
    document.querySelector("#a").innerHTML=""
    for(var i=0;i<10;i++){
        if (localStorage.getItem('img'+i)){
            var result = localStorage.getItem('img'+i).split(',')
            console.log(result)
            
            document.querySelector("#a").innerHTML += `<img id="imagem0" class="imgMenor" src="${result[1]}" />`

        }
    }
    }
    
    leitura()

