//async y await
const obtenerPokemones = async ()=>{
    const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await respuesta.json();
    data.results.forEach(objeto => {
        console.log(objeto.name);
    });
}
const btn_poke = document.querySelector("#btn_poke");
btn_poke.addEventListener("click", obtenerPokemones);

//pequeño repaso de objetos
const miObjeto = {
    taller: 'Programacion 1',
    curso:'5to año',
    contenidos:{
        tema1:'variables',
        tema2:'funciones',
        tema3:'objetos',
    }
}
console.log(miObjeto.taller);
console.log(`
    Los contenidos del taller son:
    - ${miObjeto.contenidos.tema1}
    - ${miObjeto.contenidos.tema2}
    - ${miObjeto.contenidos.tema3}
`)