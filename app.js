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

function limpiarTexto() {
    document.getElementById('amigo').value = '';
    return;
}


