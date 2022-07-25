// Poniendo a prueba lo q aprendí ayer: piedra papel o tijera

// Alternativa 1: IF / IF ELSE / ELSE

var jugador = "piedra";
var computador = "tijera";

if (jugador === "piedra" && computador === "tijera") {
    console.log (`Ganaste con ${jugador} sobre ${computador}`)
}

else if (jugador === "papel" && computador === "piedra") {
    console.log (`Ganaste con ${jugador} sobre ${computador}`)
}

else if (jugador === "tijera" && computador === "papel") {
    console.log (`Ganaste con ${jugador} sobre ${computador}`)
}

else {
    console.log (`Perdiste con ${jugador} contra ${computador}`)
}



// Alternativa 2: SWITCH

var jugador = "piedra";
var computador = "tijera";

switch (true) {
    case (jugador === "piedra" && computador === "tijera"):
        console.log (`Ganaste con ${jugador} sobre ${computador}`);
        break;

    case (jugador === "papel" && computador === "piedra"):
        console.log (`Ganaste con ${jugador} sobre ${computador}`);
        break;

    case (jugador === "tijera" && computador === "papel"):
        console.log (`Ganaste con ${jugador} sobre ${computador}`);
        break;

    default:
        console.log (`Perdiste con ${jugador} contra ${computador}`)
}

