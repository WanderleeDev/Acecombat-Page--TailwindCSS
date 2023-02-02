//btn dark mode
const btnDark = document.getElementById('btnDarkMode');
const darkContainer = document.getElementById('darkButtonContainer');
const rotar = document.getElementById('rotateImg');
const tagHtml = document.querySelector('html');
//btn mobile
const btnMobile = document.getElementById('btnMobile') ;
const menuMobile = document.getElementById('menuMobile');
//label form
const inputContainer =  document.querySelectorAll('.inputContainer');

// función agregar dark mode
darkContainer.addEventListener("click",function(){
  darkContainer.classList.toggle("bg-sky-700");
  btnDark.classList.toggle("rotate-180");
  tagHtml.classList.toggle("dark");
});

//función para aniamr el label de los formularios
inputContainer.forEach(function(contenedor) {
  const labelStyleBasic = contenedor.querySelector('.labelStyleBasic');
  contenedor.addEventListener("click",function(){
    labelStyleBasic.classList.toggle("-translate-y-8");
    labelStyleBasic.classList.toggle("text-white");
  });
});

btnMobile.addEventListener("click",function() {
  menuMobile.classList.toggle("translate-x-0");
  menuMobile.classList.toggle("pointer-events-auto");
});
