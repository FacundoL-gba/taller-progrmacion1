const mostrar_objetos = () => {
    const parrafo = document.querySelector("#p_parrafo");
    const parrafo2 = document.querySelector("#p_parrafo2")
    let mi_objeto = {
        compania: 'Google',
        productos:{
            office:{
                prod1: 'Google Docs',
                prod2: 'Google Sheets',
                prod3: 'Google Slides'
            },
            general:{
                prod1: 'Youtube',
                prod2: 'Google Drive',
                prod3: 'Google Meet'
            }
        }
    
    }
    parrafo.textContent = `
    El producto office 1 es: ${mi_objeto.productos.office.prod1}
    El producto office 2 es: ${mi_objeto.productos.office.prod2}
    El productp office 3 es: ${mi_objeto.productos.office.prod3}
    `
    parrafo2.textContent = `
    El producto general 1 es: ${mi_objeto.productos.general.prod1}
    El producto general 2 es: ${mi_objeto.productos.general.prod2}
    El producto general 3 es: ${mi_objeto.productos.general.prod3}
    `
}
const btn_array = document.querySelector("#bt_mostrar_funcion");
btn_array.addEventListener("click", mostrar_objetos);