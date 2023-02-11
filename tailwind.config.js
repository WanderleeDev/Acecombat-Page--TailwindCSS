const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}","./src/js/main.js"],
  theme: {
    //darkMode: 'class',
    extend: {
      //aqui se extienden o agregaran las propiedades, se especifica la propiedad en este caso font = fontfamily, luego ponemos un nombre y su valor.
      fontFamily:{
        'Orbitron': '"Orbitron", ui-sans-serif, system-ui, sans-serif'
      },
      
      backgroundImage:{
        'banner': "url('https://www.dropbox.com/s/vn1j7cxn5bti8ps/banner.png?raw=1')",
        'banner-2': "url('https://img.freepik.com/fotos-premium/fondos-cielo-nocturno-estrellas-luna-nubes-navidad_180633-4785.jpg')",
        'logo': "url('https://www.dropbox.com/s/2v4osqi9ee5jqeu/pngegg.png?raw=1')",
        'logo2': "url('https://www.dropbox.com/s/llfty3xusf7s3q6/logo-black%20%281%29.png?raw=1')",
        'nubeMacro': "url('https://www.dropbox.com/s/gewkktq2w2n4jo9/macro-nube.png?raw=1')",
        'portadaDisc1': "url('https://www.dropbox.com/s/f13fg5whv5fr36z/portada2.jpg?raw=1')",
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
        '500': '500%',
      },
      
      height:{
        '1pxh': '2px',
      },

      borderRadius:{
        '50%': '50%',
      },

      screens:{
        'xxs': '336px'
      },

      borderWidth:{
        '1': '1px',
      },

      spacing:{
        '5vh': '5vh',
        '10vh': '10vh',
        '20vh': '20h',
        '30vh': '30vh',
        '40vh': '40vh',
        '50vh': '50vh',
        '60vh': '60vh',
        '70vh': '70vh',
        '80vh': '80vh',
        '90vh': '90vh',
        '100vh': '100vh',
      },

      skew:{
        '5': '5deg',
        '10': '10deg',
        '15': '15deg',
        '20': '20deg',
        '30': '30deg',
        '35': '35deg',
        '40': '40deg',
        '50': '50deg',
        '60': '60deg',
        '70': '70deg',
        '90': '90deg',
        '100': '100deg',
        '110': '110deg',
        '120': '120deg',
        '130': '130deg',
        '140': '140deg',
      },

      rotate:{
        '5': '5deg',
        '10': '10deg',
        '15': '15deg',
        '25': '25deg',
        '30': '30deg',
        '35': '35deg',
        '40': '40deg',
      },

      //nuevos animaciones creadas
      keyframes:{
        fly:{
          '0%':{width: '25%', opacity: '0'},
          '50%':{width: '35%', opacity: '0.5', transform: 'translateY(8rem)'},
          '100%':{width: '70%', opacity: '1', transform: 'translateY(8rem)'},
        },
        fly2:{
          '0%':{width: '25%', opacity: '0'},
          '50%':{width: '35%', opacity: '0.5', transform: 'translateY(8rem)'},
          '100%':{width: '40%', opacity: '1', transform: 'translateY(8rem)'},
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
        caer:{
          '0%':{transform: 'translateY(0rem) rotate(0deg)', opacity:'1'},
          '100%':{transform: 'translateY(24rem) rotate(180deg)', opacity:'0'},
        },
        moveTitle:{
          '0%':{borderLeftWidth: '0vw'},
          '30%':{borderLeftWidth: '20vw'},
          '60%':{borderLeftWidth: '44vw' },
          '100%':{borderLeftWidth: '44vw', borderColor: 'transparent', fontSize: '1.5rem'},
        },
        musicBar:{
          '0%':{height: '0.25rem'},
          '20%':{height: '1rem'},
          '40%':{height: '1.5rem' },
          '60%':{height: '0.25rem'},
          '80%':{height: '1.2rem'},
          '100%':{height: '0.25rem'},
        },
        shadowMove:{
          '0%': {textShadow:'1px -1px 0 #c2c2c2;'},
          '25%': {textShadow:'-1px -1px 0 #242424;'},
          '50%': {textShadow:'-1px 1px 0 #9d9d9d;'},
          '75%': {textShadow:'1px 1px 0 #242424'},
          '100%': {textShadow:'1px -1px 0 #c2c2c2;'},
        },
          

      },

      //usando las aniamciones creadas las agregamos a animation
      animation:{
        upDown:'upDown 5s linear infinite 2s',
        fly: 'fly 3s linear forwards',
        fly2: 'fly2 3s linear forwards',
        rotateY: 'rotateY 3s linear infinite',
        caer: 'caer 1.5s linear forwards',
        moveTitle: 'moveTitle 1.5s linear forwards',
        musicBar: 'musicBar 2.5s ease-in-out  infinite',
        musicBar2: 'musicBar 2.5s ease-in-out 0.5s infinite',
        musicBar3: 'musicBar 2.5s ease-in-out 1s infinite',
        shadowMove: 'shadowMove linear 2000ms infinite'
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