
export class User{
    username = '';
    apellido = '';
    email = '';
    telefono = '';
    consulta = '';

    constructor(username, apellido, email, telefono, consulta){
        this.username = username,
        this.apellido = apellido,
        this.email = email,
        this.telefono = telefono,
        this.consulta = consulta
    }
}