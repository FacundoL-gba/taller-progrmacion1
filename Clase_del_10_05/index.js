//variables
let valor = 4;
//arreglos - bucles
const miarreglo = [4,25,'Probando'];
//muestro valores individuales del array
console.log(miarreglo[2]);
console.log(miarreglo[0]);
//aca recorremos todo el array
for(indice in miarreglo){
    console.log(miarreglo[indice]);
}
/**
 * Array de objetos
 */
let miobjeto = {
    nombre : 'Pepe',
    dni: 36987412,
    correo: 'pepe@gmail.com'
}
console.log(miobjeto.correo);
let miarreglo_objetos = [
    {
        taller:'Programacion 2',
        docente:'Walter Hidalgo'
    },
    {
        taller:'Web 2',
        docente:'Walter Esperanza'
    }
]
//primera forma
for(objeto of miarreglo_objetos){
    console.log(objeto.taller)
}
//segunda opcion
miarreglo_objetos.forEach(objeto =>{
    console.log(`
    Taller: ${objeto.taller}
    Docente a cargo: ${objeto.docente}
    `)
});