let pronombres = ["yo", "vos", "ustedes"];
let adjetivos = ["grande", "corto", "preciosa"];
let sustantivos = ["amor", "dominó", "playa"];
let acciones = ["bailó", "escuchó", "comió"];

function generarNombresDominio(pronombres, adjetivos, sustantivos, acciones) {
  let nombresDominio = [];
  let conteo = 0;
  pronombres.forEach((pronombre) => {
    adjetivos.forEach((adjetivo) => {
      sustantivos.forEach((sustantivo) => {
        acciones.forEach((accion) => {
          let nombreDominio = pronombre + adjetivo + sustantivo + accion;
          nombresDominio.push(nombreDominio);
          conteo++;
        });
      });
    });
  });
console.log(conteo);
  return nombresDominio;
}

let nombresDominio = generarNombresDominio(pronombres, adjetivos, sustantivos, acciones);
console.log(nombresDominio);
