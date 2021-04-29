class Auto {
    // declaro los atributo de la clase
    precio = '$1.000.000,00';
    motor;
    constructor (mar, mod)
    {
        this.marca = mar;
        this.modelo = mod;
    }
    arranque(){
        console.log(`
        Marca: ${this.marca}
        Modelo: ${this.modelo}
        Precio: ${this.precio}
        Motor: ${this.motor}
        `);
    }
    
}
//creo la instancia pero tambien se ejecta el constructor
const auto = new Auto ('Fiat','Argo');
auto.motor = '1.4 TSI'
// aca con las instancia ejecuto el metodo arranque
auto.arranque();
/*Exportando la clase, esta visible para los demas archivos */
//module.exports = Auto;