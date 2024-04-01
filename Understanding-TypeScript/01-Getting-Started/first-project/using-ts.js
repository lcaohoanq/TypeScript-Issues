// '!' means it will never be null
// as HTMLInputElement is used to tell the type of the element
var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(parseInt(input1.value), parseInt(input2.value)));
    // console.log(add(+input1.value, +input2.value));
});
