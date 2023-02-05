//btn dark mode
const btnDark = document.getElementById('btnDarkMode');
const darkContainer = document.getElementById('darkButtonContainer');
const rotar = document.getElementById('rotateImg');
const tagHtml = document.querySelector('html');
//btn mobile
const btnMobile = document.getElementById('btnMobile');
const menuMobile = document.getElementById('mobile');
//label form
const inputContainer =  document.querySelectorAll('.inputContainer');
//card disc
const btnCardDisc = document.querySelectorAll('.btnCardDisc');
const cardDisc = document.querySelectorAll('.cardDisc');
const cardDiscSideA = document.querySelectorAll('.cardDiscSideA');
const cardDiscSideB = document.querySelectorAll('.cardDiscSideB');
//card review
const card = document.querySelectorAll('.cardReview');
const ladoA = document.querySelectorAll('.cardSideA');
const ladoB = document.querySelectorAll('.cardSideB');
//games pictures
const photo = document.querySelectorAll('.photoStyle');
const figcaptionPhoto = document.querySelectorAll('.figcaptionStyle');
// función agregar dark mode
darkContainer.addEventListener("click",function(){
  darkContainer.classList.toggle("bg-sky-700");
  btnDark.classList.toggle("rotate-180");
  tagHtml.classList.toggle("dark");
});

//función para animar el label de los formularios
inputContainer.forEach(function(contenedor) {
  const labelStyleBasic = contenedor.querySelector('.labelStyleBasic');
  contenedor.addEventListener("click",function(){
    labelStyleBasic.classList.toggle("");
    labelStyleBasic.classList.toggle("text-white");
  });
});

//funcion para mostrar la barra mobile
btnMobile.addEventListener("click", function () {
  menuMobile.classList.toggle("hidden");
});

//función agregar estilos
function addStyle(objetivo1, objetivo2) {
  objetivo1.style.transform = 'perspective(600px) rotateY(180deg)';
  objetivo2.style.transform = 'perspective(600px) rotateY(360deg)';
}

//Función para retirar estilos
function removeStyle(objetivo1, objetivo2) {
  objetivo1.style.transform = 'perspective(600px) rotateY(0deg)';
  objetivo2.style.transform = 'perspective(600px) rotateY(180deg)';
}

//función girar card al pasar el mouse (agrega + remover estilos)
function girarCard(card,objetivo1,objetivo2) {
  card.addEventListener("mouseenter", function () {
    addStyle(objetivo1,objetivo2);
  });
  card.addEventListener("mouseleave",function () {
    removeStyle(objetivo1,objetivo2);
  });
}

//función para agregar una clase al hacer click
function mostarCardB(parametro, objetivo1) {
  parametro.addEventListener("click",function () {
    objetivo1.classList.toggle('translate-x-full');
  });
}

//efecto hover en card de valoración
for (let i = 0; i < card.length; i++) {
  girarCard(card[i], ladoA[i], ladoB[i]);
}
//Mostara portada del juego
for (let i = 0; i < btnCardDisc.length; i++) {
  mostarCardB(btnCardDisc[i],cardDiscSideB[i]);
}
//Hacer caer foto 
for (let i = 0; i < photo.length; i++) {
  photo[i].addEventListener("click",function () {
    photo[i].classList.add('animate-caer');
  });
}
//Rotar figcapton de las fotos
for (let i = 0; i < figcaptionPhoto.length; i++) {
  let param = Math.round(Math.random()*35);
  while (!(param === 1 || param === 2 || param === 3 || param === 6 || param === 12 || param === 20 || param === 30)) {
    param = Math.round(Math.random()*35);
  }
  figcaptionPhoto[i].classList.add('-skew-y-' + param);
}
