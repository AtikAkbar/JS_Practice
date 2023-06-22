// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...

/*
    fibo[3] = fibo[2] + fibo[1]
    fibo[4] = fibo[3] + fibo[2]
    fibo[50] = fibo[49] + fibo[48]

    fibo[n] = fibo[n-1] + fibo[n-2]
*/

const fibo = [0, 1];
for (let index = 2; index < 15; index++) {
    fibo[index] = fibo[index-1] + fibo[index-2];
}
// console.log(fibo);


// console.log(Math.abs(-74));

const a = 5;
console.log(a);