const nombresAmigos = [];

function agregarAmigo() {
    //Acá tomamos el nombre que ingresa el usuario y quitamos los especios al incio y al final de la cadena
    let nombre = document.getElementById('amigo').value.trim();
    
    console.log(nombre);
    //Acá validamos si el usuario ingresa solo letras, si ingresa solo espacios o una cadena vacía dispara un alert
    //Se permite nombres compuestos
    if (/^[a-zA-Záéíóúñ\s]+$/.test(nombre)) {
        nombresAmigos.push(nombre);
        limpiarTexto();
        actualizarListaAmigos();             

    } else {
        alert('Por favor, ingrese un nombre que solo contenga letras.');       
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


