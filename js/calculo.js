//

let namePaciente = prompt("Buen día, Ingrese su nombre");

let colTotal = prompt("Ingrese su valor de Colesterol Total");

let colesterolTotal = 0;

let colHDL = prompt("Ingrese su valor de Colesterol HDL")

let colesterolHDL= 0;

let trigli = prompt("Ingrese su valor de Triglicéridos")

let Triglicéridos = 0; 

let colLDL = prompt("Ingrese su valor de Colesterol LDL")

let colesterolLDL = 0;

function indice (colesterolTotal, colesterolHDL){

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

/* if (indice < 4){

    alert (namePaciente + " Su índice es normal");

} else {
    alert (namePaciente + " Su indice supera el valor esperado, consulte con su médico de cabecera")
};
 */



