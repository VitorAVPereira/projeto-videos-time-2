var soma=[
    [1, 50],
    [1, 50],
    [1, 50]
]

let calculo= parseInt(soma[0][1]+soma[1][1]+soma[2][1])
let calculo2= parseInt(soma[0][0]+soma[1][0]+soma[2][0])
document.querySelector("#assinantes").innerHTML =  calculo2
document.querySelector("#totalAss2").innerHTML= "R$" +calculo + ",00"
document.querySelector("#alugados").innerHTML =  calculo2
document.querySelector("#totalAlu2").innerHTML= "R$" +calculo + ",00"
document.querySelector("#totalAss").innerHTML= "R$" +calculo + ",00"
document.querySelector("#totalAlu").innerHTML= "R$" +calculo + ",00"
