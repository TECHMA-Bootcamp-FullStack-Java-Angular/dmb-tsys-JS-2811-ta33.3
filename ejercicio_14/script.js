import { receta, mostrarReceta } from "../ejercicio_13/script.js";

receta.gazpacho = {
      nombre: "Gazpacho",
      tiempoPreparacion: "20 minutos",
      ingredientes: [
          "Tomates",
          "Pepino",
          "Pimiento verde",
          "Cebolla",
          "Ajo",
          "Aceite de oliva",
          "Vinagre",
          "Sal",
          "Agua"
      ]

}
  
receta.tortillaPatata = {
      nombre: "Tortilla de Patata",
      tiempoPreparacion: "30 minutos",
      ingredientes: [
          "Patatas",
          "Huevos",
          "Cebolla",
          "Aceite de oliva",
          "Sal"
      ],
}


// Mostrar las recetas por consola
console.log("-".repeat(60));
mostrarReceta(receta.gazpacho);
console.log("-".repeat(60));
mostrarReceta(receta.tortillaPatata);
