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
        'banner': "url('https://www.dropbox.com/s/vn1j7cxn5bti8ps/banner.png?raw=1')",
        'logo': "url('https://www.dropbox.com/s/2v4osqi9ee5jqeu/pngegg.png?raw=1')",
      },
      backgroundPosition:{
        'center': 'center',
        'top': 'top',
        'bottom': 'bottom',
        'right': 'rigth',
        'left': 'left',
      },

      zIndex:{
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
      },

      flexBasis:{
        '16rem': '16rem',
      },

      width:{
        '2400': '2400%',
      },

      //nuevos animaciones creadas
      keyframes:{
        fly:{
          '0%':{width: '25%', opacity: '0'},
          '50%':{width: '35%', opacity: '0.5', transform: 'translateY(8rem)'},
          '100%':{width: '70%', opacity: '1', transform: 'translateY(8rem)'},
        },

        upDown:{
          '0%':{transform: 'translateX(0rem)'},
          '35%':{transform: 'translateX(-1rem)'},
          '70%':{transform: 'translateX(1rem)'},          
          '100%':{transform: 'translateX(0rem)'},          
        },
        rotateY:{
          '0%':{transform: 'rotateY(0deg)'},
          '100%':{transform: 'rotateY(360deg)'},
        },
      },

      //usando las aniamciones creadas las agregamos a animation
      animation:{
        upDown:'upDown 5s linear infinite 2s',
        fly: 'fly 3s linear forwards',
        rotateY: 'rotateY 3s linear infinite'
      },
    },
  },

  //En plugin crearemos conjuntos de estilos al igual que @apply aqui se puede ser mas complejo ya que permite usar todas las propiedades css
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
//PD: no es buena práctica hacer componentes de esta forma para eso tenemos la directiva @tailwind components, aún asi es bueno tenerlo presente.
//Se usa Plugins en general para extender las utilidades importando librerias.