import Auto from './auto'
// creamos la instancia de la clase auto
const auto = new Auto();
// auto.arranque();
// identificamos el boton a traves de su ID
const btn_arranque = document.querySelector("#btn_arranque");
btn_arranque.addEventListener("click",auto.arranque());