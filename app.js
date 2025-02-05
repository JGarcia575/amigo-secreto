const nombresAmigos = [];

function agregarAmigo() {
    //Acá tomamos el nombre que ingresa el usuario y quitamos los especios al incio y al final de la cadena
    let nombre = document.getElementById('amigo').value.trim();
   
    //Acá validamos si el usuario ingresa solo letras
    //No se permiten caráteres especiales, números, solo espacioes en blancos y cadenas vacías
    //Se permite nombres compuestos
    if (nombre == '') {
        alert('Por favor, ingrese un nombre válido.');
    } 
    else if (!/^[a-zA-ZáéíóúñÁÉÍÓÚ\s]+$/.test(nombre)) {
        alert('Por favor, ingrese solo letras.');
    } 
    else if (nombresAmigos.includes(nombre)){
        alert('El nombre ya se encuentra en la lista.Ingrese otro.');          
    } 
    else {
        nombresAmigos.push(nombre);
        actualizarListaAmigos();  
    }; 

    limpiarTexto();
    
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


