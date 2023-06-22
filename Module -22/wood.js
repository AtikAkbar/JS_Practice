/**
 * fixed: per item wood requirement
 * chair -> 3cf
 * table -> 10cf
 * bed -> 50cf
 * 
 * vary: quantity
 */

function woodCalculator(chair, table, bed) {
    const perChair = 3;
    const perTable = 10;
    const perBed = 50;

    return chair * perChair + table * perTable + bed * perBed;
}

console.log(woodCalculator(6,1,2));