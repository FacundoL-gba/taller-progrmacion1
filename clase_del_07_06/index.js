const mostrar_array = () => {
    let autos = ["ford","bmw"]
    console.log(autos.length);
}
const btn_array = document.querySelector("#btn_mostrar_array");
btn_array.addEventListener("click", mostrar_array);

const acceder_array = () => {
    let autos = ["ford","bmw"]
    let primero = autos[0]
    console.log(primero)
    let ultimo = autos[autos.length - 1];
    console.log(ultimo)
}
const btn_acceder = document.querySelector("#btn_acceder_objeto");
btn_acceder.addEventListener("click", acceder_array);

const recorrer_array = () => {
    let autos = ["ford","bmw"]
    autos.forEach(function(elemento, indice, array){
        console.log(elemento, indice);
    })
}
const btn_recorrer = document.querySelector("#btn_recorrer");
btn_recorrer.addEventListener("click", recorrer_array);

const añadir_objeto = () => {
    let autos = ["ford","bmw"]
    console.log(autos);
    let nuevaLongitud = autos.push('Audi');
    console.log(autos);
}
const btn_añadir = document.querySelector("#btn_añadir_objeto");
btn_añadir.addEventListener("click", añadir_objeto);

const eliminar_objeto = () => {
    let autos = ["ford","bmw", "audi"]
    console.log(autos);
    let ultimo = autos.pop();
    console.log(ultimo);
    console.log(autos);
}
const btn_eliminar = document.querySelector("#btn_eliminar_objeto");
btn_eliminar.addEventListener("click", eliminar_objeto);

const añadir_elemento_array = () => {
    let autos = ["ford","bmw"]
    console.log(autos);
    let nuevaLongitud = autos.unshift('lexus');
    console.log(autos);
}
const btn_añadir2 = document.querySelector("#btn_añadir_objeto_array");
btn_añadir2.addEventListener("click", añadir_elemento_array);

const eliminar_primer_elemento = () => {
    let autos = ["lexus", "ford","bmw"]
    console.log(autos);
    let primero = autos.shift();
    console.log(autos);
}
const btn_eliminar2 = document.querySelector("#btn_eliminar_primer_elemento");
btn_eliminar2.addEventListener("click", eliminar_primer_elemento);

const encontrar_array = () => {
    let autos = ["ford","bmw"]
    console.log(autos.length);
    autos.push('audi');
    console.log(autos);
    let pos = autos.indexOf('bmw');
}
const btn_econtrar = document.querySelector("#btn_econtrar_array");
btn_econtrar.addEventListener("click", encontrar_array);

const eliminar_elemento2 = () => {
    let autos = ["lexus", "ford","bmw"]
    console.log(autos);
    let pos = 1;
    let elementoEliminado = autos.splice(pos);
    console.log(autos);
}
const btn_eliminar_elemento = document.querySelector("#btn_eliminar2");
btn_eliminar_elemento.addEventListener("click", eliminar_elemento2);

const elementos_splice = () => {
    let autos = ['Ford', 'Renault', 'Volkswagen', 'Seat']
    console.log(autos);

    let pos = 1, numElementos = 2

    let elementosEliminados = autos.splice(pos, numElementos);

    console.log(autos);
}
const btn_elementos_splice = document.querySelector("#btn_elementos_splice");
btn_elementos_splice.addEventListener("click", elementos_splice);

const copiar_array = () => {
    let autos = ["ford","bmw"]
    console.log(autos);
    let copiaArray = autos.slice();
    console.log(copiaArray);
}
const btn_copiar_array = document.querySelector("#btn_copiar_array");
btn_copiar_array.addEventListener("click", copiar_array);