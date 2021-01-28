console.log('tarea3')
function segundosTotales(segundosUno,segundosDos,segundosTres,segundosCuatro,segundosCinco){
    const totalSegundos = (segundosUno+segundosDos+segundosTres+segundosCuatro+segundosCinco)%60;
    return totalSegundos;
}

var x = function segundosMinutos(segundosUno,segundosDos,segundosTres,segundosCuatro,segundosCinco){
    const segundosEnMinutos = Math.floor((segundosUno+segundosDos+segundosTres+segundosCuatro+segundosCinco)/60);
    return segundosEnMinutos;
}


function minutosTotales(minutosUno,minutosDos,minutosTres,minutosCuatro,minutosCinco,x){
    const totalMinutos = ((minutosUno+minutosDos+minutosTres+minutosCuatro+minutosCinco) + x)%60;
    return totalMinutos;
}

var y = function minutosHoras(minutosUno,minutosDos,minutosTres,minutosCuatro,minutosCinco,x){
    const minutosEnHoras = Math.floor(((minutosUno+minutosDos+minutosTres+minutosCuatro+minutosCinco) + x)/60);
    return minutosEnHoras;
}

function horasTotales(horasUno,horasDos,horasTres,horasCuatro,horasCinco,y){
    const totalHoras = (horasUno+horasDos+horasTres+horasCuatro+horasCinco+y);
    return totalHoras;
}

/*
//Esto me sirvió como prueba para ver cómo funciona una función adentro de otra función. Y una función cómo parámetro de otra.
const i=1;
const j=3;

var a = function sumaPrueba(i,j){
    return i+j;
}

var b = function restaPrueba(a){
    return a-1;
}

console.log('la respuesta es '+ b(a(i,j)));
*/

const $calculadorTiempoTotal = document.querySelector('#tiempo-total');


$calculadorTiempoTotal.onclick = function(){
    //primer video
    const horasUno = Number(document.querySelector("#horas-video-1").value);
    const minutosUno = Number(document.querySelector("#minutos-video-1").value);
    const segundosUno = Number(document.querySelector("#segundos-video-1").value);
    //segundo video
    const horasDos = Number(document.querySelector("#horas-video-2").value);
    const minutosDos = Number(document.querySelector("#minutos-video-2").value);
    const segundosDos = Number(document.querySelector("#segundos-video-2").value);
    //tercer video
    const horasTres = Number(document.querySelector("#horas-video-3").value);
    const minutosTres = Number(document.querySelector("#minutos-video-3").value);
    const segundosTres = Number(document.querySelector("#segundos-video-3").value);
    //cuarto video
    const horasCuatro = Number(document.querySelector("#horas-video-4").value);
    const minutosCuatro = Number(document.querySelector("#minutos-video-4").value);
    const segundosCuatro = Number(document.querySelector("#segundos-video-4").value);
    //quinto video
    const horasCinco = Number(document.querySelector("#horas-video-5").value);
    const minutosCinco = Number(document.querySelector("#minutos-video-5").value);
    const segundosCinco = Number(document.querySelector("#segundos-video-5").value);
    //aplicamos las funciones para que calculen los valores de horas, min, seg.
    const segundosMostrar = segundosTotales(segundosUno,segundosDos,segundosTres,segundosCuatro,segundosCinco);
    const minutosMostrar = minutosTotales(minutosUno,minutosDos,minutosTres,minutosCuatro,minutosCinco,x(segundosUno,segundosDos,segundosTres,segundosCuatro,segundosCinco));
    const horasMostrar = horasTotales(horasUno,horasDos,horasTres,horasCuatro,horasCinco,y(minutosUno,minutosDos,minutosTres,minutosCuatro,minutosCinco,x(segundosUno,segundosDos,segundosTres,segundosCuatro,segundosCinco)));
    //muestro los resultados.
    
    document.querySelector('strong').textContent = horasMostrar + ':' + minutosMostrar + ':' + segundosMostrar;
    
    return false
}
