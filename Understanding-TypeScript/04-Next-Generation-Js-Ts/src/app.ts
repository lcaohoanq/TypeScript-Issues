// Code goes here!
console.log("aello World");

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

const add = (a: number = 1, b: number = 4) => a + b;

console.log(add(3));

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];

activeHobbies.push(...hobbies);

console.log(activeHobbies);

const person = {
  name: "Hoang",
  age: 20,
};

const copiedPerson = { ...person };
console.log(copiedPerson);

const addV2 = (...numbers: [number, number]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);
