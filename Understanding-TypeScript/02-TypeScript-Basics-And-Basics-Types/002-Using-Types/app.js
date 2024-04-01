var person = {
    name: "Luu Cao Hoang",
    age: 20,
    hobbies: ["Photography", "Bike", "Traveling"],
    role: [2, "author"],
};
// person.role.push("admin");
// person.role.push(10);
person.role = [0, "admin", "user"];
var favoriteActivities;
favoriteActivities = ["Sports"];
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
