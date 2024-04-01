function sum(num1, num2, showResult, phrase) {
    if (showResult) {
        console.log(phrase + num1 + num2);
    }
    return num1 + num2;
}
var number1 = 5;
var number2 = 2.8;
var showResult = false;
var resultPhrase = "Result is: ";
console.log(sum(number1, number2, showResult, resultPhrase));
