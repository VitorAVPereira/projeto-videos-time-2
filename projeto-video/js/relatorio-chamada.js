
var i=0
for (key in localStorage) {
    var ch = localStorage.getItem(key)
    
    if(i<localStorage.length){
        var chArray = ch.split(",")
    i++
    }else{
        break
    }
    console.log(chArray.length)
    // console.log(key)
    // console.log(chArray)
    
    var p = document.createElement('p')
    document.querySelector('#nome1').innerHTML += "<li>" + chArray[0] + "</li>"
    document.querySelector('#email1').innerHTML += "<li>" + chArray[1] + "</li>"
    document.querySelector('#telefone1').innerHTML += "<li>" + chArray[2] + "</li>"
    document.querySelector('#assunto1').innerHTML += "<li>" + chArray[3] + "</li>"
    
}
    let listaUsers = chArray
    // console.log(listaUsers)
    let listaResult = []

    function users() {
        document.querySelector("#nome1").innerHTML = ""
        for (var i = 0; i < listaUsers.length; i++) {
            document.querySelector("#nome1").innerHTML += "<li>" + listaUsers[i] + "</li>"

            listaUsers.length > 0 ? document.querySelector("#next").innerHTML = listaUsers[0] : null




           
            
        }
        users()
    }
    document.querySelector("#btAtende").onclick = function () {
        
                   listaResult.push(listaUsers[0])
        
            document.querySelector("#cAtendido").innerHTML = ""
            for (var i = 0; i < listaResult.length; i++) {
                document.querySelector("#cAtendido").innerHTML += "<li>" + listaResult[i] + "</li>"
            }
            
        }



