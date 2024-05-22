function funcionSinParametros() {
    return 1+1;
}

function funcionConParametros (numero1,numero2) {
    return numero1+numero2;
}

let resultado=(()=>{
    return 2; 
});

console.log(resultado());