// Arrays de opciones
const ligas = [
  "Liga BetPlay Dimayor",
  "Liga rofesional de Fútbol Argentina",
  "Liga de Primera Itaú",
  "LigaPro Ecuador",
  "Serie A Brazil",
  "La B Nacional de Argentina"
];

const posiciones = [
  "Campeones (primer lugar)",
  "Puestos de Libertadores (primeros 4 excepto al campeón)",
  "Puestos de Sudaméricana (del 5 al 7)",
  "Mitad de tabla (8 al 15)",
  "Descenso (los últimos 3)"
];

const expectativas = [
  "Ganar la liga y la Libertadores (solo se puede utilizar si tu equipo juega Libertadores)",
  "Gana triplete (solo se puede utilizar si tu equipo juega  Libertadores)",
  "Gana la liga",
  "No desciendas",
  "Gana la copa y cuídate del descenso",
  "Queda en puestos de la Libertadores",
  "Queda en puestos de Sudamericana"
];

const filosofias = [
  "Solo puedes fichar jóvenes menores de 24 años y no puedes gastarte más de la mitad del presupuesto",
  "Solo puedes fichar jugadores veteranos mayores de 30 años y no puedes gastar más de la mitad del presupuesto",
  "Solo puedes comprar 3 jugadores por temporada",
  "Solo puedes hacer fichajes bomba, o sea, jugadores top mundiales",
  "Solo puedes hacer 1 fichaje bomba cada 2 temporadas y tus fichajes tienen que ser una mezcla de veteranos y jóvenes"
];

const colores = [
  ["Rojo", "Blanco"],
  ["Negro"],
  ["Blanco"],
  ["Azul Marino"],
  ["Azul", "Blanco"],
  ["Verde", "Blanco"],
  ["Amarillo", "Negro"],
  ["Negro", "Blanco"],
  ["Blanco", "Negro"],
  ["Rojo", "Negro"],
  ["Azul", "Negro"],
  ["Verde", "Negro"],
  ["Blanco", "Azul"],
  ["Blanco", "Rojo"],
  ["Blanco", "Verde"],
  ["Blanco", "Amarillo"],
  ["Amarillo", "Rojo"],
  ["Amarillo", "Azul"],
  ["Rojo", "Azul"],
  ["Verde", "Amarillo"],
  ["Verde", "Rojo"],
  ["Negro", "Rojo"],
  ["Negro", "Azul"],
  ["Negro", "Verde"],
  ["Negro", "Amarillo"],
  ["Blanco", "Verde"],
  ["Rojo", "Amarillo"],
  ["Azul", "Amarillo"]
];
const nombresParte1 = [
  "Real",
  "Deportivo",
  "Atlético",
  "Club",
  "FC",
  "CA",
  "CF",
  "CD",
  "AC",
  "SC",
  "UC",
  "AD",
  "CSD",
  "CDA",
  "Nacional",
  "Juventud",
  "Estudiantes",
  "Universitario",
  "Municipal",
  "Independiente",
  "Libertad",
  "Progreso",
  "Regatas",
  "Sport",
  "Sportivo",
  "General",
  "Unión",
  "Nueva",
  "Vieja",
  "Metropolitanos",
  "Academia",
  "Asociación",
  "Centro",
  "Barrio",
  "Provincia",
  "Regional",
  "Atléticos Unidos",
  "Campestre",
  "Patriotas"
];

const nombresParte2 = [
  // Ciudades y lugares
  "Andes",
  "Patagonia",
  "Caribe",
  "Nevada",
  "Amazonas",
  "Pacífico",
  "Cordillera",
  "Altamira",
  "Santa Rosa",
  "Valle Verde",
  "Nueva Esperanza",

  // Animales
  "Leones",
  "Tiburones",
  "Panteras",
  "Águilas",
  "Cóndores",
  "Pumas",
  "Lobos",
  "Halcones",
  "Toros",
  "Jaguares",
  "Búfalos",

  // Eventos / Historia
  "Independencia",
  "Libertadores",
  "Revolución",
  "Ancestral",
  "Imperial",
  "Centenario",
  "Fundadores",
  "Legados",
  "Patriotas",

  // Elementos naturales
  "Eclipse",
  "Trueno",
  "Río Grande",
  "Montañas",
  "Llanos",
  "Tormenta",
  "Huracán",
  "Desierto",
  "Volcanes",
  "Viento Norte",
  "Union del valle",
  "Unidos",
  "Victoria",
  "Estrella",
  "Juvenil",
 "Sol Nascente",
 "Rio Dourado",
 "Serra Azul",
 "Porto Verde",
 "Bravos do Litoral",
 "Guaraná do Norte"

];

