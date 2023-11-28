let receta = {
  paella: {
    nombre: "Paella",
    tiempoPreparacion: "1 hora y media",
    ingredientes: [
        "Arroz",
        "Pollo",
        "Conejo",
        "Judía verde",
        "Pimiento rojo",
        "Tomate",
        "Aceite de oliva",
        "Azafrán",
        "Caldo de pollo",
        "Sal"
    ]
  }
}



function mostrarReceta(receta) {
  const { nombre, tiempoPreparacion, ingredientes } = receta;

  console.log("Nombre de la receta:", nombre);
  console.log("Tiempo de preparación:", tiempoPreparacion);
  console.log("Ingredientes:");
  
  ingredientes.forEach(ingrediente => {
      console.log(`- ${ingrediente}`);
  });
}

mostrarReceta(receta.paella)

export { receta , mostrarReceta};
