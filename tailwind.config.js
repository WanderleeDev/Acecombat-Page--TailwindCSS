const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}","./src/js/main.js"],
  theme: {
    extend: {
      //aqui se extienden o agregaran las propiedades, se especifica la propiedad en este caso font = fontfamily, luego ponemos un nombre y su valor.
      fontFamily: {
        'inter':'"Inter",ui-sans-serif, system-ui, sans-serif'
      },
      fontFamily:{
        'secularOne':'"Secular One", ui-sans-serif, system-ui, sans-serif'
      },

      backgroundImage:{
        'banner': "url('/src/aseets/banner.webp')",
      },
      backgroundPosition:{
        'center': 'center',
        'top': 'top',
        'bottom': 'bottom',
        'right': 'rigth',
        'left': 'left',
      },

      //nuevos animaciones creadas
      keyframes:{
        fly:{
          '0%':{width: '25%', opacity: '0'},
          '50%':{opacity: '0.5', transform: 'translateY(8rem)'},
          '100%':{width: '80%', opacity: '1', transform: 'translateY(8rem)'},
        },
        upDown:{
          '0%':{transform: 'translateX(0rem)'},
          '35%':{transform: 'translateX(-1rem)'},
          '70%':{transform: 'translateX(1rem)'},          
          '100%':{transform: 'translateX(0rem)'},          
        },
      },

      //usando las aniamciones creadas las agragamos a animation
      animation:{
        upDown:'upDown 5s linear infinite 2s',
        fly: 'fly 3s linear forwards',
      },
    },
  },

  //En plugin crearemos conjuntos de estilos al igual que @apply aqui se puede ser mas complejo ya que permite usar todas las proiedades css
  plugins: [
    plugin(function({addComponents}){
      //addComponents es un objeto que tendra las propidades de un elemento o bloque, puedes separalos por varios objetos para tenerlo más organizado

      //objeto para botones:
      addComponents({
        //btn con estilos base
        '.btn':{
          padding: '0.5rem 1rem',
          borderRadius: '0.5rem',
          fontWeight: '600',
        },
        //capa de estilos para btn base con animación
        '.btn-red':{
          backgroundColor: '#e3342f',
          color: '#fff',
          '&:hover':{
            backgroundColor: '#cc1f1a50',
          },
        },
      });

      //objeto con estilos para  titulos
      addComponents({
        '.titleBase':{
          fontSize: '3rem',
          color: 'cornflowerblue',
          fontWeight: '900',
          padding: '2rem',
        },
        '.titleScale':{
          transition: '0.3s linear',
          '&:hover':{
            transform:'scale(0.9)',
          },
        },
      });

    })
  ],
}
//PD: no es buena práctica hacer componentes de esta forma para eso tenemos la directiva @tailwind components, aún asi s bueno tenerlo presente.
//Se usa Plugins en general para extender las utilidades importando librerias.