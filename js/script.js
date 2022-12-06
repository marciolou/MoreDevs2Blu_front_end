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

    var listaFuncionarios = JSON.parse(localStorage.getItem('Funcionarios'));

    if (listaFuncionarios == null){
        listaFuncionarios = [];
    }
    var id = JSON.parse(localStorage.getItem('IdFuncionarios'))
    if (listaFuncionarios == null){
        id = 0;
    }
    id = id +1;

    var pessoa ={
                    'nome_completo':full_name,
                    'cargo':cargo,
                    'salario':money
                };listaFuncionarios.push(pessoa);
    
    localStorage.setItem('IdFuncionarios', JSON.stringify(id));
    localStorage.setItem('Funcionarios', JSON.stringify(listaFuncionarios));
    limpar(event)
}

document.getElementById('salvar').addEventListener('click', salvar)
