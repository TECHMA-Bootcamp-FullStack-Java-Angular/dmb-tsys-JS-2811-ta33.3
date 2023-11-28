const participantesList = [ "Jordi", "Alejandro", "Toni", "Manel" , "Juan Carlos" , "Sergi" , "Marc"];

const [ganador, segundo, ...restoCompetidores] = participantesList;

console.log("Ganador:", ganador);
console.log("Segundo:", segundo);
console.log("Resto de competidores:", restoCompetidores);
