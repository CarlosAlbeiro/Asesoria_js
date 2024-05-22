let arreglo_multi= [ [ ["%", 7, true, "#"] , ["&", 55, false, "="] ], [ [false, 0, 99, "?"] , [true, 1000, "@", "¡"] ], [ [44, 55,
    66, 77], [1, 2, 3, 4] ] ];

let arregloMultiple=[
    [1,2,3],
    ["a","b","c"],
    [true],
    1000
];

// arreglo_multi.forEach(arreglo_1 => {
//     arreglo_1.forEach(arreglo_2 => {
//         arreglo_2.forEach(contenido => {
//             console.log("Contenido-> "+contenido);
//         });
//     });
// });

// for (let i=0; i<arreglo_multi.length;i++){
//     for( let j=0; j<arreglo_multi[i].length;j++){
//         for(let h=0;h<arreglo_multi[i][j].length;h++){
//             console.log("contenido-> "+ arreglo_multi[i][j][h]);
//         }
//     }
// }

for (let i=0;i<arregloMultiple.length;i++){
    if (arregloMultiple[i].length>0) {
        for (let j = 0; j < arregloMultiple[i].length; j++) {
            if (arregloMultiple[i][j].length>0) {
                for (let h = 0; h < arregloMultiple[i][j].length; h++) {
                    console.log("arreglo grado 3->"+arregloMultiple[i][j][h]);
                }
            }else{
                console.log("arreglo grado 2->"+arregloMultiple[i][j]);
            }
            
        }
        
    }else{
        console.log("arreglo grado 1->"+arregloMultiple[i]);
    }
}
