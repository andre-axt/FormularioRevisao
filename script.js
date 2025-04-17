function validarForm(){

    const nome_validar = document.forms['formcadastro'].nome.value.length;
    const sobrenome_validar = document.forms['formcadastro'].sobrenome.value.length;


    if(nome_validar < 5 || nome_validar > 50){
        alert('O nome precisa ter entre 6-49 caracteres e não pode ter números ou caracteres especiais.');
        return false;
    }  
    if(sobrenome_validar < 3 || sobrenome_validar > 50){
        alert('O sobrenome precisa ter entre 4-49 caracteres e não pode ter números ou caracteres especiais.');
        return false;
    }
    
    alert('Formulário enviado com sucesso')
};

document.getElementById('formcadastro').addEventListener('submit', validarForm );