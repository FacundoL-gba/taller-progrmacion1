export default class Bhaskara {
    datoa;
    datob;
    datoc;
    constructor(da, db,dc){
        this.datoa = da;
        this.datob = db;
        this.datoc = dc; 
    }
    calcular_raices(){
        let     resultado = parseInt(this.datoa) * parseInt(this.datob) * parseInt(this.datob);
        console.log(resultado);
    }
}