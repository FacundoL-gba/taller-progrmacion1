const mensaje_clima = () => {
    //aca identificamos el SELECT a travez de su id
    const valor_clima = document.querySelector("#slt_clima").value;
    //aca identificamos el parrado a traves de su id
    const parrafo = document.querySelector("#p_valor_clima");
    //variable global
    var mensaje = '';
    if(valor_clima==0)
    {
        mensaje = 'Ciele despejado, sin probabilidad de lluvia';
        parrafo.textContent = mensaje;
    } else
    {
        if(valor_clima==1)
        {
            mensaje = 'Fuertes lluvias';
            parrafo.textContent = mensaje;
        }else 
        {
            mensaje = 'Cielo parcialmente nublado';
            parrafo.textContent = mensaje;
        }
    }
}
//aca encontramos a nuestro select
const select = document.querySelector("#slt_clima");
//al seleccionar una opcion distinta, eso indica un cambio(change) y cuando sucesa esa cambio, se ejecuta la funcion mensaje_clima
select.addEventListener("change", mensaje_clima);