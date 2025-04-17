function validarForm(event){
    event.preventDefault();

    const nome_validar = document.forms['formcadastro'].nome.value.length;
    const email_validar = document.forms['formcadastro'].nome.value.length;

    if(nome_validar < 5 || nome_validar > 50){
        alert('O nome precisa ter entre 6-49 caracteres e não pode ter números ou caracteres especiais.');
        return false;
    }  
    if(!email_validar.includes('@') || email_validar < 20){
        alert('Insira um email válido')
        return false;
    } 
     
};

document.getElementById('formcadastro').addEventListener('submit', validarForm );