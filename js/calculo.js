

const coso = () => {
    const formProps = document.getElementById('formContact').elements;
    localStorage.setItem('nombre', formProps['nombre'].value);
    localStorage.setItem('cant', formProps['desplegable'].value);
    localStorage.setItem('email', formProps['email'].value);

    const datosCargados = [];
    for (let i= 1; i <= formProps['desplegable'].value; i++) {
        datosCargados.push({
            colTotal:  formProps['colTotal'+i].value,
            colHDL:  formProps['colHDL'+i].value
        })
    }
    localStorage.setItem('estudios',JSON.stringify(datosCargados));
    entrada()
}

let calculoResultado = document.getElementById("calculoResultado");

const limpiar = () => {
    localStorage.clear();

}

class Paciente {
    constructor (colTotal, colHDL, indice) {
        this.colTotal = colTotal;
        this.colHDL = colHDL;
        this.indice = indice; 
    }
    
}

const historicoAnalisis = [];


function entrada (){
    event.preventDefault();
    const estudios = JSON.parse(localStorage.getItem('estudios'))
    for(let i = 0; i < estudios.length; i++) {
        const colTotal = estudios[i].colTotal;
        const colHDL = estudios[i].colHDL

        let calculoIndice =colTotal/colHDL;
    
    
        if (calculoIndice < 4){
    
            calculoResultado.innerHTML = (" Su índice es normal");
        
        } else {
            calculoResultado.innerHTML = (" Su indice supera el valor esperado, consulte con su médico de cabecera")
        };
        historicoAnalisis.push(new Paciente(colTotal, colHDL, calculoIndice))

    }
    calculoResultado.innerHTML = ("Los resultados de " + localStorage.getItem('nombre') + " son " + JSON.stringify(historicoAnalisis, null, 2))
    
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


//entrada();












