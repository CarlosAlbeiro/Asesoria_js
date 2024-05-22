let arreglo=[1,2,3,4,5,6,7,8,9,"hola"];

for (let i=0; i<arreglo.length;i++){
    console.log(`el valor del arreglo en la posicion ${i} es: ${arreglo[i]}`);
}

arreglo.forEach(posicion => {
    console.log(posicion);
});