// Función para generar un modo carrera aleatorio
function generarModoCarrera() {
  const liga = ligas[Math.floor(Math.random() * ligas.length)];
  const posicion = posiciones[Math.floor(Math.random() * posiciones.length)];
  const expectativa = expectativas[Math.floor(Math.random() * expectativas.length)];
  const filosofia = filosofias[Math.floor(Math.random() * filosofias.length)];

  // Asignar los resultados a los elementos del DOM
  document.getElementById('liga').innerText = liga;
  document.getElementById('posicion').innerText = posicion;
  document.getElementById('expectativa').innerText = expectativa;
  document.getElementById('filosofia').innerText = filosofia;
}

// Función para generar un club nuevo
function generarClub() {
  const nombreEquipo = `${nombresParte1[Math.floor(Math.random() * nombresParte1.length)]} ${nombresParte2[Math.floor(Math.random() * nombresParte2.length)]}`;
  const liga = ligas[Math.floor(Math.random() * ligas.length)];
  const expectativa = expectativas[Math.floor(Math.random() * expectativas.length)];
  const filosofia = filosofias[Math.floor(Math.random() * filosofias.length)];
  const color1 = colores[Math.floor(Math.random() * colores.length)];
  const color2 = colores[Math.floor(Math.random() * colores.length)];
  const colorPortero = colores[Math.floor(Math.random() * colores.length)];

  // Asignar los resultados a los elementos del DOM
  document.getElementById('nombreEquipo').innerText = nombreEquipo;
  document.getElementById('ligaClub').innerText = liga;
  document.getElementById('expectativaClub').innerText = expectativa;
  document.getElementById('filosofiaClub').innerText = filosofia;
  document.getElementById('color1').innerText = color1;
  document.getElementById('color2').innerText = color2;
  document.getElementById('colorPortero').innerText = colorPortero;
}
// Arrays de jugadores (porteros, defensas, mediocampistas, delanteros)
const porteros = [
  "Keylor Navas", "Zack Steffen", "A. Noppert", "Sergio Rico", "Karius",
  "Andrada", "Hubert Idasiak", "Agustin Rossi (Por defecto)", "Santiago Rosa (Por defecto)"
];

const defensas = [
  "Anibal Chalá (Por defecto)", "Realpe (Por defecto)", "L. Cyborra (Por defecto)",
  "Galdames (Por defecto)", "Andres Reyes (Por defecto)", "N. Valentini (Por defecto)",
  "Laxalt (Por defecto)", "F. Ortega (Por defecto)", "Thiago Silva", "Savic", "Ramos",
  "Vinlof", "Fosu-mesah", "B. Williams"
];

const mediocampistas = [
  "E. Henrique", "Charles Petro", "Gedson F", "S. Cordova", "Carlos Alcaraz",
  "Riqui Puig", "J. Karlstrom", "Andres Cubas (Por defecto)", "Juan Sforza (Por defecto)",
  "Victor Cantillo (Por defecto)", "Gabriel Veiga (Por defecto)",
  "Nelson Palacio (Por defecto)", "Jaminton Campaz (Por defecto)", "Gerson (Por defecto)"
];

const delanteros = [
  "F. Mora (Por defecto)", "Roger Martinez (Por defecto)", "F. Martinez (Por defecto)",
  "Jordy Caicedo (Por defecto)", "C. Olivero (Por defecto)", "Kevin Agudelo (Por defecto)",
  "D. Gonzalez (Por defecto)", "Kevin Laguizamón (Por defecto)",
  "Luciano Gondou (Por defecto)", "Didier La Torre (Por defecto)", "Ciro Immobile",
  "Ben Yedder", "Aubameyang", "Firmino", "Emil Hojlund", "Carlos Vela",
  "Papu Gomez", "Riyad Mahrez", "Rafa Silva"
];

// Función para generar la plantilla de jugadores
function generarPlantilla() {
  const plantillaPorteros = getRandomPlayers(porteros, 3);
  const plantillaDefensas = getRandomPlayers(defensas, 6);
  const plantillaMediocampistas = getRandomPlayers(mediocampistas, 6);
  const plantillaDelanteros = getRandomPlayers(delanteros, 5);

  // Asignar los resultados a los elementos del DOM
  renderPlayersList('plantillaPorteros', plantillaPorteros);
  renderPlayersList('plantillaDefensas', plantillaDefensas);
  renderPlayersList('plantillaMediocampistas', plantillaMediocampistas);
  renderPlayersList('plantillaDelanteros', plantillaDelanteros);
}

// Función auxiliar para obtener jugadores aleatorios
function getRandomPlayers(array, count) {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Función auxiliar para renderizar la lista de jugadores
function renderPlayersList(elementId, players) {
  const ul = document.getElementById(elementId);
  ul.innerHTML = '';
  players.forEach(player => {
      const li = document.createElement('li');
      li.textContent = player;
      ul.appendChild(li);
  });
}