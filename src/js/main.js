//btn dark mode
const btnDark = document.getElementById('btnDarkMode');
const darkContainer = document.getElementById('darkButtonContainer');
const rotar = document.getElementById('rotateImg');

darkContainer.addEventListener("click",function(){
  darkContainer.classList.toggle("bg-sky-700");
  btnDark.classList.toggle("rotate-180");
});