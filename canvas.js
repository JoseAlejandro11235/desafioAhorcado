//Declaración de arrays para las letras 
let letrasFila1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
let letrasFila2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"]
let letrasFila3 = ["Z", "X", "C", "V", "B", "N", "M"]

let dibujoAhorcado = 0;

let letraSeleccionada="";

let espacio_separacion_letra_incorrecta= 0; 

let letrasIncorrectasExistentes = [];

let letrasCorrectasExistentes = [];

let indiceGanador = 0;

function dibujarCanvas(){
    tablero.lineWidth = 8;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871"; 

    

    if(dibujoAhorcado==1){
        tablero.beginPath();
        tablero.moveTo(650,500);
        tablero.lineTo(900,500);
        tablero.stroke();
        tablero.closePath();
    }
    
    if(dibujoAhorcado==2){
        tablero.beginPath();
        tablero.moveTo(730,500);
        tablero.lineTo(730,150);
        tablero.stroke();
        tablero.closePath();
    }

    if(dibujoAhorcado==3){
        tablero.beginPath();
        tablero.moveTo(730,150);
        tablero.lineTo(910,150);
        tablero.stroke();
        tablero.closePath();
    }
    
    if(dibujoAhorcado==4){
        tablero.beginPath();
        tablero.moveTo(910,150);
        tablero.lineTo(910,200);
        tablero.stroke();
        tablero.closePath();
    }
    
    if(dibujoAhorcado==5){
        tablero.beginPath();
        tablero.arc(910, 235, 35, 0, 2*3.14);
        tablero.stroke();
        tablero.closePath();
    }
    
    //Dibujar tronco
    if(dibujoAhorcado==6){
        tablero.beginPath();
        tablero.moveTo(910,270);
        tablero.lineTo(910,405);
        tablero.stroke();
        tablero.closePath();
    }
    

    //Dibujar Piernas
    if(dibujoAhorcado==7){
        //Pierna Izquierda
        tablero.beginPath();
        tablero.moveTo(910,405);
        tablero.lineTo(875,475);
        tablero.stroke();
        tablero.closePath();
    }
    
    if (dibujoAhorcado==8){
        //Pierna Derecha
        tablero.beginPath();
        tablero.moveTo(910,405);
        tablero.lineTo(945,475);
        tablero.stroke();
        tablero.closePath();
    }

    //Dibujar Brazos
    if(dibujoAhorcado==9){
        //Brazo izquierdo
        tablero.beginPath();
        tablero.moveTo(910,270);
        tablero.lineTo(875,340);
        tablero.stroke();
        tablero.closePath();
    }
    
    if(dibujoAhorcado==10){
        //Brazo izquierdo
        tablero.beginPath();
        tablero.moveTo(910,270);
        tablero.lineTo(945,340);
        tablero.stroke();
        tablero.closePath();
    }
        
}




function dibujarLineas(){
    //Dibujar tablero previamente
    
    
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";  
    tablero.strokeStyle = "#0A3871"; 
    
    
    let anchura = 600/palabraSecreta.length;
    tablero.beginPath();
    for(let i = 0; i < palabraSecreta.length; i++){
        tablero.moveTo(500 + (anchura * i), 640);
        tablero.lineTo(550 + (anchura * i), 640);   
    }

    tablero.stroke();
    tablero.closePath();

}

function teclado(){
    for(let i = 0; i<10; i++){
        tablero.fillStyle = "#0A3871"
        tablero.fillRect(570 + i*42 ,660,40,40);
    }
    for(let i = 0; i<10;i++){
        tablero.fillStyle = "#0A3871"
        tablero.fillRect(580 + i*42 ,702,40,40);
    }
    for(let i = 0; i<7;i++){
        tablero.fillStyle = "#0A3871"
        tablero.fillRect(590 + i*42 ,744,40,40);
    }   

    tablero.font = '35px Arial';
    tablero.fillStyle = "#FFFFFF";

    //Letras primera fila
    for (let i = 0; i<letrasFila1.length; i++){
        tablero.fillText(letrasFila1[i], 575 + (42 * i), 690);
    }
    

    //Letras segunda fila
    for (let i = 0; i<letrasFila2.length; i++){
        tablero.fillText(letrasFila2[i], 575 + 10 + (42 * i),690 + 45);
    }
    
    //Letras tercera fila
    for (let i = 0; i<letrasFila3.length; i++){
        tablero.fillText(letrasFila3[i], 575 + (20 + 42 * i), 690 + 90);
    }
}

