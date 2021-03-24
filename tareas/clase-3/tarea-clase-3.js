// Tarea 1:
// Preguntarle al usuario su nombre.

// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

//TAREA 1
/*   const nombreUsuario = prompt("Ingrese su nombre", "fabricio").toLowerCase();
if (nombreUsuario === "fabricio"){
    console.log(`Hola, Tocayo! Yo también me llamo ${nombreUsuario}`);
} else if(nombreUsuario === "agustin"){
console.log(`Hola ${nombreUsuario}, te llamás igual que mi amigo`);
} else{
    console.log(`Hola ${nombreUsuario}`);
}; */

//TAREA 2
/* const edadUsuario = Number(prompt("Ingresa tu edad"))
if (edadUsuario === 43) {
    (console.log(`Yo tambien tengo ${edadUsuario}!!`));
} else if(edadUsuario < 43){
    console.log("Pendejo, sos mas chico que yo");    
} else {
    console.log("Viejo choto!");
}; */

//TAREA 3
const dniUsuario = prompt("Tenes DNI? (Ingresa si o no)").toLowerCase().trim();
if (dniUsuario === "si") {
    {const edadUsuario = Number(prompt(" Que edad tenes?"));
        if (edadUsuario >= 18) {
            alert("Podes ingresar al boliche, tenes mas de 18");
        }else if (edadUsuario < 18) {
            alert(`Pibe, no pasas, tenes ${edadUsuario}`);
        }else {
            alert("No entiendo lo que pones");
        }
    }
}  else if(dniUsuario === "no"){
    alert("Pibe, no pasas no tenes DNI");
} else {
    alert("No entiendo lo que pones");
};