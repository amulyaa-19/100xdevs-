import express from "express";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();
const app = express();

app.get("/users",async (req,res)=> {
  const users = await client.user.findMany();
   res.json({
    users
   })
})

app.get("/todos/:id", async(req,res)=>{
  const id = req.params.id ;
  const users = await client.user.findFirst({
    where:{
      id:parseInt(id)
    },
    select:{
      todos: true,
      username: true,
      password: true
    }
  });
  res.json({
    users
  })
})

app.listen(3000);

async function createUser(){
  const user  = await client.user.findFirst({
  //   data:{
  //     username: "amulya",
  //     password: "1234",
  //     age: 20,
  //     city:"Delhi"
  // }
  where:{
    id:1
  },
  include: {
    todos: true
  }
})
  console.log(user)
}

createUser();