// Window es objeto del BOM
// setTimeout -> ejecuta una funcion "x" tiempo en ms.
let contador = 1;
function mensaje() {
    document.write(`<p>Esta es una prueba de setTimeout, N= ${contador}</p>`);
    
    if (contador === 6) {
        //Logica para detener un setInterval ((Para eso creamos la variable)
        clearInterval(idInterval);
    }
    contador++;
}

// 2 argumentos, primero la funcion, luego el tiempo en ms 
// window.setTimeout(mensaje, 3000);
// setTimeout(mensaje,4000);//esta manera tamb funciona, omitiendo window
// setTimeout(() => { //si el codigo que va a ejecutar settimeout solamente en ese momento, puedo usar la funcion anonima
//     document.write(`<p>Esta es una nueva prueba</p>`)
// }, 1000); // tiempo a ejecutar

// setInterval -> Ejecuta una funcion cada "x" tiempo en ms

setInterval(mensaje,2000);
// setInterval(() => {
//     document.write(`<p>Esta es una nueva prueba</p>`)
// }, 1000); 
//* almacenamos en una variable para detenerlo
const idInterval = setInterval(mensaje,2000);
