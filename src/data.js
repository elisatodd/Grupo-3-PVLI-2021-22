const Data = {
    buttons:{

    },
    items: {
        moneda: {
            sprite: './assets/images/moneda.png', 
            x: 200, 
            y:  750, 
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
        sombrero:{
            sprite: './assets/images/sombrero.png',
            x: 250, 
            y: 375,
            scale: 6, 
            name: 'sombrero'
        },
        carta:{
            sprite: './assets/images/Carta.png',
            x: 1050, 
            y: 775,
            scale: 6, 
            name: 'carta'
        },
        pajarita:{
            sprite: './assets/images/pajarita.png',
            x: 900, 
            y: 775,
            scale: 10, 
            name: 'pajarita'
        },
        pez:{
            sprite: './assets/images/pez.png',
            x: 600, 
            y: 700,
            scale: 8, 
            name: 'pez'
        },
        flor:{
            sprite: './assets/images/flor.png',
            x: 700, 
            y: 755,
            scale: 8, 
            name: 'flor'
        }
    },

    npc: {
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
            itemName: null,
        },
        enamorado:{
            sprite: './assets/images/enamorado.png',
            x:  1000,
            y: 575,
            scale: 2.5,
            name: 'enamorado',
            puzzle: null,
            first: 'Neceisto un regalo para mi amada.\n¿Tienes algo para mi?',
            last: '¡Muchas gracias! A mi amada\nle va a encantar.',
            vendedora: null,
            itemName: 'flor',
        }
    }
    
};
export default Data;