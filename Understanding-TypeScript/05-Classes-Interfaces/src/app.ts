abstract class Department {
  // private id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, private name: string) {
    this.name = name;
  }

  abstract describe(this: Department): void;

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

  describe() {
    console.log("IT Department - ID: " + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  static fiscalYear = 2020;
  private static instance: AccountingDepartment;
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

  private constructor(id: string, private reports: string[]) {
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

  describe() {
    console.log("Accounting Department - ID: " + this.id);
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    return (this.instance = new AccountingDepartment("d2", []));
  }
}

// const accounting = new AccountingDepartment("d2", []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

accounting.addReport("Something went wrong...");
accounting.printReports();

accounting.addEmployee("Max");
accounting.addEmployee("Hoang");

accounting.printEmployeeInformation();
