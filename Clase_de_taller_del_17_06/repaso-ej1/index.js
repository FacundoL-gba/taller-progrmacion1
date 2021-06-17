const calcular = () => {
    const valor_numero = document.querySelector("#inp_numero").value; // no me funciona el getElementById
    const parrafo = document.querySelector("#p_parrafo");
    let mensaje = '';

    if(valor_numero == 0){
        mensaje = 'El numero es nulo';
    }else {
        if (valor_numero > 0){
            mensaje = 'El numero es positivo';
        }else {
            mensaje = 'El numero es negativo';
        }
    }
    parrafo.textContent = mensaje;
}
const btn = document.querySelector("#btn_calcular");
btn.addEventListener("click", calcular);