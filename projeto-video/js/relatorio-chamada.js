
let listaUsers=localStorage.getItem(dados[[0]])
let listaEmail=localStorage.getItem(dados[[1]])
let listaTelefone=localStorage.getItem(dados[[2]])
let listaAssunto=localStorage.getItem(dados[[3]])
    function users(){
        document.querySelector("#users").innerHTML=""
    for(var i=0;i<listaUsers.length;i++){
        document.querySelector("#users").innerHTML+="<li>" + listaUsers[i] + "</li>"
    }
    listaUsers.length>0 ? document.querySelector("#next").innerHTML=listaUsers[0] : null
}
