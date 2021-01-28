console.log('Bienvenido a la tarea 2 de la clase 5');


const $modificarContenido = document.querySelector('#ok-click');

$modificarContenido.onclick = function(){
    const nombreUsuario = document.querySelector('#nombre-usuario').value;
    const apellidoUsuario = document.querySelector('#apellido-usuario').value;
    const segundoNombreUsuario = document.querySelector('#segundo-nombre-usuario').value;
    const edadUsuario = document.querySelector('#edad-usuario').value;
    const textoH1 = document.querySelector('h1').textContent;

    document.querySelector('h1').textContent = textoH1 + ', ' + nombreUsuario + "!"
    console.log(nombreUsuario+' '+segundoNombreUsuario+' '+apellidoUsuario+' de unos '+edadUsuario+' años.');
    return false
}


