function dividirParesImpares(arrayOriginal) {
  const pares = []
  const impares = []

  for (const numero of arrayOriginal) {
    numero % 2 === 0 ? pares.push(numero) : impares.push(numero)
  }

  return { pares, impares }
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


const { pares, impares } = dividirParesImpares(numeros)

console.log('Números pares:', pares)
console.log('Números impares:', impares)
console.log('Números concatenados:', pares.concat(impares))
