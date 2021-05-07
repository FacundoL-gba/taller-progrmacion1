const resultado = () => {
    const a = document.querySelector("#inp_a").value;
    const b = document.querySelector("#inp_b").value;
    const c = document.querySelector("#inp_c").value;
    const parrafo = document.querySelector("#p_parrafo");


    const bloque1 = Math.pow(b,2) - 4 * c;
    const bloque2 = a * 2;
    const raiz = Math.sqrt(bloque1);
    const bloque3 = raiz / bloque2;
    const metodo1 = -b + bloque3;
    const metodo2 = -b - bloque3;

    parrafo.textContent = `
    El primer resultado es: ${metodo1}
    El segundo resultado es: ${metodo2}
    `;
}
const btn = document.querySelector("#btn_resultado");
btn.addEventListener("click",resultado);

