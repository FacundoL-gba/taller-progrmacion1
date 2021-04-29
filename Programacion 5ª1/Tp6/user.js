const obtenerUsuarios = async ()=>{
    const respuesta = await fetch('http://jsonplaceholder.typicode.com/users');
    const data = await respuesta.json();
    data.forEach(objeto => {
        console.log(`
        Usuario: ${objeto.name}
        Email: ${objeto.email}
        Ciudad: ${objeto.address.city}
        `);
    });
}
const btn_usuario = document.querySelector("#btn_usuario");
btn_usuario.addEventListener("click", obtenerUsuarios);