let parafo = document.getElementById("respuesta");
let preguntas = document.getElementById('input');


//listas
const MIENBROS = ["padre", "madre", "hermano", "hermana", "tio", "tia", "primo", "prima", "abuelo", "abuela", "bisabuelo", "bisabuela", "sobrina", "sobrino", "hermanastra", "hermanastro", "padrastro", "madrastra", "novia", "novio", "esposo", "esposa", "bebe", "suegro", "suegra", "nuera", "yerno", "hijo", "hija", "familia"];
const MASCOTAS = ["perro", "gato", "peces", "hamster", "pájaros", "ratones", "ratas", "cobayas", "serpientes", "conejo", "tortuga",
    "hurón", "chinchilla", "dragón barbudo", "loro", "agapornis","mascota"];
const ANIMALES = ["león", "tigre", "elefante", "rinoceronte", "hipopótamo", "jirafa", "cebra", "oso", "lobo", "zorro", "conejo", "ardilla", "ratón", "ciervo", "canguro", "koala", "panda", "pingüino", "foca", "ballena", "delfín", "tiburón", "pulpo", "medusa", "cangrejo", "langosta", "mariposa", "abeja", "mosquito", "hormiga", "araña", "escorpión", "serpiente", "lagarto", "tortuga", "cocodrilo", "águila", "halcón", "búho", "cuervo", "gorrión", "paloma", "pavo", "gallina", "pato", "cisne", "flamenco", "loro", "canario", "papagayo", "tucán", "colibrí"];
const LISTA = ["como me llamo", "donde vivo", "donde vivo yo"];



const ERROR = /[A-Z!@#$%^&*()_+?<>]/;


MIENBROS.forEach((litas) => { //forEach: Este es un método que se utiliza para iterar sobre cada elemento de un array. En este caso, el array es PRUEBA.
    preguntasNoAptas(litas)
});
MASCOTAS.forEach((litas) => { //forEach: Este es un método que se utiliza para iterar sobre cada elemento de un array. En este caso, el array es PRUEBA.
    preguntasNoAptas(litas)
});
ANIMALES.forEach((litas) => { //forEach: Este es un método que se utiliza para iterar sobre cada elemento de un array. En este caso, el array es PRUEBA.
    preguntasNoAptas(litas)
});
function preguntasNoAptas(litas) {
    LISTA.push(`como se llama mi ${litas}`);
    LISTA.push(`como se llama el esposo mi ${litas}`);
    LISTA.push(`donde vive mi ${litas}`);
    LISTA.push(`donde vive el esposo de mi ${litas}`);
    LISTA.push(`donde come mi ${litas}`);
    LISTA.push(`donde come el esposo de mi ${litas}`);
    LISTA.push(`donde come el ${litas}`);
    LISTA.push(`donde vive el ${litas}`);
}
console.log(LISTA)
function botonR() {

    if (preguntas.value == "") {
        parafo.textContent = "as una pregunta" //             /lista        / verifica el texto del usuario
    } else if (LISTA.includes(preguntas.value)) { //La función lidts.includes() verifica si un elemento está dentro de una lista.
        parafo.textContent = "no soy tan majico";
        borra()
    } else if (ERROR.test(preguntas.value)) {
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