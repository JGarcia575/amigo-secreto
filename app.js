const nombresAmigos = [];

const indicesSorteados = [];

const listaAmigos = document.getElementById('listaAmigos');

function agregarAmigo() {
    //Acá tomamos el nombre que ingresa el usuario y quitamos los especios al incio y al final de la cadena
    const nombre = document.getElementById('amigo').value.trim();
   
    //Acá validamos si el usuario ingresa solo letras
    //No se permiten caráteres especiales, números, espacios en blancos y cadenas vacías
    //Se permite nombres compuestos
    if (nombre == '') {
        alert('Por favor, ingrese un nombre válido.');
    } 
    else if (!/^[a-zA-ZáéíóúñÁÉÍÓÚ\s]+$/.test(nombre)) {
        alert('Por favor, ingrese solo letras.');
    } 
    else if (nombresAmigos.includes(nombre)){
        alert('El nombre ya se encuentra en la lista. Ingrese otro.');          
    } 
    else {
        nombresAmigos.push(nombre);
        actualizarListaAmigos();  
    }; 

    limpiarTexto();
    
    return nombresAmigos;
};

function actualizarListaAmigos() {
    listaAmigos.innerHTML = '';
    
    for (let i = 0; i < nombresAmigos.length; i++) {
        const elementoLista = document.createElement('li');
        elementoLista.innerHTML = nombresAmigos[i];
        listaAmigos.appendChild(elementoLista);                
    };
    
    return;
};

function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    if (nombresAmigos.length === 0) {
        alert('No hay amigos añadidos. Asegurate de ingresar amigos a la lista.')
    } 
    else {
        
        let amigoSorteado = obtenerAmigo();
        //acá validamos el valor de la función obtenerAmigo()
        //si el valor es nulo no se muestra el amigo elegido, en cambio si es un nombre se muestra el amigo
        if (amigoSorteado) {
            resultado.innerHTML = amigoSorteado;
        } 
        else {
            resultado.innerHTML = '';
            listaAmigos.innerHTML = '';
            resetearArrays();
            
        };     
    };
};

function obtenerAmigo() {
    //áca evaluamos si ya se sortearon todos los amigos
    if (indicesSorteados.length === nombresAmigos.length) {
        alert('Ya se sortearon todos los amigos.Ingresa nuevos nombres');

        return null;
    };

    let indice = generarIndice();
    indicesSorteados.push(indice);
        
    return nombresAmigos[indice];}


function generarIndice() {
    let indice;  
    // este bucle genera índices no repetidos 
    do {
        indice = Math.floor(Math.random() * nombresAmigos.length);
    } while(indicesSorteados.includes(indice)) 
    
    return indice;    
};

function resetearArrays() {
    //acá reseteamos los arrays
    nombresAmigos.length = 0;
    indicesSorteados.length = 0;

    return;
} 

function limpiarTexto() {
    document.getElementById('amigo').value = '';
    
    return;
}


