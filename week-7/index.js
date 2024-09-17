const express = require("express");
const bcrypt = require("bcrypt");
const {UserModel , TodoModel} = require("./db");
const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");
const JWT_SECRET ="asdfg1234";
const {z} = require("zod");

mongoose.connect("mongodb+srv://srivastavaamulya19:Amulya19@cluster0.dukem.mongodb.net/todo-amulya-19");
const app = express();
app.use(express.json());
 

app.post("/signup" , async function(req , res){

  // Input validation using zod
  const requiredBody = z.object({
    email:z.string().min(3).max(100).email(),
    name: z.string().min(3).max(100),
    password:z.string().min(3).max(100)
  })
  const parsedData = requiredBody.parse(req.body);
  const parsedDataWithSuccess = requiredBody.safeParse(req.body);
  
  if(!parsedDataWithSuccess.success){
    res.json({
      message:"Incorrect format",
      error: parsedDataWithSuccess.error
    })
    return
  }

  const email = req.body.email;
  const password = req.body.password;
  const name =req.body.name;

  let errorThrown = false;
  try{
  const hashedPassword = await bcrypt.hash(password , 5);
  console.log(hashedPassword);

  await UserModel.create({
    email:email,
    password: hashedPassword,
    name:name
   
  }) 
}catch(e){
  res.json({
    message:"User already exists"
  })
  errorThrown = true;
}
if(!errorThrown){
  res.json({
    message:"You are signed in"
  })
}
  
})

app.post("/signin" , async function(req , res){
  const email = req.body.email;
  const password = req.body.password;

  const user = await UserModel.findOne({
    email: email

  })
  if(!response){
    res.status(403)({
      message:"User does not exist in our db"
    })
    return 
  }

  const passwordMatch =await bcrypt.compare(password , response.password);


  if(passwordMatch){
    const token =jwt.sign({
      id: user._id.toString()
    } , JWT_SECRET);
    res.json({
      token: token
    })
  }else{
    res.status(403).json({
      message:"Incorrect credentials"
    })
  }
})

app.post("/todo"  , auth ,async function(req , res){
  const userId = req.userId;
  const title = req.body.title;
  const done = req.body.done;

  await TodoModel.create({
      userId,
      title,
      done
  });

  res.json({
      message: "Todo created"
  })
})


app.get("/todos" , auth , async function(req , res){
  const userId = req.userId;
  const title = req.body.title;
  const done = req.body.done;

  await TodoModel.create({
      userId,
      title,
      done
  });

  res.json({
      message: "Todo created"
  })

})

function auth(req , res , next){
  const token = req.headers.token;
  const decodedData = jwt.verify(token , JWT_SECRET);
 
  if(decodedData){
    req.userId = decodedData.Id;
    next();
  }
  else{
    res.status(403).json({
      message:"Incorrect credentials"
    })
  }
}

app.listen(3000);