function dibujarLetra(evento){
    console.log(evento);
    let x = evento.pageX - pantalla.offsetLeft;
    let y = evento.pageY - pantalla.offsetTop;


    //Reconocer letras:
    //Letras de la primera fila
    if (x > 570 && x < 610 &&  y > 660 && y < 700 ){
        //Q
        letraSeleccionada = letrasFila1[0];
        console.log(letraSeleccionada);
    }
    if (x > 570 + 42 && x < 610 + 42 && y > 660 && y < 700){
        //W
        letraSeleccionada = letrasFila1[1];
        console.log(letraSeleccionada);
    }
    if (x > 570 + 42*2 && x < 610 + 42*2 && y > 660  && y < 700){
        //E
        letraSeleccionada = letrasFila1[2];
        console.log(letraSeleccionada);
    }
    if (x > 570 + 42*3 && x < 610 + 42*3 && y > 660 && y < 700){
        //R
        letraSeleccionada = letrasFila1[3];
        console.log(letraSeleccionada);
    }
    if (x > 570 + 42*4 && x < 610 + 42*4 && y > 660 && y < 700){
        //T
        letraSeleccionada = letrasFila1[4];
        console.log(letraSeleccionada);
    }
    if (x > 570 + 42*5 && x < 610 + 42*5 && y > 660 && y < 700){
        //Y
        letraSeleccionada = letrasFila1[5];
        console.log(letraSeleccionada);
    }
    if (x > 570 + 42*6 && x < 610 + 42*6 && y > 660 && y < 700){
        //U
        letraSeleccionada = letrasFila1[6];
        console.log(letraSeleccionada);
    }
    if (x > 570 + 42*7 && x < 610 + 42*7 && y > 660 && y < 700){
        //I
        letraSeleccionada = letrasFila1[7];
        console.log(letraSeleccionada);
    }
    if (x > 570 + 42*8 && x < 610 + 42*8 && y > 660 && y < 700){
        //O
        letraSeleccionada = letrasFila1[8];
        console.log(letraSeleccionada);
    }
    if (x > 570 + 42*9 && x < 610 + 42*9 && y > 660 && y < 700){
        //P
        letraSeleccionada = letrasFila1[9];
        console.log(letraSeleccionada);
    }
    
    //Letras de la segunda fila
    if (x > 580 && x < 620 &&  y > 702 && y < 742 ){
        //A
        letraSeleccionada = letrasFila2[0];
        console.log(letraSeleccionada);
    }
    if (x > 580 + 42 && x < 620 + 42 &&  y > 702 && y < 742 ){
        //S
        letraSeleccionada = letrasFila2[1];
        console.log(letraSeleccionada);
    }
    if (x > 580 + 42*2 && x < 620 + 42*2 &&  y > 702 && y < 742 ){
        //D
        letraSeleccionada = letrasFila2[2];
        console.log(letraSeleccionada);
    }
    if (x > 580 + 42*3 && x < 620 + 42*3 &&  y > 702 && y < 742 ){
        //F
        letraSeleccionada = letrasFila2[3];
        console.log(letraSeleccionada);
    }
    if (x > 580 + 42*4 && x < 620 + 42*4 &&  y > 702 && y < 742 ){
        //G
        letraSeleccionada = letrasFila2[4];
        console.log(letraSeleccionada);
    }
    if (x > 580 + 42*5 && x < 620 + 42*5 &&  y > 702 && y < 742 ){
        //H
        letraSeleccionada = letrasFila2[5];
        console.log(letraSeleccionada);
    }
    if (x > 580 + 42*6 && x < 620 + 42*6 &&  y > 702 && y < 742 ){
        //J
        letraSeleccionada = letrasFila2[6];
        console.log(letraSeleccionada);
    }
    if (x > 580 + 42*7 && x < 620 + 42*7 &&  y > 702 && y < 742 ){
        //K
        letraSeleccionada = letrasFila2[7];
        console.log(letraSeleccionada);
    }
    if (x > 580 + 42*8 && x < 620 + 42*8 &&  y > 702 && y < 742 ){
        //L
        letraSeleccionada = letrasFila2[8];
        console.log(letraSeleccionada);
    }
    if (x > 580 + 42*9 && x < 620 + 42*9 &&  y > 702 && y < 742 ){
        //Ñ
        letraSeleccionada = letrasFila2[9];
        console.log(letraSeleccionada);
    }

    //Letras de la tercera fila
    if (x > 590 && x < 630 &&  y > 744 && y < 784 ){
        //Z
        letraSeleccionada = letrasFila3[0];
        console.log(letraSeleccionada);
    }
    if (x > 590 + 42 && x < 630 + 42 &&  y > 744 && y < 784 ){
        //X
        letraSeleccionada = letrasFila3[1];
        console.log(letraSeleccionada);
    }
    if (x > 590 + 42*2 && x < 630 + 42*2 &&  y > 744 && y < 784 ){
        //C
        letraSeleccionada = letrasFila3[2];
        console.log(letraSeleccionada);
    }
    if (x > 590 + 42*3 && x < 630 + 42*3 &&  y > 744 && y < 784 ){
        //V
        letraSeleccionada = letrasFila3[3];
        console.log(letraSeleccionada);
    }
    if (x > 590 + 42*4 && x < 630 + 42*4 &&  y > 744 && y < 784 ){
        //B
        letraSeleccionada = letrasFila3[4];
        console.log(letraSeleccionada);
    }
    if (x > 590 + 42*5 && x < 630 + 42*5 &&  y > 744 && y < 784 ){
        //N
        letraSeleccionada = letrasFila3[5];
        console.log(letraSeleccionada);
    }
    if (x > 590 + 42*6 && x < 630 + 42*6 &&  y > 744 && y < 784 ){
        //M
        letraSeleccionada = letrasFila3[6];
        console.log(letraSeleccionada);
    }
    
    dibujarLetraCorrecta();
    dibujarLetraIncorrecta();
    verificarGanador();
    finDeJuego();
    
}

