// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//array que contiene los nombres de los amigos
let nombresAmigos = [];

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    console.log(nombre);

    if (nombre === '') {
        alert('Por favor, ingrese un nombre válido.');

    } else {
        nombresAmigos.push(nombre);
        limpiarTexto();
        actualizarListaAmigos();       
    }; 
    
    return nombresAmigos;
};

function actualizarListaAmigos() {
    document.getElementById('listaAmigos').innerHTML = '';
    
    for (let i = 0; i < nombresAmigos.length; i++) {
        let elementoLista = document.createElement('li');
        elementoLista.innerHTML = nombresAmigos[i];
        document.getElementById('listaAmigos').appendChild(elementoLista);                
    };
    
    return;
};

function sortearAmigo() {
    if (nombresAmigos.length === 0) {
        alert('No hay amigos añadidos. Asegurate de ingresar amigos a la lista.')
    } else {
        let amigoSorteado = nombresAmigos[generarIndice()];
        document.getElementById('resultado').innerHTML = amigoSorteado;
        console.log(amigoSorteado);
    }
};

function generarIndice() {
    let indice = Math.floor(Math.random() * nombresAmigos.length);
    return indice;
};

function limpiarTexto() {
    document.getElementById('amigo').value = '';
    return;
}


