let listaAmigos = [];
let numeroAleatorio = 0;
function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo == '') {
        alert('Debe ingresar un nombre valido');
    } else {
        console.log(amigo);
        listaAmigos.push(amigo);
        console.log(listaAmigos);
        limpiarEntradaDatos();
        listarAmigos(listaAmigos);
        limpiarAmigoSecreto();


    }

}
function limpiarAmigoSecreto(){
    let amigoSecreto=document.getElementById('resultado');
    amigoSecreto.innerHTML='';
}
function limpiarEntradaDatos() {
    document.getElementById('amigo').value = '';
}

function listarAmigos(listaAmigos) {
    let listaMostrarAmigos = document.getElementById('listaAmigos');
    listaMostrarAmigos.innerHTML = '';

    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = listaAmigos[i];
        listaMostrarAmigos.appendChild(li);
    }

}
function validarArrayVacio(listaAmigos) {
    if (listaAmigos.length === 0) {
        alert('Debes ingresar amigos');
        return true;
    }
    console.log('CatAmigos: ' + listaAmigos.length);

    return false;

}
function genrarNumeroAleatorio(listaAmigos) {
    numeroAleatorio = Math.floor(Math.random() * listaAmigos.length);
    console.log('numeroAleatorio: ' + numeroAleatorio);
    return numeroAleatorio;
}
function limpiarListaAmigos(){
    listaAmigos = [];
    let listaMostrarAmigos = document.getElementById('listaAmigos');
    listaMostrarAmigos.innerHTML = '';
}
function sortearAmigo() {
    let vaidar;
    let numAleatorio;
    vaidar = validarArrayVacio(listaAmigos);
    if (vaidar === false) {
        numAleatorio=genrarNumeroAleatorio(listaAmigos)
        let amigoSecreto=document.getElementById('resultado');
        amigoSecreto.innerHTML='El amigo secreto sorteado es: '+listaAmigos[numAleatorio];
        limpiarListaAmigos();
    }


}

