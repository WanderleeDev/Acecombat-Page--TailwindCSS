//btn dark mode
const btnDark = document.getElementById('btnDarkMode');
const darkContainer = document.getElementById('darkButtonContainer');
const rotar = document.getElementById('rotateImg');
const tagHtml = document.querySelector('html');

darkContainer.addEventListener("click",function(){
  darkContainer.classList.toggle("bg-sky-700");
  btnDark.classList.toggle("rotate-180");
  tagHtml.classList.toggle("dark");
});

//evento input
const inputContainer =  document.querySelectorAll('.inputContainer');

inputContainer.forEach(function(contenedor) {
  const labelStyleBasic = contenedor.querySelector('.labelStyleBasic');
  contenedor.addEventListener("click",function(){
    labelStyleBasic.classList.toggle("-translate-y-8");
    labelStyleBasic.classList.toggle("text-white");
  });
});
