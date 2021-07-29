import Matematica from './matematica.js';
import Bhaskara from './bhaskara.js'
const operar = () => {
    let d1 = document.getElementById("inp1").value;
    let d2 = document.getElementById("inp2").value;
    const mat = new Matematica(d1, d2);
    mat.sumar() 
}
const btn = document.querySelector("#btn_operar");
btn.addEventListener("click",operar);
//inicia el ejercicio
const calcular = () => {
    let num1 = document.getElementById("inp_num1").value;
    let num2 = document.getElementById("inp_num2").value;
    let num3 = document.getElementById("inp_num3").value;
    const bhas = new Bhaskara(num1, num2, num3);
    bhas.calcular_raices()
}
const btn1 = document.querySelector("#btn_calcular");
btn1.addEventListener("click",calcular);