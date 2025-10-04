/* LOGIN */
function verificacionEmail(){
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test('email')
    }

function verificacionPasssword(){
   return(!password || password.lengh > 6 && passaword !=password.toLowerCase() && Boolean(Password))
    }

 function obtenerEmail(){
    let email = prompt('ingrese su email')
    while(!verificacionEmail(email)){
        email = prompt('Incorrecto, por favor ingrese su email')
    }
    alert('Ha ingresado correctamente su email')
    return email
 }