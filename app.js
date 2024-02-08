let parafo = document.getElementById("respuesta");
let preguntas = document.getElementById('input');
let titulo = document.getElementById("h1");
let losdig = document.getElementById("losdig")



let preguNoAptas = ["por que", "como", "cuando",  "dónde",  "que","por quien","quienes", "cual","quienrs","cuales","cuantos","cuanto","de quién"
];
let preguAmables = ["como estas","como te encuentra","como te a ido"]
let preguDeGroseras = ["te odio","te amo", "te matare"]
let saludo = ["hola"]
const ERROR = /[A-Z!@#$%^&*()_+?<>]/;


parafo.style.display = "none"
//losdig.style.display = "none"





function botonR() {
    let preguntas = document.getElementById('input'); 
    let textod = preguntas.value.trim();
    let parafo = document.getElementById("respuesta");
    

    if (preguntas.value == "") {
        parafo.textContent = "NO ME AS PREGUNTADO NADA"    
        alerta()
    } else if (saludo.some(part => textod.includes(part))){ //`Array.prototype.some()`: Este método prueba si al menos un elemento en el array cumple con la condición implementada por la función proporcionada. En este caso, la función es `(part => textod.startsWith(part))`y.String.prototype.includes()`: es para re si esite alguna palagra en todo el texto del usuario
        parafo.textContent = `${convertirAMayusculas()} COMO ESTAS, EN QUE TE PUEDO AYUDAR`;
        borra()
        alerta()
    
    
    }else if (preguDeGroseras.some(part => textod.includes(part))){ //`Array.prototype.some()`: Este método prueba si al menos un elemento en el array cumple con la condición implementada por la función proporcionada. En este caso, la función es `(part => textod.startsWith(part))`y.String.prototype.includes()`: es para re si esite alguna palagra en todo el texto del usuario
        parafo.textContent = `YO TANBIEN  ${convertirAMayusculas()}`;
        borra()
        animacion()
    
    
    }else if (preguAmables.some(part => textod.includes(part))){ //`Array.prototype.some()`: Este método prueba si al menos un elemento en el array cumple con la condición implementada por la función proporcionada. En este caso, la función es `(part => textod.startsWith(part))`y.String.prototype.includes()`: es para re si esite alguna palagra en todo el texto del usuario
        parafo.textContent = "MUY BIEN GRACIAS";
        borra()
        animacion()
    
    }else if (preguNoAptas.some(part => textod.includes(part))){ 
        parafo.textContent = "NO SOY TAN MAJICA";
        borra()
        animacion()
    
    }else if (ERROR.test(preguntas.value)) {
        parafo.textContent = "solo puede usar minusculas sin caracteres espesiales";
        borra()
        alerta() 
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
    let audio = new Audio('sonidos/sonidos majicos.mp3');
    audio.volume = 0.1;

    if (titulo.style.display === "none") {
        parafo.style.opacity = 0;
        setTimeout(function(){
          parafo.style.display = "none";
          titulo.style.display = "block";
          titulo.style.opacity = 1;
        },2000);
      } else {
        titulo.style.opacity = 0;
        
        losdig.style.display = "block"  
        setTimeout(function(){
          titulo.style.display = "none";
          parafo.style.display = "block";
          audio.play()
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

function convertirAMayusculas() {
    
    parafo.textContent = preguntas.value.toUpperCase();
    return parafo.textContent; // Devuelve el texto en mayúsculas
}
function alerta() {
    titulo.style.display = "none";
    parafo.style.display = "block" 
    setTimeout(function(){ 
        parafo.style.display = "none" 
        titulo.style.display = "block";

      },5000);
}
      