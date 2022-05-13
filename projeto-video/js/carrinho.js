var soma=[
    [1, 25],
    [1, 25],
    [1, 25]
]

let calculo= parseInt(soma[0][1]+soma[1][1]+soma[2][1])
let calculo2= parseInt(soma[0][0]+soma[1][0]+soma[2][0])
document.querySelector("#total2").innerHTML = "Qtde de filmes: " + calculo2
document.querySelector("#total").innerHTML= "Valor final: " + calculo + ",00"
document.querySelector("#total3").innerHTML= "Valor final: " + calculo + ",00"

