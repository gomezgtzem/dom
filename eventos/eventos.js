// Es buena practica referirnos a las variables con $ para denotar que hablamos de un elemento de html
const $btn = document.querySelector('#btn');
$btn.addEventListener('click', () =>{
    console.log('Me presionaste')
});

const $inpText = document.querySelector('#text');
$inpText.addEventListener('keydown', () =>{
    console.log('Escribiste algo')
});

$inpText.addEventListener('keydown', (e) =>{
  console.log(e.target.value);
});