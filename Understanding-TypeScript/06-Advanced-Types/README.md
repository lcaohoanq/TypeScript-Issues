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
