import { isFunctionTypeNode } from "typescript";

// let x: number = 1; //this is how we tell compiler it is a number in typescript like we say int x = 1 in java
// console.log(x);

// // function greet(firstName: string){
// //   console.log("Hello " + firstName)
// // }

// // greet(" amulya");

// function sum(a: number, b: number){
//   return a + b;
// }
// console.log(sum(5,8));

// function isLegal(age: number){
//   if(age>18){
//     return true;
//   }
//   else{
//     return false;
//   }
// }
// console.log(isLegal(5));

// function delayedCall(fn: () => void){
//   setTimeout(fn, 1000);
// }

// delayedCall(function() {
//   console.log("hello");
// })

// let newGreet = () => {
//   console.log("hi there")
// };

// function greet(user: {
//   name: string,
//   age: number
// }){
//   console.log("Hello " + user.name)
// }

// let user = {
//   name: "amulya",
//   age: 21
// }

// greet(user) 

interface User {
	firstName: string;
	lastName: string;
	email: string;
	age: number;
}

function isLegal(user: User) {
    if (user.age > 18) {
        return true
    } else {
        return false;
    }
}