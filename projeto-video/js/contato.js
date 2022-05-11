//Validação do Formulário de Contato//
var formC=document.forms.formContato
document.querySelector('#btContato').onclick=function(){
    if(formC.nomeContato.value == ""){
        alert("Preencha o nome!")
    }else if(formC.emailContato.value == ""){
        alert("Preencha o email!")
    }else if(formC.assuntoContato.value == ""){
        alert("Informe o Assunto!")
    }else if(formC.assuntoContato.value == ""){
    }else if(formC.comentarios.value == ""){
        alert("Preencha um comentário")}
    else{
        formC.submit ();
    }
}
//Fim da Validação do Formulário de Contato//