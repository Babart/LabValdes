
const historicoAnalisis = [
        {
            colTotal : 0,
            colHDL :  0,
            fecha: new Date(),
            indice: 0
        },
        {
            colTotal : 0,
            colHDL :  0,
            fecha: new Date(),
            indice: 0
        },
        {
            colTotal : 0,
            colHDL :  0,
            fecha: new Date(),
            indice: 0
        }
    ];

function entrada (){
    for(let i = 0; i < historicoAnalisis.length; i++) {
        indice(i)
    }
    
}

function indice (i){
    let namePaciente = prompt("Buen día, Ingrese los datos del paciente "+ i);
    let colTotal = +prompt("Ingrese su valor de Colesterol Total");
    let colHDL = + +prompt("Ingrese su valor de Colesterol HDL");

    const isValid = validaciones(colTotal, colHDL)
    if (!isValid) {
        return null;
    }

    let calculoIndice = colTotal/colHDL;


    if (calculoIndice < 4){

        alert (namePaciente + " Su índice es normal");
    
    } else {
        alert (namePaciente + " Su indice supera el valor esperado, consulte con su médico de cabecera")
    };
    historicoAnalisis[i] = ({name: namePaciente, colHDL : colHDL, colTotal: colHDL, indice: calculoIndice})
    return null;
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


entrada()


function historico(historicoAnalisis) {
    for(let i = 0; i < historicoAnalisis.length; i++) {
        const resultado = indice(historicoAnalisis[i].colTotal, historicoAnalisis[i].colHdl);
        historicoAnalisis[i].indice = resultado;
    }
}






