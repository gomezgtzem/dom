// const $btn = document.querySelector('#btn');
// $btn.addEventListener('click', () =>{
//     console.log('Me presionaste')
// });

function agregarElemento() {
  let ul = document.getElementById("list");
  let li = document.createElement("li");
  li.appendChild(document.createTextNode("Nuevo elemento"));
  ul.appendChild(li);
}