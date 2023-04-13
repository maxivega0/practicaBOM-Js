function obtenerFechaHora() {
    let fechaActual = new Date();
// console.log(fechaActual);
// console.log(fechaActual.getDate()); // va del 1-31 dependiendo el mes
// console.log(fechaActual.getDay()); // 0-6
// console.log(fechaActual.getMonth()); // 0-11
// console.log(fechaActual.getFullYear());

let fecha = document.getElementById("fecha");
let hora = document.getElementById("hora");

const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const monthsOfYear = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

// jueves x de abril del x
fecha.innerHTML = `${daysOfWeek[fechaActual.getDay()]} ${fechaActual.getDate()} de ${monthsOfYear[fechaActual.getMonth()]} del ${fechaActual.getFullYear()}`;

let horaActual = fechaActual.getHours(),
minutosActuales = fechaActual.getMinutes(),
segundosActuales = fechaActual.getSeconds();

if(segundosActuales<10){
    segundosActuales = '0'+segundosActuales;
}
if(minutosActuales<10){
    minutosActuales = '0'+minutosActuales;
}
if(horaActual<10){
    horaActual = '0'+horaActual;
}
hora.innerHTML = `${horaActual}:${minutosActuales}:${segundosActuales}`;
}

setInterval(obtenerFechaHora,1000)
