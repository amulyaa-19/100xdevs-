const express = require("express") ;
const jwt = require('jsonwebtoken');
const JWT_SECRET = "randomText";
const app = express();

const users = [];
app.use(express.json());

// should return a random long string


function logger(req , res ,next){
    console.log(req.method + " request came")
    next();
}

app.get("/" , function(req , res){
    res.sendFile(__dirname + "frontend/index.html");
})

app.post("/signup", logger , (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
      username,
      password
  })
  res.send({
      message: "You have signed up"
  })
});


app.post("/signin", logger , (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
      const token = jwt.sign({
          username: user.username
      }, JWT_SECRET);

      user.token = token;
      res.send({
          token
      })
      console.log(users);
  } else {
      res.status(403).send({
          message: "Invalid username or password"
      })
  }
});

function auth(req , res ,next){
    const token = req.headers.token;
    const decodedData = jwt.verify(token , JWT_SECRET);
    if(decodedData.username){
        req.username = decodedData.username;
        next()
    }else{
        res.json({
        message: "You are not logged in"
        })
    }
}



app.get("/me",logger , auth ,function (req, res) {
    const token = req.headers.authorization;
    const userDetails = jwt.verify(token, JWT_SECRET);//used to verify i can decode it



    if(decodedData.username){
      let foundUser = null;

      for(let i = 0 ;i<users.length ; i++){
        if(users[i].username === req.username){
            foundUser = users[i];
        }
      }
      res.json({
        username: foundUser.username,
        password: foundUser.password
      })
    }
    
})
app.listen(3009)
