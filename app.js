import { User } from "./models/user.class.js";

const form = document.querySelector("#formDudas");



form.addEventListener('submit', (e) => {
    const consultasArray = JSON.parse(localStorage.getItem('consultas')) || []
    e.preventDefault()
    let formData = new FormData(form)
    let username = formData.get('username')
    let apellido = formData.get('apellido')
    let email = formData.get('email')
    let telefono = formData.get('telefono')
    let consuta = formData.get('consulta')

    console.log(username);
    console.log(apellido);
    console.log(email);
    console.log(telefono);
    console.log(consuta);

    if ((username !== '') && (apellido !== '') && (email !== '') && (telefono !== '') && (consuta !== '')) {
        let conUser = new User(username, apellido, email, telefono, consuta)
        console.log(conUser);
        consultasArray.push(conUser)
        localStorage.setItem('consultas', JSON.stringify(consultasArray))
        Swal.fire(
          'Gracias por contactarnos!',
          'Responderemos tus dudas a la brevedad!',
          'success'
        )
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Ocurrio un error',
            text: 'Por favor verifique los datos ingresados!',
            
          })
    }
})