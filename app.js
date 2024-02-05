let parafo = document.getElementById("respuesta");
let preguntas = document.getElementById('input');


let partesDePregunta = ["por que", "como", "cuando",  "Dónde",  "que","por quien","quienes", "cual","quienrs","cuales","cuantos","cuanto","De quién"
];

const ERROR = /[A-Z!@#$%^&*()_+?<>]/;





function botonR() {
    let textod = preguntas.value.trim();

    if (preguntas.value == "") {
        parafo.textContent = "as una pregunta"         
    } else if (partesDePregunta.some(part => textod.includes(part))){ //`Array.prototype.some()`: Este método prueba si al menos un elemento en el array cumple con la condición implementada por la función proporcionada. En este caso, la función es `(part => textod.startsWith(part))`y.String.prototype.includes()`: es para re si esite alguna palagra en todo el texto del usuario
        parafo.textContent = "no soy tan majico";
        borra()
    }else if (ERROR.test(preguntas.value)) {
        parafo.textContent = "solo puede usar minusculas sin caracteres espesiales";
        borra()
    } else {
        repuestas(preguntas)
    }
}

function repuestas(preguntas) {
    let randon = Math.floor(Math.random() * 24) + 1;
    let parafo = document.getElementById("respuesta");


    if (randon == 1) {
        parafo.textContent = "Mi respuesta es no."
        borra()
    } else if (randon == 2) {
        parafo.textContent = " Pregunta en otro momento"
        borra();
    } else if (randon == 3) {
        parafo.textContent = "No puedo predecirlo ahora."
        borra();
    } else if (randon == 4) {
        parafo.textContent = "probable mente "
        borra();
    } else if (randon == 5) {
        parafo.textContent = "telo por aseguro"
        borra();
    } else if (randon == 6) {
        parafo.textContent = "definitibamente no "
        borra();
    } else if (randon == 7) {
        parafo.textContent = " Es cierto"
        borra();
    } else if (randon == 8) {
        parafo.textContent = " no"
        borra();
    } else if (randon == 9) {
        parafo.textContent = "  Pregunta en otro momento."
        borra();
    } else if (randon == 10) {
        parafo.textContent = " Es decididamente así"
        borra();
    } else if (randon == 11) {
        parafo.textContent = " No puedo predecirlo ahora."
        borra();
    } else if (randon == 12) {
        parafo.textContent = "  vuelve a intentarlo.."
        borra();
    } else if (randon == 13) {
        parafo.textContent = " Las perspectivas no son buenas"
        borra();
    } else if (randon == 14) {
        parafo.textContent = " definitivamente"
        borra();
    } else if (randon == 15) {
        parafo.textContent = " No cuentes con ello."
        borra();
    } else if (randon == 16) {
        parafo.textContent = " Probablemente"
        borra();
    } else if (randon == 17) {
        parafo.textContent = "  Concéntrate y vuelve a preguntar."
        borra();
    } else if (randon == 18) {
        parafo.textContent = "  Mis fuentes me dicen que no."
        borra();
    } else if (randon == 19) {
        parafo.textContent = " Pregunta en otro momento."
        borra();
    } else if (randon == 20) {
        parafo.textContent = " Todo apunta a que sí."
        borra();
    } else if (randon == 21) {
        parafo.textContent = " ...."
        borra();
    } else if (randon == 22) {
        parafo.textContent = " eso es ilegal no."
        borra();
    } else if (randon == 23) {
        parafo.textContent = " amiga date cuenta ."
        borra();
    } else if (randon == 24) {
        parafo.textContent = " no pregunte tontera."
        borra();
    } else {
        parafo.textContent = " nooooooose."
        borra();
    }

}

function borra() {
    preguntas.value = ""
}