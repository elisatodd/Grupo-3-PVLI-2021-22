const Data = {
    arrows: {
        left: {
            sprite: './assets/images/flechaIzq.png',
            x: 60,
            y: 412.5,
            scale: 10,
            name: 'arrowLeft'
        },
        rigth: {
            sprite: './assets/images/flechaDcha.png',
            x: 1150,
            y: 412.5,
            scale: 10,
            name: 'arrowRight'
        },
        up: {
            sprite: './assets/images/flechaArr.png',
            x: 625,
            y: 60,
            scale: 10,
            name: 'arrowUp'
        },
        down: {
            sprite: './assets/images/flechaAbj.png',
            x: 625,
            y: 770,
            scale: 10,
            name: 'arrowDown'
        }
    },
    // Botones con funcionalidad colocados por las escenas
    buttons: {
        buttonMute: {
            sprite: './assets/images/botonmute.png',
            x: 130,
            y: 50,
            scale: 12,
            name: 'mute'
        },
        buttonUnMute: {
            sprite: './assets/images/botonunmute.png',
            x: 130,
            y: 50,
            scale: 12,
            name: 'unmute'
        },
        buttonPause: {
            sprite: './assets/images/botonpausa.png',
            x: 50,
            y: 50,
            scale: 12,
            name: 'pause'
        },
        pausePannel: {
            sprite: './assets/images/wallpaperWeb.jpg',
            x: 665,
            y: 412.5,
            scale: 1,
            name: 'text'
        },
        playButton: {
            sprite: './assets/images/playbutton.png',
            x: 675,
            y: 312.5,
            scale: 2,
            name: 'play'
        }, secondaryPlayButton: {
            sprite: './assets/images/playbutton.png',
            x: 1350,
            y: 675,
            scale: 3,
            name: 'play'
        },
        hsButton: {
            sprite: './assets/images/hsbutton.png',
            x: 675,
            y: 522.5,
            scale: 2,
            name: 'highscore'
        },
        hsPannel: {
            sprite: './assets/images/HSBoard.png',
            x: 775,
            y: 522.5,
            scale: 2,
            name: 'highscoreBoard'
        }
    },

    // Objetos que se pueden recoger
    items: {
        moneda: {
            sprite: './assets/images/moneda.png',
            x: 200,
            y: 750,
            scale: 14,
            name: 'moneda'
        },
        caja: {
            sprite: './assets/images/caja.png',
            x: 625,
            y: 625,
            scale: 5,
            name: 'caja'
        },
        sombrero: {
            sprite: './assets/images/sombrero.png',
            x: 250,
            y: 375,
            scale: 6,
            name: 'sombrero'
        },
        carta: {
            sprite: './assets/images/Carta.png',
            x: 1050,
            y: 775,
            scale: 6,
            name: 'carta'
        },
        pajarita: {
            sprite: './assets/images/pajarita.png',
            x: 900,
            y: 775,
            scale: 10,
            name: 'pajarita'
        },
        pez: {
            sprite: './assets/images/pez.png',
            x: 600,
            y: 700,
            scale: 8,
            name: 'pez'
        },
        flor: {
            sprite: './assets/images/flor.png',
            x: 700,
            y: 755,
            scale: 8,
            name: 'flor'
        }
    },

    // Personajes del juego
    npc: {
        cafeteria: {
            sprite: './assets/images/cafeteria.png',
            x: 750,
            y: 475,
            scale: 1.5,
            name: 'cafeteria',
            puzzle: null, // luego cambiará
            first: 'Está cerrado.',
            last: 'Parece que puedo echar una mano.',
            third: 'Otro acertijo resuelto.',
            vendedora: null,
            item: null,
        },
        primo: {
            sprite: './assets/images/primo.png',
            x: 600,
            y: 575,
            scale: 2,
            name: 'primo',
            puzzle: 'NumerosRasgados',
            first: 'Hola querido primo... sé que estás en apuros.\nTe ayudaré en el juicio si tú me ayudas\na descifrar el número que me dio una chica.',
            last: 'Gracias por tu ayuda.\nTranquilo, estaré de tu lado \nen el juicio.',
            vendedora: null,
            item: null,
        },
        enamorado: {
            sprite: './assets/images/enamorado.png',
            x: 1000,
            y: 575,
            scale: 2.5,
            name: 'enamorado',
            puzzle: null,
            first: 'Neceisto un regalo para mi amada.\n¿Tienes algo para mi?',
            last: '¡Muchas gracias! A mi amada\nle va a encantar.',
            vendedora: null,
            item: 'flor',
        },
        mujerGato: {
            sprite: './assets/images/mujerGato.png',
            x: 350,
            y: 525,
            scale: 1,
            name: 'mujer',
            puzzle: null,
            first: '¡Ayuda! Mi gato está atrapado en ese árbol.\nOjalá tuviese algo para atraerlo...',
            last: '¡Muchas gracias! Por fin estás a\nsalvo pequeño Bandit.',
            vendedora: null,
            item: 'pez',
        },
        excentrico: {
            sprite: './assets/images/excentrico.png',
            x: 600,
            y: 525,
            scale: 2,
            name: 'excentrico',
            puzzle: null,
            first: '¿Serás capaz de resolver mi acertijo?',
            last: 'Vaya... eres más inteligente de lo que pensaba.',
            vendedora: null,
            item: null,
        },
        ninio: {
            sprite: './assets/images/ninio.png',
            x: 850,
            y: 525,
            scale: 3,
            name: 'ninio',
            puzzle: null,
            first: 'No tengo dinero para montar en\nla atracción.',
            last: '¡Muchas gracias señor!',
            vendedora: null,
            item: 'moneda',
        },
        forzudo: {
            sprite: './assets/images/forzudo.png',
            x: 350,
            y: 575,
            scale: 2.5,
            name: 'forzudo',
            puzzle: 'puzzleTopoz',
            first: 'Por favor, ayúdame con este problema...',
            last: '¡Gracias!',
            vendedora: null,
            item: null,
        },
        cirquense: {
            sprite: './assets/images/cirquense.jpg',
            x: 300,
            y: 550,
            scale: 2,
            name: 'cirquense',
            puzzle: 'codigoIndiscreto',
            first: 'Todo se ha estropeado justo antes de\nque comience la feria...',
            last: 'Aún faltan algunos detalles...',
            vendedora: null,
            item: null,
        },
        cirquense2: {
            sprite: './assets/images/cirquense2.jpg',
            x: 700,
            y: 550,
            scale: 2,
            name: 'cirquense2',
            puzzle: 'banderines',
            first: 'Mi hermano es un desastre...\nNo sabe ni colocar unos banderines.',
            last: 'Yo lo habría hecho mejor...\nPero es aceptable',
            vendedora: null,
            item: null,
        },
        candado: {
            sprite: './assets/images/candado.png',
            x: 100,
            y: 550,
            scale: 4,
            name: 'candado',
            puzzle: 'puzzleCandado',
            first: 'Parece que este candado\n tiene un puzle...',
            last: '¡Lo he resuelto!',
            vendedora: null,
            item: null,
        },
        carnicero: {
            sprite: './assets/images/carnicero.png',
            x: 350,
            y: 475,
            scale: 0.75,
            name: 'carnicero',
            puzzle: 'puzzleCarniceria',
            first: '¡¡Uno de estos chicos me ha robado!!\nPero quién habrá sido...',
            last: 'Gracias por resolver el misterio, joven.',
            vendedora: null,
            item: null,
        },
        clienta: {
            sprite: './assets/images/clienta.png',
            x: 300,
            y: 575,
            scale: 1,
            name: 'clienta',
            puzzle: null,
            first: 'Necesito un nuevo sombrero.\nEsta tienda no tiene ninguno bonito.',
            last: '¡Gracias!¡Es perfecto!',
            vendedora: null,
            item: 'sombrero',
        },
        vendedora: {
            sprite: './assets/images/vendedora.png',
            x: 900,
            y: 475,
            scale: 1.75,
            name: 'vendedora',
            puzzle: 'CartaPuzle',
            first: '¿Tienes alguna prueba que demuestre\n que estábais juntos?',
            last: 'Vaya... parece que realmente\nno has sido tú.',
            vendedora: true,
            item: 'carta',
        },
        policia: {
            sprite: './assets/images/policia.png',
            x: 800,
            y: 525,
            scale: 0.75,
            name: 'policia',
            puzzle: null,
            first: '¿Tienes alguna prueba para el juicio?',
            last: 'Interesante evidencia...',
            vendedora: null,
            item: 'pajarita',
        },
        campesino: {
            sprite: './assets/images/campesino.png',
            x: 200,
            y: 625,
            scale: 1,
            name: 'campesino',
            puzzle: null,
            first: '¿Podrías dejarme algo para\nllevar mi mercancía?\nMi carro se ha roto.',
            last: 'Muy amable, gracias joven.',
            vendedora: null,
            item: 'caja',
        }

    },

    // Musica y efectos de sonido
    sound:{
        backgroundMusic:{
            name: 'background',
            route: './assets/sounds/Pooka.mp3',
            config : {
                mute: false,
                volume: 0.25,
                loop: true,
                delay: 0,
            }
        },
        winPuzzle:{
            name:'winPuzzle',
            route:'./assets/sounds/ganarPuzzle.wav'
        },
        losePuzzle:{
            name: 'losePuzzle',
            route:'./assets/sounds/perderPuzzle.wav'
        },
        takeItem:{
            name:'takeItem',
            route:'./assets/sounds/recogerObjeto.wav'
        },
        giveItem:{
            name:'giveItem',
            route:'./assets/sounds/ganarObjeto.wav'
        }
    },

    // elementos que se utilizan para las cinemáticas
    cinematics: {
        initialText: {
            string: "Estimado señor Calthrop;=Ha sido hallado el cadáver de Grace, su prometida e hija=del alcalde, en  muy trágicas condiciones.=Tras una breve deliberación hemos llegado a la conclusión=de que usted es el único posible culpable; ya que fue el=último en verla con vida.=Aunque nos pese admitirlo, puesto que usted era muy=preciado entre las gentes de este pueblo, debe presentarse=a juicio mañana a primera hora.=Si es inocente, tiene hasta entonces para demostrarlo=frente al jurado popular.=En ese caso, le deseo la mayor de las suertes=Un cordial saludo==                      Jefatura de policía de Leytonstone",
        },
        badEnding: {
            string: "El jurado ha finalizado la deliberación.==Gracias a las pruebas aportadas y los testimonios de los=habitantes, el acusado se declara culpable del asesinato=de Grace Bergman.==Por tanto será ejecutado en la horca esta misma tarde.",
        },
        goodEnding: {
            string: "El jurado ha finalizado la deliberación.==Gracias a las pruebas aportadas y los testimonios de los=habitantes, el acusado se declara inocente, y, por tanto,=es liberado de sus cargos.==Además se declara culpable a Alfred Jhones, de quien se=conoce que acosaba a la víctima.=Él es quien acabó con la vida de Grace y por lo tanto=será ejecutado esta misma tarde.==Gracias Donald Calthrop por su ayuda, sin usted no se=habría podido resolver el crimen.",
        },
        neutralEnding: {
            string: "El jurado ha finalizado la deliberación.==Gracias a las pruebas aportadas y los testimonios de los=habitantes, el acusado se declara inocente del asesinato=de Grace Bergman, y por tanto queda liberado de los=cargos.==Por desgracia no hay pruebas suficientes para descubrir=al verdadero culpable.==La memoria de Grace no quedará en paz.",
        }

    }

};
export default Data;