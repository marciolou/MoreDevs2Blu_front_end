function carregarDados(){
    return JSON.parse(localStorage.getItem('Funcionarios'))
};

function carregarEditar(event, id){
    console.log('Evento de click', event);
    event.preventdefault();
    carregarEditar(id)
};

function carregar(){
    console.log
};