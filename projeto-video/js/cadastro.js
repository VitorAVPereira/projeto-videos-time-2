document.querySelector("#btContato").onclick=function(){
    if(formC.nomeContato.value == ""){
        alert ("Preencha o nome!")
    }else if (formC.emailContato.value == ""){
        alert ("Coloque seu E-mail!")
    }else if (formC.telefoneContato.value == ""){
        alert ("Coloque seu telefone!")
    }else if (formC.senha.value == ""){
        alert ("Coloque sua senha!")
    }else if (formC.senhaC.value == ""){
        alert ("Coloque sua senha!")}
    else{
         formC.submit()
        localStorage.nomeUser=formC.nomeContato.value
        localStorage.emailUser=formC.emailContato.value
        localStorage.telefoneUser=formC.telefoneContato.value
        localStorage.senhaUser=formC.senha.value
    }
    }
