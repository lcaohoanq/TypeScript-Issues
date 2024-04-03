// type AddFn = (a: number, b: number) => number;

interface AddFn {
  (a: number, b: number): number;
  //without add a function name, it will be a function type
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  outputname?: string;
}

function greet(user?: Named) {
  if (user) {
    console.log("Hi, I am " + user.name);
  } else {
    console.log("Hi, I am a guest");
  }
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 30;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Do not provide name");
    }
  }
}

let user1: Greetable;

user1 = new Person("Hoang");
// user1.name = "Duong";

user1.greet("Hi there - I am");
