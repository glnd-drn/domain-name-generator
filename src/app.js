let pronombres = ["yo", "vos", "ustedes"];
let adjetivos = ["grande", "corto", "preciosa"];
let sustantivos = ["amor", "domino", "playa"];
let acciones = ["bailo", "escucho", "comio"];
let extensiones = [".com", ".net", ".es"];

function generarNombresDominio(pronombres, adjetivos, sustantivos, acciones, extensiones) {
  let nombresDominio = [];
  let conteo = 0;
  pronombres.forEach((pronombre) => {
    adjetivos.forEach((adjetivo) => {
      sustantivos.forEach((sustantivo) => {
        acciones.forEach((accion) => {
          extensiones.forEach((extensiones) => {
          let nombreDominio = pronombre + adjetivo + sustantivo + accion + extensiones;
          nombresDominio.push(nombreDominio);
          conteo++;
          });
        });
      });
    });
  });


  console.log(conteo);
  return nombresDominio;
}

let nombresDominio = generarNombresDominio(
  pronombres,
  adjetivos,
  sustantivos,
  acciones, 
  extensiones
);
console.log(nombresDominio);
