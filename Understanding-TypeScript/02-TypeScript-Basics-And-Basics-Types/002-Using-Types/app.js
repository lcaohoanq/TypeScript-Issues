var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role[Role["AUTHOR"] = 101] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Luu Cao Hoang",
    age: 20,
    hobbies: ["Photography", "Bike", "Traveling"],
    role: Role.ADMIN,
};
// person.role.push("admin");
// person.role.push(10);
// person.role = [0, "admin", "user"];
var favoriteActivities;
favoriteActivities = ["Sports"];
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.role === Role.ADMIN) {
    console.log("is admin");
}
for (var _b = 0, _c = Object.values(Role); _b < _c.length; _b++) {
    var role = _c[_b];
    console.log(role);
}
