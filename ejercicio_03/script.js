let arrayExercise = ["DOM", "BOM", "Funciones", "Arrays"];
console.log("Array original -> ", arrayExercise.join(", "));

arrayExercise.splice(arrayExercise.indexOf("DOM"), 1, "Objetos")
console.log("Eliminar 'DOM' y añadir 'Objetos' -> ", arrayExercise.join(", "));

arrayExercise.splice(arrayExercise.indexOf("Arrays"), 1, "ArraysDifíciles")
console.log("Eliminar 'Arrays' y añadir 'ArraysDifíciles' -> ", arrayExercise.join(", "));

console.log("Copia de los últimos dos elementos ->",  arrayExercise.slice(-2).join(", "));

console.log("Índice de 'Funciones'->", arrayExercise.indexOf("Funciones"));

