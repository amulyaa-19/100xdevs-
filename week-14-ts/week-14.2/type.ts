// type User = {
//   name: string;
//   age: number;
// }
// function isLegal(user: User){
//   return user.age>18
// }

type Employees = {
  name:string;
  startDate: string;
}
type Manager = {
  name: string;
  department: string;
}
type TeamLead = Employees & Manager;
let e: Employees = {
  name: "amulya",
  startDate: "01-02-2024"
}
let m: Manager = {
  name: "amulyaa",
  department:"CSE"
}
let t: TeamLead ={
  name:"amulya",
  startDate:"09-01-2024",
  department:"CSE"
}


