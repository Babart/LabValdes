//

let namePaciente = prompt("Buen día, Ingrese su nombre");

let colTotal = prompt("Ingrese su valor de Colesterol Total");

let colesterolTotal = 0;

let colHDL = prompt("Ingrese su valor de Colesterol HDL")

let colesterolHDL= 0;

let trigli = prompt("Ingrese su valor de Triglicéridos")

let Trigliceridos = 0; 

let colLDL = prompt("Ingrese su valor de Colesterol LDL")

let colesterolLDL = 0;

function indice (colesterolTotal, colesterolHDL){
    let colesterolTotal = 0;
    let colesterolHDL= 0;
    

    if  (!colesterolTotal && !colesterolHDL) {
        alert("Colesterol total y HDL son valores requeridos")
    }

    if (colesterolHDL === 0) {
        alert ("Coelsterol HDL no puede ser 0")
    }

    let calculoIndice = colesterolTotal/colesterolHDL;

    if (calculoIndice < 4){

        alert (namePaciente + " Su índice es normal");
    
    } else {
        alert (namePaciente + " Su indice supera el valor esperado, consulte con su médico de cabecera")
    };
}

const historicoAnalisis = [
    {
        colesterolTotal : 2,
        colesterolHdl :  4,
        fecha: new Date(),
        indice: 0
    },
    {
        colesterolTotal : 2,
        colesterolHdl :  4,
        fecha: new Date(),
        indice: 0
    },
    {
        colesterolTotal : 2,
        colesterolHdl :  4,
        fecha: new Date(),
        indice: 0
    }
];

function historico(historicoAnalisis) {
    for(let i = 0; i < historicoAnalisis.length; i++) {
        const resultado = indice(historicoAnalisis[i].colesterolTotal, historicoAnalisis[i].colesterolHdl);
        historicoAnalisis[i].indice = resultado;
    }
}

alert ("Usted ha cargado sus resultados correctamente")




