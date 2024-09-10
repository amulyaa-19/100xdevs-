const express = require("express") ;
const jwt = require('jsonwebtoken');
const path = require('path')
const JWT_SECRET = "randomText";
const app = express();

const users = [];
app.use(express.json());
app.use(express.static(path.join(__dirname, 'frontend'))); 

// should return a random long string


function logger(req , res ,next){
    console.log(req.method + " request came")
    next();
}

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

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

function auth(req, res, next) {
    const token = req.headers.token;
    try {
        const decodedData = jwt.verify(token, JWT_SECRET);
        if (decodedData.username) {
            req.username = decodedData.username;
            next();
        } else {
            res.status(401).json({
                message: "You are not logged in"
            });
        }
    } catch (error) {
        res.status(401).json({
            message: "Invalid or expired token"
        });
    }
}

app.get("/me", logger, auth, function (req, res) {
    const foundUser = users.find(user => user.username === req.username);

    if (foundUser) {
        res.json({
            username: foundUser.username,
            password: foundUser.password
        });
    } else {
        res.status(404).json({
            message: "User not found"
        });
    }
});
app.listen(3009, () => {
    console.log("Server is running on http://localhost:3009");
});
