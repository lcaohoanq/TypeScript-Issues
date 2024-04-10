# Module Content

## Intersection Types

## Type Guards

## Discriminated Unions

## Type Casting

---

# 1. Intersection Types

- Intersection types allow us to combine multiple types into one (base on the common properties of the types).
- Similar to the idea of extending a class in OOP.
- We can use type or interface to create an intersection type.

```ts
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};
```

```ts
interface Admin {
  name: string;
  privileges: string[];
}

interface Employee {
  name: string;
  startDate: Date;
}

interface ElevatedEmployee extends Employee, Admin {}

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};
```

> Both of the above code snippets are equivalent.

2. Type Guards

- Allow to use the advantage of the union types.
- Type guards are used to check the type of a variable at runtime.

```ts
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}
```

```ts
type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  //ensure that the property exists in the object
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}
```

```ts
printEmployeeInformation(e1);
// Name: Max, Privileges: create-server, Start Date: Wed Sep 01 2021 00:00:00 GMT+0530 (India Standard Time)

printEmployeeInformation({ name: "Manu", startDate: new Date() });
// Name: Manu, Start Date: Wed Sep 01 2021 00:00:00 GMT+0530 (India Standard Time)
// do not have privileges
```

- Class instances can also be used as type guards.

```ts
class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // if('loadCargo' in vehicle) {
  //   vehicle.loadCargo(1000);
  // }

  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}
useVehicle(v1);
useVehicle(v2);
```

# Discriminated Unions

- We have a common property in each object that is unique to that object.
- We can use that property to check the type of the object.
- Useful when working with union types.

```ts
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log("Moving at speed: " + speed);
}
```

```ts
moveAnimal({ type: "bird", runningSpeed: 10 }); //Error
moveAnimal({ type: "bird", flyingSpeed: 10 });
```

# Type casting

```ts
const userInputElement = document.getElementById("user-input")!;
// HTMLInputElement | null

userInputElement.value = "Hi there!";
// Error: Object is possibly 'null'
//so we pass the ! to tell TS that it will never be null
//but still TS does not know the type of the element, and tell that the type is HTMLElement
//and it do not have the property value
```

## Two ways of type casting

- Angle-bracket syntax

```ts
const userInputElement = <HTMLInputElement>(
  document.getElementById("user-input")!
);

userInputElement.value = "Hi there!";
```

- `as` keyword

```ts
const userInputElement = document.getElementById(
  "user-input"
)! as HTMLInputElement;

userInputElement.value = "Hi there!";
```

```ts
const userInputElement = document.getElementById("user-input");

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "Hi there!";
}
```

# Index Properties

- We can define an object with a dynamic number of properties.
- We can use index properties to define such objects.
- The index property is a property that is not known at compile time.

```ts
interface ErrorContainer {
  id: string; // this is a fixed property
  id: number; // Error

  [prop: string]: string;
  // i don't know exactly the property name, still don't know the properties count,
  //but i know that every object which is add to this interface will have a string property
}

const errorBag: ErrorContainer = {
  id: "e1",

  email: "Not a valid email!",
  username: "Must start with a capital character!",
};
```

> key is number and value is string

```ts
interface ErrorContainer {
  [prop: number]: string;
}
const errorBag: ErrorContainer = {
  1: "Not a valid email!",
  2: "Must start with a capital character!",
};
```

# Function Overloads

- We can define multiple function signatures for a function.

```ts
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}
```

# Optional Chaining

- We can use optional chaining to avoid runtime errors when accessing nested properties.

- Optional chaining is a feature that allows you to access deeply nested object properties without worrying if the property exists or not.

- The optional chaining operator `?.` permits reading the value of a property located deep within a chain of connected objects without having to expressly validate that each reference in the chain is valid.

```ts
const fetchedUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", description: "My own company" },
};

console.log(fetchedUserData?.job?.title);
//if any meet undefined, it will return undefined and not continue to the next property
//if not use optional chaining, it will throw an error
```

# Nullish Coalescing

- The nullish coalescing operator `??` is a logical operator that returns its right-hand side operand when its left-hand side operand is `null` or `undefined`, and otherwise returns its left-hand side operand.

```ts
const userInput = null;

const storedData = userInput ?? "DEFAULT";

console.log(storedData); //DEFAULT
```

```ts
const userInput = undefined;

const storedData = userInput ?? "DEFAULT";

console.log(storedData); //DEFAULT
```

```ts
const userInput = "";

const storedData = userInput ?? "DEFAULT";

console.log(storedData); //""
```
