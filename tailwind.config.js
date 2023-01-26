const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      //aqui se extienden o agregaran las propiedades, se especifica la propiedad en este caso font = fontfamily, luego ponemos un nombre y su valor.
      fontFamily: {
        'inter':'"Inter",ui-sans-serif, system-ui, sans-serif'
      },
      fontFamily:{
        'secularOne':'"Secular One", ui-sans-serif, system-ui, sans-serif'
      }
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