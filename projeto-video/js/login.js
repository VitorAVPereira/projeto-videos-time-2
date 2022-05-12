let formL=document.forms.formLogin
document.querySelector("#btLogin").onclick=function(){
    if(formL.email.value == ""){
        alert ("Preencha o Email!")
    }else if (formL.senha.value == ""){
        alert ("Coloque sua Senha!")}
    else{
         formL.submit()
         localStorage.emailUser=formL.email.value
    }
    }
