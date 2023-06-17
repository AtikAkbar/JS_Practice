function odd_even(params) {
    if (params % 2 === 0) {
        return "even"
    } else {
        return "odd"
    }
}

console.log(odd_even(5));
console.log(odd_even(6));
