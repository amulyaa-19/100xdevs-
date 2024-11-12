// interface Address{
//   city: string;
//   country: string;
//   pincode: number;
// }

// interface User{
//   name: String;
//   age: number;
//   address: Address
// }

// interface Office{
//   address: Address
// }

// let user: User = {
//   name: "Amulya",
//   age: 21,
//   address: {
//     city: "Ranchi",
//     country: "India",
//     pincode: 13293,
//   },
// };

// function isLegal(user: User): boolean{
//   if(user.age>18){
//     return true
//   }
//   else{
//     return false
//   }
// }

// const ans = isLegal(user);
// if(ans){
//   console.log("I am legal")
// }else{
//   console.log("I am illegal")
// }


class Shape{

  area(){
    console.log("hi i am area")
  }
}

class Rectangle extends Shape{
  width: number;
  height: number;

  constructor(){
    super()
    this.width = 1;
    this.height = 2;
  }
}

const r = new Rectangle()
r.area();

interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

class Employee implements Person {
  name: string;
  age: number;

  constructor(n: string, a: number) {
      this.name = n;
      this.age = a;
  }

  greet(phrase: string) {
      console.log(`${phrase} ${this.name}`);
  }
}

