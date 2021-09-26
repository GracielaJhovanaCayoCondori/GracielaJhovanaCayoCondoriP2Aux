//PREGUNTA 1:
// Supongamos que estamos creando una aplicación de apuestas de fútbol.
// Los datos los obtenemos de un servicio web, los cuales son los siguientes:
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};
// Sus tareas:
// 1. Cree un array de jugadores para cada equipo (nombre a las variables como
// 'players1' y 'players2')

const [players1 , players2] =  game.players;
console.log("pregunta1");
console.log([players1,players2]);

// 2. El primer jugador en cualquier conjunto de jugadores es el portero y los demás
// son jugadores de campo. Para el Bayern de Múnich (team 1) cree una variable
// 'gk' con el nombre del portero y un array 'fieldPlayers' con los 10 restantes
// jugadores de campo

const [gk , ...fieldPlayers] = players1;
console.log("pregunta2");
console.log([gk , fieldPlayers]);

// 3. Cree una matriz 'allPlayers' que contenga a todos los jugadores de ambos
// equipos (22 jugadores)

const allPlayers = [...players1,...players2];
console.log("pregunta3");
console.log(allPlayers);

// 4. Durante el partido, el Bayern de Múnich (team 1) utilizó 3 jugadores suplentes.
// Así que crea un nuevo array ('players1Final') que contiene todos los jugadores
// originales del equipo1 más 'Thiago', 'Coutinho' y 'Perisic'

const players1Final = [ ...players1,'Thiago', 'Coutinho','Perisic'];
console.log("pregunta4");
console.log(players1Final);

// 5. Basado en el objeto game.odds, cree una variable para cada cuota (llamada
// 'team1', 'draw' y 'team2')

const {team1, x:draw ,team2 } = game.odds;
console.log("pregunta5");
console.log({team1, draw, team2});

// 6. Cree una función ('printGoals') que reciba un número arbitrario de nombres de
// jugadores (no un array) e imprime cada uno de ellos en la consola, junto con el
// número de goles que marco cada uno (pasar como argumento solo nombres de
// jugadores que hayan marcado al menos un gol, revise los datos del objeto ‘game’
// para encontrar la información que le sirva).

const printGoals = (...players) => {
    console.log("pregunta6");
    for(let [index, value] of game.scored.entries())
    console.log(` ${value} marco ${index + 1}  gol(s)`);
};
printGoals();

// 7. En las aplicaciones de apuestas es más probable que gane el equipo con la
// cuota más baja. Imprima en la consola que equipo es más probable que gane,
// sin usar una declaración if/else o el operador ternario.
console.log("pregunta7");
team1 < team2 ? console.log(" team 1 es el equipo ganador con: ", team1) : console.log("team 2 es el equipo ganador con: ",team2) 

// 8. Use un bucle para poder calcular la cuota (odd) promedio y mostrarlo en la
// consola
let sumatoria = 0;
const odds = Object.values(game.odds);
for (let cuotaodd of odds ) {
   sumatoria +=cuotaodd;
}; 
const promedio =sumatoria / odds.length;
console.log("pregunta8");
console.log("el promedio es: ",promedio);
// 9. Cree una función que devuelva un objeto que contenga los nombres de los
// jugadores que anotaron goles, pero como PROPIEDADES, y el número de goles
// como VALORES. Por ejemplo, con los datos obtenidos arriba el objeto se verá
// como:

console.log("pregunta9")
const goles = 
{
    Gnarby: 1,
    Hummels: 1,
    Lewandowski: 2
}
for (let [propiedad, valor] of Object.entries(goles)) {
    console.log(`la propiedad ${propiedad} tiene el valor de ${valor}`);
    }

//10. Tome en cuenta los siguientes datos:
const gameEvents = new Map([
    [17, 'GOAL'],
    [36, 'Substitution'],
    [47, 'GOAL'],
    [61, 'Substitution'],
    [64, 'Yellow card'],
    [69, 'Red card'],
    [70, 'Substitution'],
    [72, 'Substitution'],
    [76, 'GOAL'],
    [80, 'GOAL'],
    [92, 'Yellow card'],
]);
console.log("pregunta10")
// - Cree una funcion que analice los datos y muestre en la consola un mensaje como
// este: “Un evento ocurrió, en promedio, cada 9 minutos”
console.log("pregunta10-1")
const tiempo = [...gameEvents.keys()].pop();
console.log(`promedio cada 9min ${tiempo / gameEvents.size} min`);

// - Recorra la variable “gameEvents” y muestre cada elemento en la consola
// señalando si fue el primer o el segundo tiempo, algo como esto:
//“[PRIMER TIEMPO] 17: GOAL”
console.log("pregunta10-2")
for (let [time, event] of gameEvents){
    const primertiempo = time <= 45 ? "PRIMER" : "SEGUNDO";
    console.log(`[${primertiempo} TIEMPO] ${time}:${event}`);
};
const main = () => {
    
    
   };  
export default main;