export default class Cuenta{
    usuario;
    password;
    constructor(u,p) 
    {
        this.usuario = u;
        this.password = p;
    }
    guardarCuenta()
    {
        let cuenta = {
            usuario: this.usuario,
            password: this.password
        }
        let lista = [];
        if ("cuenta" in localStorage){
            lista = JSON.parse(localStorage.getItem("cuenta"));
            lista.push(cuenta);
            localStorage.setItem("cuenta",JSON.stringify(lista)); //guardo el objeto como un JSON         
        }else {
            lista.push(cuenta);
            localStorage.setItem("cuenta",JSON.stringify(lista));
        }
    }
    listarcuentas()
    {
        let lista = [];
        lista = JSON.parse(localStorage.getItem("cuenta"));
        return lista;
    }
    eliminarCuenta()
    {

    }
}