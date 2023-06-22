// 20-6 Get Odd Numbers of an array and get odd Sum of an array

const myArray = [10, 15, 20, 25, 30, 35, 40];
oddNumArrSum(myArray)

function oddNumArrSum(myNums) {
    let sum = 0;
    const myOddNums = [];
    for (var i = 0; i < myNums.length; i++) {
        if (myNums[i] % 2 == 1) {
            myOddNums.push(myNums[i]);
            sum += myNums[i];
        }
    }
    console.log(myOddNums);
    console.log(sum);
}
