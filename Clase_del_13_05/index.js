const calcular1 = () => {
    let miarreglo = [44,88,11,2,7];
    console.log(miarreglo[1]);
}
const boton = document.querySelector("#btn_calcular");
boton.addEventListener("click", calcular1);

const recorrer_arreglo = () => {
    let miarreglo2 = ['Programacion1','Web2','Robotica'];
    for(indice in miarreglo2){
        console.log(miarreglo2[indice]);
    }
}
const boton2 = document.querySelector("#btn_recorrer");
boton2.addEventListener("click", recorrer_arreglo);

const mostrar_objetos = () => {
    let miobjeto = {
        nomre: 'Pepe',
        correo: {
            correo1: 'pepito@gmail.com',
            correo2: 'lacome@gmail.com',
        },
        redes_sociales: {
            facebook: 'www.facebook.com',
            twitter: 'www.twitter.com'
        }
    }
                            console.log(`
    Mi nombre es: ${miobjeto.nomre}
    Mi facebook es: ${miobjeto.redes_sociales.facebook}
    `)
}
const boton3 = document.querySelector("#btn_objetos");
boton3.addEventListener("click", mostrar_objetos);

const recorrer_objetos = () => {
    let objetos = [
        {
            nombre:'Pepe',
            apellido:'Augusto'
        },
        {
            nombre:'Juan',
            apellido:'Mandarina'
        }
    ];
    objetos.forEach(objeto => {
        console.log(`
            Nombre: ${objeto.nombre}
            Apellido: ${objeto.apellido}
        `)
    });
}
const boton4 = document.querySelector("#btn_recorrer_objetos");
boton4.addEventListener("click", recorrer_objetos);