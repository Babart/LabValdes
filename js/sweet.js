let boton = document.getElementById("formSi");

boton.addEventListener("click", () => {
  swal({
    title: "Datos enviados con éxito",
    text: "GRACIAS POR UTILIZAR LA SECCION DE CALCULO, TE SUGERIMOS TE REALICES CONTROLES ANUALES o SEMESTRALES SEGUN INDICACIONES DE TU MEDICO DE CABECERA",
    icon: "success",
    button: "Continuar",
  });
});
 


let botonn = document.getElementById("formNo");

botonn.addEventListener("click", () => {
  swal({
    title: "Campos Borrados",
    text: "Puede llenarlos nuevamente",
    icon: "error",
    button: "Continuar",
  });
});