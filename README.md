# AceCombat Page 
Página creada con el fin de poner en práctica los conocimientos en sobre el framework Tailwind.

 ![Portada de pagina](https://www.dropbox.com/s/e5rnlg3cixx0r4z/Acecombat2.png?raw=1)

1. [Tailwind](#tailwind)
    * [@tailwind base](#tailwind-base)
    * [@tailwind components](#tailwind-components)
    * [@tailwind utilities](#tailwind-utilities)
2. [Tailwind.config.js](#tailwindconfigjs)
3. [Conclusiones](#conclusiones)

---
## Antes de empezar 

Tailwind es un Framework de CSS que estos últimos tiempos ha estado ganando popularidad entre los programadores y desarrolladores, estuve indeciso si aprender este último o Bootstrap, finalmente  entre muchas de las características que tailwind brinda terminaron por convencerme aunque igual queda pendiente Bootstrap y agregado a mis lista de deseos. 😎
## Tailwind

Para la instalación de tailwind su documentación nos indica varias formas dependiendo delas tecnologías con las que trabajaras tu proyecto, en mi caso utilice **NPM** para su instalación adjunto el documento redactado paso a paso aunque también lo puedes ver en la documentación oficial como mencione antes.

[Instalar tailwind con Npm 📄]()

Una vez instalado en el proyecto procedemos con las configuraciones.

*Al usar tailwind, este aplica un reset de estilos a los documentos trabajados, muy parecido a **Normalize css**.

### @tailwind base

En el archivo CSS  en mi caso nombrado con **origin.css** en la directiva **BASE** se puede poner estilos base en todo el documento generalmente el tipo de fuente u otra característica que se encontrará muy presente en el proyecto. 

![base utilizada en el proyecto](https://www.dropbox.com/s/rpq74dtb9bqes9v/code2.png?raw=1)

Se pusieron tipos de fuente predeterminadas al proyecto.

### @tailwind components

Si bien una de las características de tailwind es utility-first a contar con las clases de utilidad que  para homologar su significado serian como estilos en linea esto dicho de la forma mas básica ya que van mas allá de ello.

También se puede componentizar y es aquí uno de las cosas interesantes que ofrece tailwind como tener estilos para un botón o card my parecido a bootstrap y que podremos reutilizar en este o futuros proyectos.

![Componente barra de búsqueda](https://www.dropbox.com/s/fnu7ag6xbsun75l/code3png?raw=1)

Se da un nombre de clase  y mediante la directiva @apply se agregan las clases de utilidad que construirán el componente.

### @tailwind utilities

Si necesitamos una clase en especifico o una clase que contenga varias que a su vez no estén disponibles como clases de utilidad.

![3 utilidades nuevas](https://www.dropbox.com/s/i0ocxvonhyaiemd/code4png?raw=1)

Se muestran 3 utilidades nuevas creadas, se expresan mediante sintaxis CSS convencional y se referencian a una clase.

## Tailwind.config.js

En el archivo de tailwind.config.js  podremos extender las clases utilitarias de tailwind, gestionar el dark Mode también agregar plugin que agreguen nuevas clases entre otros la documentación lo detalla aporte por parte.

En el proyecto se uso mas parte extender las clases tailwind:

![extendiendo z-index](https://www.dropbox.com/s/u9fvv5ls5tpd0qi/code5png?raw=1)

Tailwind maneja el z-index en rangos de 10 en 10 en este caso adicionamos para poder usar el z-index del 1 al 9.

## Conclusiones

Este proyecto me permitió comprender el uso flujo de trabajo de tailwind podría rescatar lo siguiente y lo cual debo poner mas énfasis:

* Por mas que sea tentador componentizar todo a fin de que el HTML no se vea tan cargado, debería evitarse esto ya que va en contra de  la filosofía de tailwind, se debe componentizar cuando veamos factible la reutilización de dicho componente aunque esto también dependerá del criterio del equipo de desarrollo.

* Utilizar la directiva @layer para tener mas ordenados los  componentes y no tener todo junto en un solo documento.

* El desarrollo del proyecto fue muy educativo la documentación, las clases y fuentes externas enriquecieron mi conocimiento , aun con todo eso todavía debo practicar mas con tailwind y leer mas la documentación y foros. Como curiosidad recién estoy aprendiendo Javascript, hay cosas que quería implementar como :

    * agregar o remover clases.
    * poner rotaciones aleatorias a las fotos que  estuvieran en un rango(0-45deg). 

    Y tailwind me movió a buscar y estudiar JS antes de la fecha que tenia prevista asi que fue un extra para mi.


<p style="color:#095">Tecnologías utilizadas para el desarrollo del proyecto </p>

| **Editor de texto** | **Equipo**| **SO** | **Tecnologías** |
| :--: | :--: | :--: | :--: |
| Visual Studio Code | Laptop Hp Pavilion dm 1 | GNU Linux (Parrot Home Edition) | HTML <br> TailwindCss <br> Git <br>JS |

[GitHub](https://github.com/WanderleeDev)

[Linkedin](https://www.linkedin.com/in/wanderlee-max/)
