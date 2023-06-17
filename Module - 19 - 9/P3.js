/** Write a function called make_avg() which will take an array of integer and the size of that array and return the average of those values */


function make_avg(array) {
    var sum = 0
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        sum += element;
    }
    console.log("Avg = ", sum/array.length);
}
var numbers = [2,3,4,5,6]
// var length = numbers.length

make_avg(numbers)