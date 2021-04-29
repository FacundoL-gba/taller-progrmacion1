class Taller {
    servicios_google;
    libreria_css; //boostrap
    constructor (nombre, lenguaje) 
    {
        this.nombre_taller = nombre
        this.lenguaje_programacio = lenguaje
    }  
    mostrar_taller(){
        console.log(`
        Nombre: ${this.nombre_taller}
        Lenguaje de programacion: ${this.lenguaje_programacio}
        Libreria css: ${this.libreria_css}
        Servicios de Google: ${this.servicios_google}
        `)
    }
}
const taller = new Taller ('Programacion 1','JavaScript');
taller.libreria_css = 'Bootstrap'
taller.servicios_google = 'FireBase'
taller.mostrar_taller();