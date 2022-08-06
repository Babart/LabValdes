let inputs = document.querySelectorAll(".valor");

let url = "https://api.exchangeratesapi.io/latest?symbols=USD,ARG";
fetch(url)
  .then(r => r.json())
  .then(data => {
    document.querySelector("#USD")
      .dataset.cambio = data.rates.USD;
    document.querySelector("#ARG")
      .dataset.cambio = data.rates.ARG;  

    inputs.forEach(input => {
      input.value = input.dataset.cambio;
    });
  })
  .catch(error => console.error(error))

function valorCambiado(input) {
  let factor = input.value / input.dataset.cambio;
  inputs.forEach(campo => {
    campo.value = (campo.dataset.cambio * factor).toFixed(2);
  })
};