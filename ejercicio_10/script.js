export const persona = {
  nombre: "Jose",
  apellidos: "Marin",
  edad: 35,
  profesion: "Formador" ,
  ciudad: "Valencia",
  pais: "España"
};

const  fullName = persona => {
  const { nombre, apellidos } = persona;
  return `${nombre} ${apellidos}`;
}


console.log("Nombre completo:", fullName(persona));