// '!' means it will never be null
// as HTMLInputElement is used to tell the type of the element
const button = document.querySelector("button")!;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function () {
  console.log(add(parseInt(input1.value), parseInt(input2.value)));
  // console.log(add(+input1.value, +input2.value));
});
