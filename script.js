function validarForm(){

    const nome_validar = document.forms['formcadastro'].nome.value;
    const sobrenome_validar = document.forms['formcadastro'].sobrenome.value;
    const cpf_validar = document.forms['formcadastro'].cpf.value;
    const telefone_validar = document.forms['formcadastro'].telefone.value;
    const rua_validar = document.forms['formcadastro'].rua.value;
    const bairro_validar = document.forms['formcadastro'].bairro.value;
    const cidade_validar = document.forms['formcadastro'].cidade.value;
    const cep_validar = document.forms['formcadastro'].cep.value;
    const nomemae_validar = document.forms['formcadastro'].nomemae.value;
    const nomepai_validar = document.forms['formcadastro'].nomepai.value;
    const testepsicologico_validar = document.forms['formcadastro'].testepsicologico.value;
    const matematica_teste = document.forms['formcadastro'].matematica.value;
    const testevisao_teste = document.forms['formcadastro'].testevisao.value;

    // Aqui eu vou começar a testar umas coisas novas

    if(!/^[A-Za-zÀ-ÿ\s]{6,49}$/.test(nome_validar)){
        alert('O nome precisa ter entre 6-49 caracteres e não pode ter números ou caracteres especiais.');
        return false;
    }  
    if(!/^[A-Za-zÀ-ÿ\s]{4,49}$/.test(sobrenome_validar)){
        alert('O sobrenome precisa ter entre 4-49 caracteres e não pode ter números ou caracteres especiais.');
        return false;
    }
    if(!/^\d{11}$/.test(cpf_validar)){
        alert('Insira um cpf válido sem pontos, traços ou espaços')
        return false;
    }
    if(!/^\d{9}$/.test(telefone_validar)){
        alert('Insira um telefone válido com 9 dígitos númericos sem traço ou espaço')
        return false;
    }
    if(!/^[A-Za-zÀ-ÿ\s]{6,}$/.test(rua_validar)){
        alert('Insira um nome de rua existente')
        return false;
    }
    if(!/^[A-Za-zÀ-ÿ\s]{6,}$/.test(bairro_validar)){
        alert('Insira um nome de bairro existente')
        return false;
    }
    if(!/^[A-Za-zÀ-ÿ\s]{6,}$/.test(cidade_validar)){
        alert('Insira um nome de cidade existente')
        return false;
    }
    if(!/^\d{8}$/.test(cep_validar)){
        alert('Insira um CEP válido')
        return false;
    }
    if(!/^[A-Za-zÀ-ÿ\s]{6,49}$/.test(nomemae_validar)){
        alert('O nome precisa ter entre 6-49 caracteres e não pode ter números ou caracteres especiais.');
        return false;
    }
    if(!/^[A-Za-zÀ-ÿ\s]{6,49}$/.test(nomepai_validar)){
        alert('O nome precisa ter entre 6-49 caracteres e não pode ter números ou caracteres especiais.');
        return false;
    }
    if(!/^[A-Za-zÀ-ÿ\s]{6,}$/.test(testepsicologico_validar)){
        alert('Pode falar, não tem vergonha do que vê')
        return false;
    }
    if(matematica_teste !== "11"){ 
        alert('Vai estudar e sai desse formulário')
        return false;
    }
    if(testevisao_teste !== "789121415"){ 
        alert('Use o zoom para facilitar')
        return false;
    }
    alert('Formulário enviado com sucesso')
};

document.getElementById('formcadastro').addEventListener('submit', validarForm );