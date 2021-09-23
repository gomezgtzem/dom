// const title = document.getElementsByTagName("h1");
// title[0].innerHTML = "Titulo cambiado desde Javascript";

// // const texto = document.getElementById('text');
// // texto.innerHTML = 'Este texto esta escrito desde Javascript';
// // texto.style.background = 'blue';
// // texto.style.color = 'white';

// // console.log(texto);


// Obtiene un elemento por id
document.getElementById
// Obtiene todos los elementos de una clase y retorna un arreglo
document.getElementsByClassName
// Obtiene un elemento por nombre y devuelve un arreglo
document.getElementsByTagName

// Query selector engloba todos los elementos, ya sea que llames .clases, #IDs o etiquetas
const texto = document.querySelector('#texto');
texto.textContent = 'Estoy escribiendo desde el Javascript';

// Crear elementos html
const div = document.createElement('div');
const body = document.querySelector('body');
body.append(div);