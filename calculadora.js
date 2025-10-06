/* LOGIN */ 
function verificacionEmail(email){
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
    }

function verificacionPasssword(password){
    return(!password || password.length > 6 && passaword !=password.toLowerCase() && Boolean(Password))
    }
    /* TRADUCIR Y ESCRIBIR EN EL CUADERNO QUE SIGNIFICA ESE RETOURN */

function obtenerEmail(){
    let email = prompt('ingrese su email')
    while(!verificacionEmail(email)){
        email = prompt('Incorrecto, por favor ingrese su email')
    }
        alert('Ha ingresado correctamente su email')
    return email
}
function obtenerPassword(){
    let password = prompt('Ingrese su clave')
    while (!verificacionPasssword(password)){
        password = prompt ('Clave n o valida, vuelva a intentarlo')
    }
    alert ('su clave a sido exitosamente anadida')
    return password
}
    obtenerEmail()
    obtenerPassword() 


    /* CALCULOS */


    function operacionNumero1(){
    let numero1 = prompt('Ingrese un numero')
    while (!numero1 || isNaN(numero1)){
        numero1 = prompt ('ERROR:ingrese un numero')
    }
    return Number(numero1)
}


function operacionSigno(){
    let signo = prompt('Ingrese la operacion')
    while (signo !== '-' && signo !== '+'){
        signo = prompt('ERROR: Ingrese correctamente la operacion')
    }
    return signo
}


function operacionNumero2(){
    let numero2 = prompt('Ingrese un nuevo numero')
    while (!numero2 || isNaN(numero2)){
        numero2 = prompt ('ERROR:ingrese un nuevo numero')
    }
    return Number(numero2)
}

function suma(numero1, numero2){
    return numero1 + numero2;
}
function resta( numero1, numero2){
    return numero1 - numero2
}

function operaciones(numero1,signo, numero2){
let resultado;
if ( signo === '+'){
    resultado = suma(numero1, numero2)
}
else{
    resultado = resta(numero1,numero2)
}
alert('El resultado es '+ resultado)
return resultado
}
const numero1= operacionNumero1()
const signo= operacionSigno()
const numero2= operacionNumero2()
operaciones(numero1, signo, numero2);

/* HISTORIAL */

const historial= [
    {accion: 'calcular',
        operacion:'+',
        a:1,
        b:2,
        resultado: 3
    },
    {accion: 'calcular',
        operacion:'-',
        a:1,
        b:2,
        resultado: -1
    }
]

function renderizarHistorial(historial){
    let  listaHistorial=''
    for (const item of historial){
        listaHistorial= listaHistorial + `
        accion: ${item.accion}
        operacion: ${item.operacion}
        numeros: ${item.a}, ${item.b}
        resultado: ${item.resultado}
        `
    }
    return listaHistorial
}
alert (renderizarHistorial(historial))

const elementoHistorial = {
    accion: 'calcular',
    operacion:'-',
    a:5,
    b:2,
    resultado: 3
}
    function agregarAlHistorial(elementoHistorial){
        historial.push(elementoHistorial)
    }
    function obternerHistorial(){
        return historial
    }

    agregarAlHistorial({
        accion: ' calcular',
        operacion:'+',
        a: 1,
        b: 2,
        resultado: 3
    })
        agregarAlHistorial({
        accion: ' calcular',
        operacion:'+',
        a: 15,
        b: 2,
        resultado: 27
    })
    console.log (renderizarHistorial(historial))