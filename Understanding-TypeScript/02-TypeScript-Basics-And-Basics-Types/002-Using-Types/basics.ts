function sum(num1: number, num2: number, showResult: boolean, phrase: string) {
  if (showResult) {
    console.log(phrase + num1 + num2);
  }
  return num1 + num2;
}

const number1 = 5;
const number2 = 2.8;
const showResult = false;
const resultPhrase = "Result is: ";

console.log(sum(number1, number2, showResult, resultPhrase));
