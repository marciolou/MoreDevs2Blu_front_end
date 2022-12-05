var elemento = document.querySelector('h1')

elemento.innerHTML += ' JS';
elemento.style.color = '#white';
console.log(elemento);

function limpar(event){
    event.preventDefault();
    document.querySelector('form').reset();
    console.log('Limpando...');
}

function salvar(event){
    event.preventDefault();
    console.log('Salvando...');

    var full_name = document.getElementsByName('nome')[0].value;
    var cargo = document.getElementsByName('cargo')[0].value;
    var money = document.getElementsByName('salario')[0].value;

    var pessoa ={
                    'nome_completo':full_name,
                    'cargo':cargo,
                    'salario':money
                }
    console.log(pessoa);
}

document.getElementById('salvar').addEventListener('click', salvar)