const operacion = () => {
    const valor_ohm = document.querySelector("#slt_ohm").value;
    const parrafo = document.querySelector("#p_parrafo");
    var inp1 = document.querySelector("#inp_1").value;
    var inp2 = document.querySelector("#inp_2").value;

    if(valor_ohm==0)
    {
        const intensidad = inp1/inp2 ;
        parrafo.textContent = `
        El resultado de Intensidad = ${intensidad}`;
    } else
    {
        if(valor_ohm==1)
        {
            const tension = inp1*inp2;
            parrafo.textContent = `
            El resultado de la Tension = ${tension}`;
        }else 
        {
            const resistencia = inp1/inp2;
            parrafo.textContent = `
            El resultado de la Resistencia = ${resistencia}`;
        }
    }
}
const btn = document.querySelector("#btn_resultado");
btn.addEventListener("click",operacion);

const cambiar_label = () => {
    const select = document.querySelector("#slt_ohm").value;
    const label1 = document.querySelector("#lbl_1");
    const label2 = document.querySelector("#lbl_2");
    if (select == 0){
        label1.textContent = 'V (Tension)';
        label2.textContent = 'R (Resistencia)';
    } else{
        if (select == 1){
            label1.textContent = 'I (Intensidad';
            label2.textContent = 'R (Resistencia)';
        } else {
            label1.textContent = 'V (Tension)';
            label2.textContent = 'R (Resistencia)';
        }
    }
}
const select = document.querySelector("#slt_ohm");
select.addEventListener("change", cambiar_label);