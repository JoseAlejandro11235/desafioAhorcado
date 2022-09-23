// Selectores

let listaPalabras = ["ALURA", "ORACLE", "ONE", "JAVASCRIPT", "HTML", "CSS","PROGRAMAR","CODIGO","MICROSOFT","GOOGLE"];
let pantalla = document.getElementById("horca");
let tablero = pantalla.getContext("2d");
let palabraSecreta = "";
let palabraSecretaArray = [];
let input = document.getElementById("texto-recibido");




//Palabra secreta

function escogerPalabraSecreta(){
    let palabra = listaPalabras[Math.floor(Math.random() * listaPalabras.length)];
    palabraSecreta = palabra;
    palabraSecretaArray = palabraSecreta.split('');
}


//Iniciar juego
function iniciarJuego(){
    document.getElementById("horca").style.display = "block";
    dibujoAhorcado = 0;
    letraSeleccionada="";
    indiceGanador = 0;
    espacio_separacion_letra_incorrecta= 0;
    letrasCorrectasExistentes = [];
    letrasIncorrectasExistentes = [];
    tablero.clearRect(0,0,1200,860);

    document.getElementById("iniciar-juego").style.display = "none";
    document.getElementById("agregar-palabra").style.display = "none";
    document.getElementById("nuevo-juego").style.display = "inline-block";
    document.getElementById("desistir").style.display = "inline-block";
    escogerPalabraSecreta();
    dibujarLineas();
    teclado();
}


function nuevoJuego(){
    iniciarJuego();   
}
function desistir(){
    document.getElementById("iniciar-juego").style.display = "block";
    document.getElementById("agregar-palabra").style.display = "block";
    document.getElementById("nuevo-juego").style.display = "none";
    document.getElementById("desistir").style.display = "none";
    document.getElementById("horca").style.display = "none";
}

function agregarPalabra(){
    document.getElementById("iniciar-juego").style.display = "none";
    document.getElementById("agregar-palabra").style.display = "none";
    document.getElementById("div-aparece-agregar").style.display = "block";
    document.getElementById("horca").style.display = "none";
    document.getElementById("nuevo-juego").style.display = "none";
    document.getElementById("desistir").style.display = "none";

}
function guardarEmpezar(){
    
    
    let inputValue = input.value;
    texto = inputValue.toUpperCase();
    if (texto.length<=8 && texto.length!=0){
        verificarAgregarTextoIngresado(texto)
        input.value ="";
    }else if( texto.length==0){
        alert("No ha ingresado la palabra")
    }else{
        alert("Su texto debe contener 8 letras o menos.")
    }
    
}
function cancelar(){
    document.getElementById("iniciar-juego").style.display = "block";
    document.getElementById("agregar-palabra").style.display = "block";
    document.getElementById("div-aparece-agregar").style.display = "none";
    input.value ="";
}

function verificarAgregarTextoIngresado(palabra){
    if (palabra.match(/^[A-Z ]*$/)){
        listaPalabras.push(palabra);
        document.getElementById("div-aparece-agregar").style.display = "none";
        iniciarJuego();
    }else{
        alert("Solo letras sin acentos")
    }
    
}