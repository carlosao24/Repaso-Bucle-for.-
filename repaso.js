function mostrar(opcion){
    switch(opcion){
        case 1: opcion == 1
            ejercicio1()
            break;
        case 2: opcion == 2
            mostrarCentena()
            break;
        case 3: opcion == 3
            mostrarCentenaRe()
            break;
        case 4: opcion == 4
            mostrarMensaje1()
            break;
        case 4: opcion == 5
            mostrarMensaje2()
            break;
        case 4: opcion == 6
            mostrarMensaje3()
            break;
        case 4: opcion == 7
            mostrarMensaje4()
            break;
        case 5: opcion == 8
            imprimitTabla3()
            break;
    }
}

function ejercicio1(){
    for(let i = 0; i <= 5; i++){
        console.log(i)
    }
}

function mostrarCentena(){
    for(let i = 100; i <= 1000; i+= 100){
        console.log(i)
    }
}

function mostrarCentenaRe(){
    for(let i = 1000; i > 700; i-= 100){
        console.log(i)
    }
}

function mostrarMensaje1(){
    for(let i = 5; i < 20; i+=5){
        console.log("Mensaje 1")
    }
}
function mostrarMensaje2(){
    for(let i = 10; i >= 8; i-- ){
        console.log("Mensaje 2")
    }
}
function mostrarMensaje3(){
    for(let i = 0; i < 3 ; i++ ){
        console.log("Mensaje 3")
    }
}
function mostrarMensaje4(){
    for(let i = 8; i > 5; i-- ){
        console.log("Mensaje 4")
    }
}

function imprimitTabla3(){
    for(let i = 1; i < 11; i++){
        console.log(3+"x"+(i)+"="+3*(i))
    }
}