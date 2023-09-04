const MIN=1;
const MAX=100;

const MAX_COL=10;
const MAX_FIL=10;

const matriz=[];

let num=MIN;

for (let fila = 0;fila <MAX_FIL;fila++) {
    matriz.push([]);
    for (let columna =0; columna < MAX_COL; columna++) {
       matriz[fila][columna]=num;
       num++;
    }
    
}
console.table(matriz);