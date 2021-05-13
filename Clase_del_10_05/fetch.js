const recorrer = async () => {
    const resultado = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await resultado.json();
    data.forEach(objeto => {
        console.log(`
            Titulo: ${objeto.title}
            Url: ${objeto.url}
        `)
    });
}
const btn = document.querySelector("#btn_obtener");
btn.addEventListener("click", recorrer);