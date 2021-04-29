//construir una funcion que imprime una alerta en el navegador
const mifuncion = () => {
    const id1 = document.querySelector("#inp_d1").value;
    const id2 = document.querySelector("#inp_d2").value;
    const resultado = parseInt(id1) + parseInt(id2);
    alert(resultado);
}
 
//identificar el boton a traves de su ID
const btn = document.querySelector("#btn_probar");

//cuando se haga click sobre el boton se ejecut la funcion
btn.addEventListener("click", mifuncion);