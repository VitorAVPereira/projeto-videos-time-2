console.log(document.forms.formContato)
var formC=document.forms.formContato
document.querySelector("#btContato").onclick=function(){
    if(formC.nomeContato.value == ""){
        alert ("Preencha o nome!")
    }else if (formC.senhaContato.value == ""){
        alert ("Coloque sua senha!")}
    else{
         formC.submit()
         
    }
    }
