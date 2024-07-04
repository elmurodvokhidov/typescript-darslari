// let greet: Function;
// greet = () => {
//     console.log("Assalomu alaykum");
// };

// let add = (a: number, b: number, c: number = 25): void => {
//     console.log(a + b);
//     console.log(c);
// };

// add(5, 10);

// let add = (a: number, b: number, c: number = 25): number => {
//     return a + b;
// };

// let result: number = add(5, 10, 30);
// console.log(result);

// type sonVaText = number | string;
// type inson = { ismi: string, yoshi: sonVaText };

// let logUser = (obj: inson) => {
//     console.log(`${obj.ismi} is ${obj.yoshi} years old`);
// };

// let logUser1 = (obj: inson) => {
//     console.log(`${obj.ismi} is ${obj.yoshi} years old`);
// };

// let logUser2 = (obj: inson) => {
//     console.log(`${obj.ismi} is ${obj.yoshi} years old`);
// };

// logUser({ ismi: "Oybek", yoshi: "53" });

// let greet: (a: number, b: number) => void;
// greet = (x, y) => {
//     return x + y;
// };
// let z = greet(5, 5);
// console.log(typeof z);

// let details: (obj: { name: string, age: number }) => void;
// type person = { name: string, age: number };
// details = (user: person) => {
//     console.log(`${user.name} is ${user.age} years old`);
// };