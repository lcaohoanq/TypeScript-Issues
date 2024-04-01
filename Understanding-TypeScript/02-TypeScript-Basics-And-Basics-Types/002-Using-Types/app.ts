const person = {
  name: "Luu Cao Hoang",
  age: 20,
  hobbies: ["Photography", "Bike", "Traveling"],
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
