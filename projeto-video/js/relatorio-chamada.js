var i=0
let listaUsers=[]
let listaResult=[]
var chArray=[]

//Busca elementos em localStorage
for (key in localStorage) {

    //Verifica as chaves
    if(i<localStorage.length){
      
        //verifica os itens iniciados com a srting 'chamada'
        if(key.includes('Chamada')){
            var ch = localStorage.getItem(key)
            chArray.push(ch.split(","))
        
            //Insere as infos no html
            var p = document.createElement('p')
            document.querySelector('#nome1').innerHTML += "<li>" + chArray[i][0] + "</li>"
            document.querySelector('#email1').innerHTML += "<li>" + chArray[i][1] + "</li>"
            document.querySelector('#telefone1').innerHTML += "<li>" + chArray[i][2] + "</li>"
            document.querySelector('#assunto1').innerHTML += "<li>" + chArray[i][3] + "</li>"
            listaUsers.push(chArray[i])
            i++
            } 
    
    }else{
        break
    }     
}  
   
//evento click do botão atendimento
document.querySelector("#btAtende").onclick=function(){
        darBaixa();
        users()
    }


    //Remove os itens atendidos
    function darBaixa(){
        if (listaUsers.length > 0){
            listaResult.push(listaUsers[0])
            listaUsers.shift()
            document.querySelector("#result").innerHTML=""
        for(var i=0;i<listaResult.length;i++){
            document.querySelector("#result").innerHTML+="<li>" + listaResult[i] + "</li>"
         }
     }  
}
    //Exibe os itens não atendidos
    function users(){
        if (listaUsers.length >= 0){
             document.querySelector("#users").innerHTML=""
        for(var i=0;i<listaUsers.length;i++){
            document.querySelector("#users").innerHTML+="<li>" + listaUsers[i] + "</li>"
         }
     } 
        listaUsers.length == 0 ? document.querySelector("#next").innerHTML='<b>Todos os clientes foram atendidos</b>' :null
       
    }

    //Exibe os itens não atendidos ao carregar a página    
    users()