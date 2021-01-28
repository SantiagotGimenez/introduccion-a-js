console.log('holis');


function promedioLista(lista){
    var promedio = 0;
    console.log(lista.length);
    for (let i=1;i<lista.length;i++){
        promedio = promedio + lista[i];
    }
    promedio = promedio/(Number(lista.length)-1);
return promedio
}


const todosLosLi = document.querySelectorAll('li');
var listaDeLi = [];

for(let i=1; i<todosLosLi.length;i++){
    listaDeLi = listaDeLi.concat(Number(todosLosLi[i].innerText));
}

//for (let i=1; i<listaDeLi.length;i++){
const menorNumero = Math.min.apply(Math,listaDeLi);
const mayorNumero = Math.max.apply(Math,listaDeLi);

//}

document.querySelector('#mayor').innerText = mayorNumero;

document.querySelector('#menor').innerText = menorNumero;

function contarDuplicados (arr){
    var i,
        j,
        h,
        len = arr.length,
        frecuencias = [];
    for (i=0;i<=len;i++) {
        var auxiliar = arr[i];
        var h=0;
        for (j=i+1; j<=len;j++){
            if (auxiliar == arr[j]){
                h=h+1;
                frecuencias[i] = h;
            }else {
                frecuencias[i] = h;
            }
                
            
        }

    }
return frecuencias
}
const duplicados = contarDuplicados(listaDeLi);


// function posicionMaxFrec(arr){
//     const frecuencias = contarDuplicados(arr);
//     const maxFrecuencia = Math.max.apply(Math,arr);
//     for (i=1;i<=arr.length;i++){
//         if(maxFrecuencia==frecuencias[i]){
//             var posicion=i;
//         }
//     }
// return posicion  
// }

const maxFrecuencia = Math.max.apply(Math,duplicados);
const posicionDeMax = duplicados.indexOf(maxFrecuencia);

console.log(listaDeLi[posicionDeMax]);

console.log(duplicados);
console.log(listaDeLi);
// console.log(menorNumero, mayorNumero);


//console.log(promedioLista(listaDeLi));