const MIN=1;
const MAX=151;

const MAX_COL=15;
const MAX_FIL=11;

const matriz=[];

let num=MIN;

for (let fila = 0;fila <MAX_FIL;fila++) {
    matriz.push([]);
    for (let columna =0; columna < MAX_COL; columna++) {
       matriz[fila][columna]=num;
       num++;
       if(num>MAX){
        fila=MAX_FIL;
        columna=MAX_COL;
       }
    }
    
}
console.table(matriz);