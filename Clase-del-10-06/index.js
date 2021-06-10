const calcular = (numero) => {
    let respuesta = ''; //lo agregue despues que le dijiera a diego
    let resto = numero % 2;
    if(resto == 0){
        respuesta = 'El numero es par';
    } else {
        respuesta = 'El numero es impar';
    }
    return respuesta;
    
}

const verificar = () => {
    let num = document.getElementById("inp_dato").value
    const respuesta = calcular(num);
    document.getElementById("p_resultado").textContent = respuesta;
}

const boton = document.getElementById("btn_calcular");
boton.addEventListener("click", verificar);