function dibujarLetraCorrecta(){
        let index = 0;
        let palabraProvisional = [];
        for (i=0; i<palabraSecretaArray.length; i++){
            palabraProvisional[i] = palabraSecretaArray[i];
        }
        if(!(letrasCorrectasExistentes.includes(letraSeleccionada))&& dibujoAhorcado<10){
            while (palabraProvisional.includes(letraSeleccionada)){
                index = palabraProvisional.indexOf(letraSeleccionada);
                console.log(index)
                let anchura = 600/palabraProvisional.length;
                tablero.font = '35px Arial';
                tablero.fillStyle = "#0A3871";
                tablero.fillText(letraSeleccionada, 510 + (anchura * index),630);
                palabraProvisional[index]= "ñ";
                indiceGanador ++;
            }
            letrasCorrectasExistentes.push(letraSeleccionada);
        }
            

}

function dibujarLetraIncorrecta(){
        
    if (!(palabraSecretaArray.includes(letraSeleccionada)) && !(letrasIncorrectasExistentes.includes(letraSeleccionada)) && (letraSeleccionada!="") && indiceGanador!=palabraSecretaArray.length){
        letrasIncorrectasExistentes.push(letraSeleccionada);
        console.log(letrasIncorrectasExistentes)
        console.log("Letra incorrecta " + letraSeleccionada);
        tablero.font = '35px Arial';
        tablero.fillStyle = "red";
        tablero.fillText(letraSeleccionada, 450 + espacio_separacion_letra_incorrecta, 530);
        espacio_separacion_letra_incorrecta += 30;
        letraSeleccionada="";
        dibujoAhorcado++;
        dibujarCanvas();
        }   
}


function finDeJuego(){
    if(dibujoAhorcado==10){
        tablero.font = '35px Arial';
        tablero.fillStyle = "red";
        tablero.fillText("Fin del juego", 1000, 360);
        tablero.fillText("La palabra era " + palabraSecreta, 650, 580);
    }
    
}

function verificarGanador(){
    console.log(indiceGanador);
    console.log(palabraSecretaArray.length);
    if (palabraSecretaArray.length == indiceGanador && indiceGanador!=0){
        tablero.font = '35px Arial';
        tablero.fillStyle = "green";
        tablero.fillText("Ganaste,", 1000, 360);
        tablero.fillText("Felicidades! ", 1000, 400);
    } 
}
pantalla.onclick = dibujarLetra;
