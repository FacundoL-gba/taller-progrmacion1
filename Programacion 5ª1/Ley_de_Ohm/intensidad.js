const calIntensidad = () => {
    const id1 = document.querySelector("#inp_v").value;
    const id2 = document.querySelector("#inp_r").value;
    const resultado = parseInt(id1) / parseInt(id2);
    alert(`Calcula de intesidad de corriente
    Resultado: ${resultado}`);
}

const btn = document.querySelector("#btn_probar");

btn.addEventListener("click", calIntensidad);