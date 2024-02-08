let parafo = document.getElementById("respuesta");
let preguntas = document.getElementById('input');
let titulo = document.getElementById("h1");
let losdig = document.getElementById("losdig")



let preguNoAptas = ["por que", "como", "cuando",  "Dónde",  "que","por quien","quienes", "cual","quienrs","cuales","cuantos","cuanto","De quién"
];
let preguAmables = ["como estas","como te encuentra","como te a ido"]
let preguDeGroseras = ["te odio"]
const ERROR = /[A-Z!@#$%^&*()_+?<>]/;


parafo.style.display = "none"
losdig.style.display = "none"




function botonR() {
    let preguntas = document.getElementById('input'); 
    let textod = preguntas.value.trim();
    let parafo = document.getElementById("respuesta");


    if (preguntas.value == "") {
        parafo.textContent = "no mes as preguntado nada"    
       animacion()
    }else if (preguDeGroseras.some(part => textod.includes(part))){
        parafo.textContent = "yo igual ";
        borra()
        animacion()
    }else if (preguAmables.some(part => textod.includes(part))){ //`Array.prototype.some()`: Este método prueba si al menos un elemento en el array cumple con la condición implementada por la función proporcionada. En este caso, la función es `(part => textod.startsWith(part))`y.String.prototype.includes()`: es para re si esite alguna palagra en todo el texto del usuario
        parafo.textContent = "muy bien gracias";
        borra()
        animacion()
    
    }else if (preguNoAptas.some(part => textod.includes(part))){ 
        parafo.textContent = "no soy tan majico";
        borra()
        animacion()
    
    }else if (ERROR.test(preguntas.value)) {
        parafo.textContent = "solo puede usar minusculas sin caracteres espesiales";
        borra()
        animacion()
    } else {
        repuestas()
        animacion()
    }
}

function repuestas() {
    let randon = Math.floor(Math.random() * 6) + 1;
    let parafo = document.getElementById("respuesta");


    if (randon == 1) {
        parafo.textContent = "tabes"
        borra()
    } else if (randon == 2) {
        parafo.textContent = " si "
        borra();
    } else if (randon == 3) {
        parafo.textContent = "definitibanente."
        borra();
    } else if (randon == 4) {
        parafo.textContent = "probable mente no "
        borra();
    } else if (randon == 5) {
        parafo.textContent = "telo por seguro"
        borra();
    }else if (randon == 6) {
        parafo.textContent = "no"
        borra();
    } else {
        parafo.textContent = "preguntame luego"
        borra();
    }

}

function borra() {
 
    preguntas.value = ""

}


function animacion() {
    let titulo = document.getElementById("h1");
    let parafo = document.getElementById("respuesta");
    let losdig = document.getElementById("losdig")


    if (titulo.style.display === "none") {
        parafo.style.opacity = 0;
        setTimeout(function(){
          parafo.style.display = "none";
          titulo.style.display = "block";
          titulo.style.opacity = 1;
        },1000);
      } else {
        titulo.style.opacity = 0;
        losdig.style.display = "block"  
        setTimeout(function(){
          titulo.style.display = "none";
          parafo.style.display = "block";
          losdig.style.display = "none"
          parafo.style.opacity = 1;
        },1000);
        setTimeout(function(){
          parafo.style.opacity = 0;
          losdig.style.display = "block"
          setTimeout(function(){
            parafo.style.display = "none";
            titulo.style.display = "block";
            losdig.style.display = "none"
            titulo.style.opacity = 1;
          },1000);
        }, 8000);
        
      }
}

