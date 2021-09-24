const input = document.querySelector("#age");
const texto = document.querySelector("#texto");
const getAge = () => {
  if (parseInt(input.value) > 17) {
    texto.textContent = "Eres mayor de edad";
  }else{
    texto.textContent = "Eres menor de edad";
  }
};
