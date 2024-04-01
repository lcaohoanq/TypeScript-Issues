# Core Types

## number

- All number, no difference between integers or floats

```
1, 5.3, -10
```

## string

- All text values

```
"Hi", 'Hi', `Hi`
```

## boolean

- Just these two, no "truthy" or "falsy" values

```
true, false
```

# Type Assignment && Type Inference

> variable_name: type

```ts
let a = 1;
const b = "Hi";
const sum = (a: number, b: number) => a + b;
```

- TypeScript will automatically infer the type of the variable based on the value assigned to it.
- It means: if you assign a number to a variable, TypeScript will infer the type of that variable as a number.

```ts
const a = 1; //hover and receive const a: 5

let a = 1; //hover and receive let a: number
let a: number = 1; //same as above but may redundant

let c;
c = 1; //hover and receive let c: any

let d: number;
d = "hello"; // error: Type '"hello"' is not assignable to type 'number'.

let result = sum(1, 2); //hover and receive const result: number
result = "hello"; // error: Type '"hello"' is not assignable to type 'number'.
```
