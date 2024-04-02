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
