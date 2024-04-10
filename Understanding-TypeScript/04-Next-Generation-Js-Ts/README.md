# var, let, const

## var

- `var` is function scoped, `let` and `const` are block scoped.
- `let` and `const` are not hoisted.
- `const` is used when you don't want to reassign the variable and the variable is not going to change.

```js
var name = "hoang";
var name = "duong";
console.log(name); // duong

var name2 = "Hoang";
var age = 20;

if (age > 18) {
  var name2 = "deptrai";
}

console.log(name2); // deptrai
```

> `var` is function scoped, so the `name2` variable is reassigned in the if block.

## let

> let allow you to reassign the variable, but you can't redeclare the variable.

```js
let job = "Developer";
job = "BA";

console.log(job); // BA

let name = "hoang";
let name = "duong"; // SyntaxError: Identifier 'name' has already been declared
```

## const

> const doesn't allow you to reassign the variable.

```js
const name = "hoang";
name = "duong"; // TypeError: Assignment to constant variable.
```

# Type of functions

## Function Declaration

```js
function add(a, b) {
  return a + b;
}
```

## Function Expression

```js
const add = function (a, b) {
  return a + b;
};
```

```ts
const printOutput = (output: string | number) => console.log(output);

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);
// the printOutput function take a number or a string
// and return void, take argument is output and print it
```

## Arrow Function

```js
const add = (a, b) => a + b; (js)
const add = (a: number; b: number) => a + b; (ts)
```

> if have only one statement, you can remove the curly braces and the return keyword.

## No parameter

```ts
const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", () => {
    console.log("Clicked");
  });
}

if (button) {
  button.addEventListener("click", (e) => console.log(e));
}
```

> () => {} is a function that doesn't take any parameter.

## Default parameter

```ts
const add = (a: number, b: number = 1) => a + b;
console.log(add(5)); // 6
```

```ts
const add2 = (a: number = 1, b: number) => a + b;
console.log(add2(5));
// Expected 2 arguments, but got 1.
```

```ts
const add = (a: number = 1, b: number) => a + b;
console.log(add(6, 3)); // 9
```

```ts
const add = (a: number = 1, b: number = 4) => a + b;
console.log(add(3)); //7
```

- Default parameter must be at the end of the parameter list.
- If you want to set the default value for the first parameter, you have to set the default value for the second parameter.

# Spread Operator

```ts
const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];

activeHobbies.push(hobbies);
//Argument of type 'string[]' is not assignable to parameter of type 'string'.
```

```ts
activeHobbies.push(hobbies[0], hobbies[1]);
//This approach may work, but it's not a good approach.
```

- So this is how the spread operator comes in.
  - The spread operator allows you to pull elements out of an array or object add them as a `list of elements of that array or object`.

```ts
activeHobbies.push(...hobbies);
console.log(activeHobbies); // ["Hiking", "Sports", "Cooking"]
```

> activeHobbies is an object, object is reference type, so when you push the hobbies array into the activeHobbies array, the hobbies array is pushed by reference, not by value.

- You can spread an array in an array

```ts
const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking", ...hobbies];
```

- You can spread an object in an object

```ts
const person = {
  name: "Hoang",
  age: 20,
};

const copiedPerson = { ...person };
```

> we got a perfect copy of the original object not just of the pointer that points to the object in memory.

# Rest Parameters

- The rest parameter allows you to represent an indefinite number of arguments as an array.

```ts
const add = (a, b, c, d) => a + b + c + d;

console.log(add(1, 2, 3, 4)); //fine
```

- How about if we want to add more than 4 numbers? We can use the rest parameter.

```ts
const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 55
```

- How about i want to `limit` the number of arguments

```ts
const add = (...numbers: [number, number, number]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

console.log(add(1, 2, 3)); // work
console.log(add(1)); // Expected 3 arguments, but got 1.
console.log(add(1, 2, 3, 4)); // Expected 3 arguments, but got 4.
```

> reduce method work such that it perform an operation on every element of the array and return a single output.

# Array and Object Destructuring

## Array Destructuring

```ts
const hobbies = ["Sports", "Cooking"];
const [hobby1, hobby2] = hobbies; //this is where hobby1 and hobby2 is declared and initialized
```

- It goes through the hobbies array pulls out
  - the first element and stores it in `hobby1`
  - the second element and stores it in `hobby2`

```ts
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
```

## Object Destructuring

```ts
const person = {
  name: "Hoang",
  age: 20,
};

const { name, age } = person;
console.log(name, age); // Hoang 20

// rename the variable

const { name: myName, age: myAge } = person;
console.log(myName, myAge); // Hoang 20
```
