const personas = [
  { nombre: "Jose Marin", edad: 35, ciudad: "Valencia" },
  { nombre: "Manel Castellví", edad: 21, ciudad: "Torredembarra" },
  { nombre: "Jordi Mallafré", edad: 28, ciudad: "Tarragona" }
];

function mostrarPropiedades(objetos, propiedad) {
  objetos.forEach(persona => {
      console.log(`${persona.nombre} -> ${propiedad}: ${persona[propiedad]}`);
  });
}

mostrarPropiedades(personas, "ciudad");
console.log("-".repeat(60) );
mostrarPropiedades(personas, "edad");