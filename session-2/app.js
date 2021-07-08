// ** EXPLICIT OBJECT - example of explicitly defining an object
// const person: {
//     name: string;
//     age: number;
// } = {}
// ** ARRAY AND TUPLE - example of using an array and tuple in typescript
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//   name: "Matthew",
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// };
// ** ENUM - example where you should implement enum instead
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: "Matthew",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.AUTHOR
};
// person.role.push('admin');
// person.role[1] = 10;
var favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // Error
}
// if (person.role === Role.AUTHOR) {
// }
switch (person.role) {
    case Role.ADMIN:
        console.log('you have admin privileges');
        break;
    case Role.READ_ONLY:
        console.log('you have read only privileges');
        break;
    case Role.AUTHOR:
        console.log('you are an author');
        break;
}
