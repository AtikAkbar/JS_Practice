// signal can be red, yellow, green

// var signal = "yellow"
var signal = "blue"
// var signal = "red"
// var signal = "green"


switch (signal) {
    case "red":
        console.log("Stop!");
        break;
    case "yellow":
        console.log("Wait.");
        break;
    case "green":
        console.log("Go..");
        break;
    default:
        console.log("I am confused !!");
        break;
}