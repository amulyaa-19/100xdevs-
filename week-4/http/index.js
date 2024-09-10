


const express = require('express')
const app = express()

let todos =[];
app.post('/' ,function (req , res){
  //create a random id for the todo
  // extract the todo titlte from the body
  todos.push({
    title,
    id
  })
})
app.delete('/' ,function (req , res){
//  extract the todo id
// remove the todo from here

})

app.delete('/' ,function (req , res){
  res.json({
    todos
  })
})





// route handlers

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000) //which port