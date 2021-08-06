import Cuenta from "./cuenta.js";
const almacenar = () =>{
    const usuario = document.getElementById("inp_usuario").value;
    const pasword = document.getElementById("inp_contrasena").value;
    const instancia = new Cuenta(usuario,pasword)
    instancia.guardarCuenta();   
}
const listar = () => {
    const instancia2 = new Cuenta();
    const lista = instancia2.listarcuentas();

    let lista_general = [];
    lista.forEach(element => {
        let li =  ` 
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
        <div class="fw-bold">${element.usuario}</div>
        </div>
        <span class="badge bg-primary rounded-pill">${element.password}</span>
        </li>
        `
        lista_general.push(li);
    });
    document.getElementById("lista_cuenta").innerHTML = lista_general.join('');
}
const btn = document.getElementById("btn_guardar")
btn.addEventListener("click",almacenar); 
listar();