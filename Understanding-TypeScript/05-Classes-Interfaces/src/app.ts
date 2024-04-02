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

console.log(new Department("IT"));
console.log(new Department("IT").describe());

const accounting = new Department("Accounting");
accounting.describe();

//this

const accountingCopy = { describe: accounting.describe };
accountingCopy.describe(); //undefined

const accountingCopy2 = { name: "DUMMY", describe: accounting.describe };
accountingCopy2.describe(); //Department: DUMMY

const accountingCopy3 = { describe: accounting.describe.bind(accounting) };
accountingCopy3.describe(); //Department: Accounting

// private and public

accounting.addEmployee("Hoang");
accounting.addEmployee("Hai");
// accounting.employees[2] = "Anna";

// for (const employee of accounting.employees) {
//   console.log(employee);
// }

accounting.printEmployeeInformation();
