function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

//the function do not return undefined
//only value or void

let a = undefined; //fine

function printResultV2(num: number): undefined {
  console.log("Result: " + num);
  return;
}

printResult(add(5, 12));

console.log(printResult(add(5, 12)));
