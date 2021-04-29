import Protocolo from'./protocolo.js' ;

const mostrar= () => {
    const id1 = document.querySelector("#inp_nombre").value;
    const id2 = document.querySelector("#inp_apellido").value;
    const id3 = document.querySelector("#inp_temperatura").value;
    
    const prot = new Protocolo();
    prot.mostrar(id1,id2,id3)
}

const btn_mostrar = document.querySelector("#btn_mostrar");
btn_mostrar.addEventListener("click", mostrar);