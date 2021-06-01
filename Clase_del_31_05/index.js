const mostrar_usuarios = async () => {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await respuesta.json();
    const total_items = [];
    data.forEach(element => {
        // console.log(element.name)
        //conformamos un item con el nombre del usuario
        let item = `<li class="list-group-item">${element.name}</li>`
        total_items.push(item)
    });
    //llenamos el ul usando el inertHTML, pero usamos el join para eliminar las comillas al array total_items
    document.querySelector("#ul_usuarios").innerHTML = total_items.join("");
}
const btn = document.querySelector("#btn_mostrar"); 
//const boton = document.getElementById("btn_mostrar")
btn.addEventListener("click", mostrar_usuarios);