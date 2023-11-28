const alfabetList = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

const charSearch = prompt(`Elije una letra ${alfabetList}`);

const elemtSearch = alfabetList.find(e => e === charSearch.toLocaleUpperCase());

console.log(elemtSearch ?? "El elmento no se encuantra");

console.log("Longuitud del array ", alfabetList.length);

