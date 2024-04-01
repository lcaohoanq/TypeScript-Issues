function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
}
//the function do not return undefined
//only value or void
var a = undefined; //fine
function printResultV2(num) {
    console.log("Result: " + num);
    return;
}
printResult(add(5, 12));
console.log(printResult(add(5, 12)));
