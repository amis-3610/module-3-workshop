//the TypeScript way...

type User = {
    name: string;
    age: number;
    message: string;
}

const user: User = {
    name: 'Brutus',
    age: 22,
    message: 'Go Bucks'
}

console.log(user);
console.log(user.name);
console.log(user.message);
console.log(user.age);

// user.age = "String";