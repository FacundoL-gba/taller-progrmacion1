const mostrar_numeros = () => {
    let arreglo = [1,2,3,4,5,6];
    arreglo.push(7);
    arreglo.push(8);
    let cantidad_numeros = arreglo.length;
    let suma = 0;
    arreglo.forEach(element => {
        console.log("Usando forEach" + element);
        suma = suma + element;
    }); 
    for (let indice in arreglo){
        console.log("Usando for"+ arreglo);
    }
    let total = suma / cantidad_numeros;
    document.write("El promedio es:" + total);
}
const boton = document.querySelector("#btn_numeros");
boton.addEventListener("click", mostrar_numeros); 