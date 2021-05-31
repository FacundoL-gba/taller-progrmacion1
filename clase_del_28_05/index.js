const mostrar_nombres = () => {
    let clasificaciones = ['Ana','Oswaldo','Raúl','Cella','María','Antonio'];
    document.write(`
    1 Puesto ${clasificaciones[0]}
    2 Puesto ${clasificaciones[1]}
    3 Puesto ${clasificaciones[2]}
    `);
    clasificaciones.forEach(element =>{
        document.write("Usando forEach: " + element)
    });
    for(indice in clasificaciones){
        document.write("Usando for: " + clasificaciones[indice]);
    }
}
const btn = document.querySelector("#btn_resultados");
btn.addEventListener("click", mostrar_nombres);