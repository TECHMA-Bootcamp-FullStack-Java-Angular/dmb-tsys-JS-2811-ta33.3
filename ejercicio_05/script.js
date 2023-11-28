function intercalarArrays(arrayUno, arrayDos) {
  const resultado = [];

  for (let i = 0; i < arrayUno.length; i++) {
      resultado.push(arrayUno[i]);
      resultado.push(arrayDos[i]);
  }

  arrayUno.length = 0;
  arrayDos.length = 0;

  return resultado;
}

const arrayUno = [1, 2, 3];
const arrayDos = [4, 5, 6];

console.log("Array 1 original" , arrayUno);
console.log("Array 2 original" , arrayDos);
console.log("Resultado intercalado:",  intercalarArrays(arrayUno, arrayDos));
console.log("Array Uno después de la intercalación y vaciarlo:", arrayUno);
console.log("Array Dos después de la intercalación y vaciarlo:", arrayDos);
  