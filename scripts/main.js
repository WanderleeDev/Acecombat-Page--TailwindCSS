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
const cardDescription = document.querySelectorAll('.cardDescription');
const gameCover = document.querySelectorAll('.gameCover');
//card review
const card = document.querySelectorAll('.cardReview');
const ladoA = document.querySelectorAll('.cardSideA');
const ladoB = document.querySelectorAll('.cardSideB');
//games pictures
const photo = document.querySelectorAll('.photoStyle');
const figcaptionPhoto = document.querySelectorAll('.figcaptionStyle');
const rotateValue = [1, 2, 3, 5, 6, 10, 12, 15, 25, 30];
//music 
const playMusic = document.getElementById('playMusic');
const myAudio = document.getElementById('myAudio');
const lineBar1 = document.querySelectorAll('.bar1') ;
const lineBar2 = document.querySelectorAll('.bar2') ;
const lineBar3 = document.querySelectorAll('.bar3') ;
let musicOn = false;
//btn details
const detailsBox = document.querySelectorAll('.detailsStyle');
const btnDetails = document.querySelectorAll('.btnDetails');

// función agregar dark mode
darkContainer.addEventListener("click",function(){
  //darkContainer.classList.remove("text-amber-300");
  darkContainer.classList.toggle("bg-sky-700");
  //darkContainer.classList.add("text-gray-700");
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

//funcion para transformar btn
function changeBtn() {
  for (const btn of btnDetails) {
    btn.addEventListener("click", function () {
      console.log("targe");
      btn.classList.add('rounded-50%','w-20','h-20','duration-500');
      btn.style.padding = "0px";
      btn.innerHTML = '<svg class="h-8 w-8 text-teal-500 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />  <polyline points="22 4 12 14.01 9 11.01" /></svg>';
    });
  }
}

//funcion para agrregar un evento (Alternar sombras)
function toggleShadow(target,propiedad) {
  target.classList.toggle(propiedad);
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

//Transformar btn al darle click
changeBtn();

//Dar sombras al elemento al pasar el mouse y quitarlo al retirar el mouse
for (let i = 0; i < cardDisc.length; i++) {
  cardDisc[i].addEventListener("mouseenter",function () {
    cardDescription[i].style.transform = 'translateY(0%)';
    gameCover[i].style.transform = 'translateY(0%)';
  });
  cardDisc[i].addEventListener("mouseleave",function () {
    cardDescription[i].style.transform = 'translateY(-100%)';
    gameCover[i].style.transform = 'translateY(-100%)';
  });
}
//
