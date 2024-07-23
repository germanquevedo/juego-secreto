let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let nroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos==1) ? 'vez':'veces'}`)
        document.getElementById("reiniciar").removeAttribute('disabled');
    }else{
        //El usuario no acerto
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El numero es menor');
        }else{
            asignarTextoElemento('p','El numero es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    return document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let nroGenerado =  Math.floor(Math.random() *nroMaximo) + 1;

    console.log(nroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los nros
    if(listaNumerosSorteados.length == nroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles')
    } else{
         //Si el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(nroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(nroGenerado);
            return nroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p',`Indica un numero del 1 al ${nroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego(){
    //Indicar mensaje de intervalos de numeros.
    //Genero el numero aleatorio
    //Inicializar el nro intentos
    condicionesIniciales();
    //Limpiar caja
    limpiarCaja();
    
    
    //Deshabilitar el boton de reinicio
    document.getElementById("reiniciar").setAttribute('disabled',true);
}

condicionesIniciales();

