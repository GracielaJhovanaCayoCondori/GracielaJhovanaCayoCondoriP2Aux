// PREGUNTA 2:
// Escriba un programa que reciba una lista de nombres de variables escritos en
// underscore_case y convertirlos en camelCase.
// underscore_case
// first_name
// Some_Variable
//  calculate_AGE
// delayed_departure
// IMPORTANTE: La entrada de arriba es UNA sola cadena, NO es un objeto, NO son
// varias cadenas, y TAMPOCO son varias variables.
// Debe producir la siguiente salida:
// underscoreCase ✅
// firstName ✅✅
// someVariable ✅✅✅
// calculateAge ✅✅✅✅
// delayedDeparture ✅✅✅✅✅


const camelcase = (palabra) => {
   
   for (let nuevapalabra of palabra){
      const [primero, segundo] = nuevapalabra.toLowerCase().trim().split('_');
      
};
