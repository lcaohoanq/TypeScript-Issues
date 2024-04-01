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
function addAndHandler(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
function addAndHandlerV2(n1, n2, cb) {
    var result = n1 + n2;
    var value = cb(result);
}
addAndHandler(10, 20, function (result) {
    console.log(result);
});
addAndHandlerV2(10, 20, function (result) {
    return result;
});
