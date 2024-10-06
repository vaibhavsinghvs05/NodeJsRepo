import express from "express";
import mongoose from "mongoose";
const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
//connection

const connectToDb = async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/MDB");
        console.log("Mongoose DB is Connected Successfully!!");
    }
    catch(error){
        console.log("THE ERROR YOUR ARE FACING IS: ", error);
    }
};

connectToDb();

//Schema

const userSchema = new mongoose.Schema({

    firstName:{
        type: String,
        required: true
    },
    Age:{
        type: String,
        required: true
    },
    Designation:{
        type: String,
        required: true,
        unique: true
    },
    Email:{
        type: String,
        required: true,
        unique: true
    }
}, {collection: "NodeDB"});

//model

const user = mongoose.model("User", userSchema);

app.get("/users/:id", (req, res)=>{
    res.send("This is an get request!");
});

app.post("/users", async(req, res)=>{
    try{
        const newUser = await user.create(req.body);
        console.log("User Created!");
        res.status(201).json(newUser);
    }
   catch(error){
    console.log(error);
   }
});

app.patch("/users/:id", (req, res)=>{
    res.send("This is an update user request!");
});

app.delete("/users/:id", (req, res)=>{
    res.send("This is an delete user request!");
});

app.listen(5500,()=>console.log("Server Started at 5500!"));