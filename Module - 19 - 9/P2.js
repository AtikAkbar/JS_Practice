function make_avg(a,b,c) {
    var avg = (a+b+c)/3
    console.log("Avg " + avg); // here, avg is a String
    console.log("Avg " , avg); // here, avg is an int
}

make_avg(4,5,6)