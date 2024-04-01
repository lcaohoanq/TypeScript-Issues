const person = {
  name: "Luu Cao Hoang",
  age: 20,
  hobbies: ["Photography", "Bike", "Traveling"],
  role: [2, "author"],
};

// person.role.push("admin");
// person.role.push(10);

person.role = [0, "admin", "user"];

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
