
let listaUsers,listaEmail,listaTelefone,listaAssunto,idChamada

idChamada=localStorage.key(idChamada)
console.log(idChamada)
listaUsers=localStorage.getItem(idChamada).split(',')
listaNome=listaUsers[0]
listaEmail=listaUsers[1]
listaTelefone=listaUsers[2]
listaAssunto=listaUsers[3]
console.log(listaUsers)
for(var i=0;i<listaUsers.length;i++){
    document.querySelector("#nome").innerHTML+="<li>" + listaNome + "</li>"
    document.querySelector("#email").innerHTML+="<li>" + listaEmail + "</li>"
    document.querySelector("#telefone").innerHTML+="<li>" + listaTelefone + "</li>"
    document.querySelector("#assunto").innerHTML+="<li>" + listaAssunto + "</li>"
}
listaUsers.length>0 ? document.querySelector("#next").innerHTML=listaUsers[0] : null





