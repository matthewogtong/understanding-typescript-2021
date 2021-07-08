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

enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR };

const person = {
  name: "Matthew",
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.AUTHOR
};

// person.role.push('admin');
// person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // Error
}

if (person.role === Role.AUTHOR) {
    
}

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
