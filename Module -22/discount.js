/**
 * 1st 100 ticket ---> 100tk pis
 * 101 - 200 ---> 90tk pis
 * 200+ ---> 70tk pis
 */

const num = 300;

function TotalPrice(total) {
    if (total <= 100) {
        return total * 100;
    } else if (total > 100 && total <= 200) {
        return (100 * 100) + ((total - 100) * 90);
    } else if (total > 200) {
        return (100 * 100) + ( 100 * 90) + ((total - 200) * 70);
    }
}

console.log("Total for " , num , "ticket is ", TotalPrice(num));