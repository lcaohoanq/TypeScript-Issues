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

const accounting = new Department("Accounting");
accounting.describe();

const accountingCopy = { describe: accounting.describe };
accountingCopy.describe(); //undefined

const accountingCopy2 = { name: "DUMMY", describe: accounting.describe };
accountingCopy2.describe(); //Department: DUMMY

const accountingCopy3 = { describe: accounting.describe.bind(accounting) };
accountingCopy3.describe(); //Department: Accounting
