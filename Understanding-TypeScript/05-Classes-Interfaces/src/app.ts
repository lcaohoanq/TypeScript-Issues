class Department {
  // private id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, private name: string) {
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

  setName(name: string) {
    this.name = name;
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  static fiscalYear = 2020;

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
    // this.fiscalYear = fiscalYear;
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

  static createEmployee(name: string) {
    return { name };
  }
}

const accounting = new AccountingDepartment("d2", []);
accounting.addReport("Something went wrong...");
accounting.printReports();

accounting.addEmployee("Max");
accounting.addEmployee("Hoang");

accounting.printEmployeeInformation();
