const calcular = (numero) => {
    let pi = Math.PI
    let resultado = pi * numero;
    return resultado;
}
const verificar = () => {
    let num = document.getElementById("inp_dato").value
    const parrafo = document.querySelector("#p_resultado");
    const resultado = calcular(num);
    parrafo.textContent = `
    El resultado es ${resultado}
    `
}
const boton = document.getElementById("btn_calcular");
boton.addEventListener("click", verificar);