class Department {
  // private id: string;
  // private name: string;
  private employees: string[] = [];

  constructor(private id: string, private name: string) {
    this.name = name;
  }

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

const accounting = new Department("D1", "Accounting");
accounting.describe();
