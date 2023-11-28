class Receta {
  constructor(nombre, tiempoPreparacion, ingredientes) {
    this.nombre = nombre;
    this.tiempoPreparacion = tiempoPreparacion;
    this.ingredientes = ingredientes;
  }
}

class Recetas {
  constructor() {
    this.listaRecetas = [];
  }

  agregarReceta(receta) {
    this.listaRecetas.push(receta);
  }
  
  mostrarRecetas() {
    this.listaRecetas.forEach(receta => {
      console.log("Nombre de la receta:", receta.nombre);
      console.log("Tiempo de preparación:", receta.tiempoPreparacion);
      console.log("Ingredientes:");
  
      receta.ingredientes.forEach(ingrediente => {
        console.log(`- ${ingrediente}`);
      });
      console.log("-".repeat(60));
    });
  }
}


const paella = new Receta(
  "Paella",
  "1 hora y media",
  ["Arroz", "Pollo", "Conejo", "Judía verde", "Pimiento rojo", "Tomate", "Aceite de oliva", "Azafrán", "Caldo de pollo", "Sal"]
);

const gazpacho = new Receta(
  "Gazpacho",
  "20 minutos",
  ["Tomates", "Pepino", "Pimiento verde", "Cebolla", "Ajo", "Aceite de oliva", "Vinagre", "Sal", "Agua"]
);

const tortillaPatata = new Receta(
  "Tortilla de Patata",
  "30 minutos",
  ["Patatas", "Huevos", "Cebolla", "Aceite de oliva", "Sal"]
);


const recetasInstancia = new Recetas();

recetasInstancia.agregarReceta(paella);
recetasInstancia.agregarReceta(gazpacho);
recetasInstancia.agregarReceta(tortillaPatata);

recetasInstancia.mostrarRecetas();
