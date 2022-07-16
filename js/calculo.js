//COMENTO ESTO POR SI JODO LO QUE AVANCE, el CODIGO FUNCIONAL ESTA MAS ABAJO
/* 


let calculoResultado = document.getElementById("calculoResultado");


class Paciente {
    constructor (id, colTotal, colHDL, indice) {
        this.id = id;
        this.colTotal = colTotal;
        this.colHDL = colHDL;
        this.indice = indice; 
    }
    
}

const historicoAnalisis = [];


function entrada (){
    let namePaciente = prompt("Buen día, Ingrese su nombre");
    let numeroEstudio = parseInt(prompt("Ingrese la cantidad de estudios a cargar"))
    console.log(numeroEstudio)
    for(let i = 0; i < numeroEstudio; i++) {
        indice(i)
    }
    alert ("Los resultados de " + namePaciente + " son " + JSON.stringify(historicoAnalisis, null, 2))
    
}

function indice (i){
    
    let colTotal = +prompt("Ingrese su valor de Colesterol Total");
    let colHDL =  +prompt("Ingrese su valor de Colesterol HDL");

    const isValid = validaciones(colTotal, colHDL)
    if (!isValid) {
        return null;
    }

    let calculoIndice = colTotal/colHDL;


    if (calculoIndice < 4){

        alert (" Su índice es normal");
    
    } else {
        alert (" Su indice supera el valor esperado, consulte con su médico de cabecera")
    };
    historicoAnalisis.push(new Paciente(i, colTotal, colHDL, calculoIndice))
    return null
}

function validaciones(colTotal, colHDL) {
    if  (!colTotal && !colHDL) {
        alert("Colesterol total y HDL son valores requeridos")
        return false
    };

    if (colHDL === 0) {
        alert ("Colesterol HDL no puede ser 0")
        return false
    };
    return true
}


entrada();


function historico(historicoAnalisis) {
    for(let i = 0; i < historicoAnalisis.length; i++) {
        const resultado = indice(historicoAnalisis[i].colTotal, historicoAnalisis[i].colHdl);
        historicoAnalisis[i].indice = resultado;
    }
}
 */

///CODIGO FUNCIONAL

let calculoResultado = document.getElementById("calculoResultado");


class Paciente {
    constructor (id, colTotal, colHDL, indice) {
        this.id = id;
        this.colTotal = colTotal;
        this.colHDL = colHDL;
        this.indice = indice; 
    }
    
}

const historicoAnalisis = [];


function entrada (){
    let namePaciente = prompt("Buen día, Ingrese su nombre");
    let numeroEstudio = parseInt(prompt("Ingrese la cantidad de estudios a cargar"))
    console.log(numeroEstudio)
    for(let i = 0; i < numeroEstudio; i++) {
        indice(i)
    }
    calculoResultado.innerHTML = ("Los resultados de " + namePaciente + " son " + JSON.stringify(historicoAnalisis, null, 2))
    
}

function indice (i){
    
    let colTotal = +prompt("Ingrese su valor de Colesterol Total");
    let colHDL =  +prompt("Ingrese su valor de Colesterol HDL");

    const isValid = validaciones(colTotal, colHDL)
    if (!isValid) {
        return null;
    }

    let calculoIndice = colTotal/colHDL;


    if (calculoIndice < 4){

        calculoResultado.innerHTML = (" Su índice es normal");
    
    } else {
        calculoResultado.innerHTML = (" Su indice supera el valor esperado, consulte con su médico de cabecera")
    };
    historicoAnalisis.push(new Paciente(i, colTotal, colHDL, calculoIndice))
    return null
}

function validaciones(colTotal, colHDL) {
    if  (!colTotal && !colHDL) {
        calculoResultado.innerHTML = ("Colesterol total y HDL son valores requeridos")
        return false
    };

    if (colHDL === 0) {
        calculoResultado.innerHTML = ("Colesterol HDL no puede ser 0")
        return false
    };
    return true
}


entrada();


function historico(historicoAnalisis) {
    for(let i = 0; i < historicoAnalisis.length; i++) {
        const resultado = indice(historicoAnalisis[i].colTotal, historicoAnalisis[i].colHdl);
        historicoAnalisis[i].indice = resultado;
    }
}








