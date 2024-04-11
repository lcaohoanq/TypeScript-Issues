const names: Array<string> = ["Hoang", "Duong"];

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done!");
  }, 2000);
});

promise.then((data) => {
  data.split(" ");
});

console.log(promise);

function merge<T extends Object, U extends Object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

let mergeObj = merge({ name: "Hoang" }, { age: 26 });
console.log(mergeObj.name);

mergeObj = merge<{ name: string; hobbies: string[] }, { age: number }>(
  { name: "Duong", hobbies: ["walking"] },
  { age: 26 }
);

console.log(mergeObj);

function countAndDescribe<T extends { length: number }>(
  element: T
): [T, string] {
  let descriptionText = "Got no value";
  if (element.length === 1) {
    descriptionText = "Got 1 element";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Hi there!"));

console.log(countAndDescribe(["Sports", "Cooking"]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

console.log(extractAndConvert({ name: "Hoang" }, "name"));

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

let objStorage = new DataStorage<string>();
objStorage.addItem("Hoang");
objStorage.addItem("Duong");
objStorage.addItem("Nhu");
console.log(objStorage.getItems());

// Generics Utility Types

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  //the initial can be empty, because we will fill it later
  //partial type let us to create an object with all properties optional
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const namesList: Readonly<string[]> = ["Hoang", "Duong"];
// namesList.push("Nhu"); // Error
// namesList.pop(); // Error
