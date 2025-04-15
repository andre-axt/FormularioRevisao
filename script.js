function validarForm(){
    const nome_validar = document.forms('formcadastro').nome.value.length;

    if(nome_validar < 5 || nome_validar > 50){
        alert('O nome precisa ter entre 6-49 caracteres e não pode ter números ou caracteres especiais.');
        return false;
    }  
};