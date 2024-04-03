# Class

- A class is a blueprint for creating objects with specific properties and methods already attached to it.

```ts
class Department {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  describe() {
    console.log("Department: " + this.name);
  }
}

console.log(new Department("IT"));
console.log(new Department("IT").describe());
```

![alt text](image.png)

## this

```ts
const accounting = new Department("Accounting");
accounting.describe();

const accountingCopy = { describe: accounting.describe };
accountingCopy.describe(); //undefined
// just a dummy object, not base on any class
```

```ts
class Department {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
  }
}
```

- `this: Department` is a type of `this` keyword, it means that `this` keyword must be an instance of `Department` class.
- Make below code error, because the accountingCopy object is not an instance of `Department` class.

```ts
const accountingCopy = { describe: accounting.describe };
accountingCopy.describe(); //undefined
// just a dummy object, not base on any class
```

```ts
const accountingCopy2 = { name: "DUMMY", describe: accounting.describe };
accountingCopy2.describe(); //Department: DUMMY
```

> ts see: OK,hmm the object have the name property, so it's OK

```ts
const accountingCopy3 = { describe: accounting.describe.bind(accounting) };
accountingCopy3.describe(); //Department: Accounting
```

## access modifier

```ts
class Department {
  name: string;
  employees: string[] = [];

  constructor(name: string) {
    this.name = name;
  }

  describe() {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("Accounting");
accounting.describe();

accounting.addEmployee("Hoang");
accounting.addEmployee("Hai");
accounting.employees[2] = "Anna"; //problem

for (const employee of accounting.employees) {
  console.log(employee);
}
```

> problem is that we can access the employees array directly and change it.

```ts
class Department {
  name: string;
  private employees: string[] = [];

  constructor(name: string) {
    this.name = name;
  }

  describe() {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("Accounting");
accounting.describe();
accounting.addEmployee("Hoang");
accounting.addEmployee("Hai");
accounting.printEmployeeInformation();
```

## Shorthand Initialization

```ts
class Department {
  private employees: string[] = [];

  constructor(private name: string) {}

  describe() {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}
```

## Readonly

- Same as final in Java

```ts
class Department {
  private employees: string[] = [];

  constructor(private readonly id: string, private name: string) {}

  describe() {
    console.log(`Department: (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}
```

## Inheritance

```ts
class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("d1", ["Hoang"]);
it.addEmployee("Hoang");
it.addEmployee("Duong");
it.describe();

it.setName("New Name Here");

it.printEmployeeInformation();
console.log(it);
```

## Overriding Properties & The "protected" Modifier

```ts
class Department {
  protected employees: string[] = [];

  constructor(private readonly id: string, private name: string) {}

  describe() {
    console.log(`Department: (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class AccountingDepartment extends Department {
  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addEmployee(employee: string): void {
    if (employee === "Hoang") {
      return;
    }
    this.employees.push(employee);
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}
```

## Getters & Setters

```ts
class Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  constructor(private readonly id: string, private name: string) {}

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
}
```

- If we do not have a value to return, we can throw an error.

```ts
console.log(accounting.mostRecentReport);
accounting.addReport("Something went wrong...");
//failed

accounting.addReport("Something went wrong...");
console.log(accounting.mostRecentReport);
//work
```

- Access the setter method like property

```ts
accounting.mostRecentReport = "Year End Report";
```

## Static Methods & Properties

- Static methods and properties are attached to the class itself, not to instances of the class.
- Often used for utility functions that you want to group or map to a class.

```ts
class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static createEmployee(name: string) {
    return { name };

```

- return { name } = return {name : name}

## Abstract Classes

- Abstract classes are classes that are meant to be extended, but not instantiated directly.

```ts
abstract class Department {
  static fiscalYear = 2020;
  protected employees: string[] = [];

  constructor(protected readonly id: string, protected name: string) {}

  static createEmployee(name: string) {
    return { name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
}
```

- Must define the return type of the method in the abstract class.
- Abstract class are useful when you want all classes base on some other class share some common method or properties.
- Abstract class can have abstract method

## Singleton

- Ensure that a class has only one instance and provide a global point of access to it.
- We can have a more than one IT department, but we want to have only one accounting department.

```ts
class AccountingDepartment extends Department {
  private lastReport: string;
  static fiscalYear = 2020;

  private static instance: AccountingDepartment;

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    return (this.instance = new AccountingDepartment("d2", []));
  }
}

//ensure we can't call 'new' on it
//it only access inside the class only
//because we cannot create a new instance of the class, we can only get the instance of the class by static method
```

- we only have the one instance of the class, even call the `getInstance` method multiple times.

```ts
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
```

## Interfaces

- Interfaces are a way to define the structure of an object.

### Using interface with class

- Why do we need the same type constructor

```ts
interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

type Person = {
  name: string;
  age: number;

  greet(phrase: string): void;
};
```

- we could replace the interface with a type, but the interface is more commonly used for this purpose.
- when you define an interface, it must be clear that you want to describe the structure of an object.
- Interface can be implemented by a class make an contract with class, make multiple inheritance.

```ts
interface Greetable {
  name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user1: Greetable;

user1 = new Person("Hoang");

user1.greet("Hi there - I am");
```
