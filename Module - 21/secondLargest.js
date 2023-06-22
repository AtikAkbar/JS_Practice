const array = [2, 3 ,9 , 56, 8, 23, 95, 44, 28];
console.log(findSecondLargest(array));

function findSecondLargest(array) {

    let largest = array[0];
    let secondLargest = array[1];

    if (largest < secondLargest) {
        let temp = largest;
        largest = secondLargest;
        secondLargest = temp;
    }

    for (let index = 0; index < array.length; index++) {
        if (array[index] > largest) {
            secondLargest = largest;
            largest = array[index];
        } else if (array[index] < largest && array[index] > secondLargest) {
            secondLargest = array[index];
        }
        
    }
    return secondLargest;
}
