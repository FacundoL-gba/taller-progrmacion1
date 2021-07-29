export default class Matematica{
    dato1;
    dato2;
    constructor(d1, d2) 
    {
        this.dato1 = d1;
        this.dato2 = d2;
    }
    sumar ()
    {
        let resultado = parseInt(this.dato1) + parseInt(this.dato2);
        console.log(resultado);
    }
}

