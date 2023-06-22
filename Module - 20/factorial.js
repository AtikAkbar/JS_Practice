function factorial(num) {
    let element = 1;
    for (let index = 1; index <= num; index++) {
        element *= index;
    }
    return element;
}

const fact = factorial(5);
console.log(fact);
