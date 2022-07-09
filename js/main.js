//usando ciclo for

 /* let nombreDerivante = prompt("Buen día, Ingrese su nombre");


let total_prestaciones = 0;
let cantidad_analisis = parseInt(prompt("Ingrese la cantidad de análisis que desea derivar"));


for (let i = 0; i < cantidad_analisis; i++) {
    let prestacion = prompt("Ingrese nombre del análisis");
    let precio_prestacion = parseFloat(prompt("Ingrese el precio de la prestación que figura en la grilla de derivacion"));
    total_prestaciones += precio_prestacion;
    let mensaje = "Usted ingresó " + prestacion + " por $" + precio_prestacion;
    alert(mensaje);
    console.log(mensaje);
}



alert ("Estimado derivante " + nombreDerivante + " El total a abonar por las derivaciones seleccionadas es de: $" + total_prestaciones); */


 
const estudios = [
    { id: 1, nombre: "glucemia", precio: 110 },
    { id: 2, nombre: "uremia", precio: 120 },
    { id: 3, nombre: "creatinina", precio: 330 },
    { id: 4, nombre: "colesterol", precio: 5000 },
    { id: 5, nombre: "hdl", precio: 750 },
    { id: 6, nombre: "ldl", precio: 980 },
  ];
  let estudio = prompt("ingrese el estudio que desea verificar su disponibilidad").toLowerCase();
  let resultado = estudios.some(elemento => elemento.nombre === estudio);
  if(resultado){
    alert("Estudio disponible");
  }else{
    alert("Estudio no disponible");
  }