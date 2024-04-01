enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR,
}

const person = {
  name: "Luu Cao Hoang",
  age: 20,
  hobbies: ["Photography", "Bike", "Traveling"],
  role: Role.ADMIN,
};

// person.role.push("admin");
// person.role.push(10);

// person.role = [0, "admin", "user"];

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log("is admin");
}

for (const role of Object.values(Role)) {
  console.log(role);
}
