// Develop a Node.js application that connects to MongoDB and performs CRUD opertions on a collection storing user records. Use MongoDB shell commmands and Node.js intergration

import express from "express";
import { MongoClient } from "mongodb";

const app = express();
app.use(express.json());

//MongoDB connection
const url = "mongodb://localhost:27017"
const client = new MongoClient(url);

let userCollection;

// Connnect to MongoDB

async function connectDB(){
    await client.connect();
    const db = client.db("userDB");
    userCollection = db.collection("users");
    console.log("MongoDB Connected");
}
connectDB();


//Create user
app.post("/users", async(req, res) => {
    const result = await userCollection.insertOne(req.body);
    res.send(result);
});

//Read all users
app.get("/users", async(req, res) => {
    const users = await userCollection.find().toArray();
    res.send(users);
});

//UPDATE user
app.put("/user/:name", async(req, res) => {
    const result = await userCollection.updateOne(
        {name: req.params.name},
        {$set: req.body}
    );
    res.send(result);
});

//DELETE user
app.delete("/users/:name", async(req, res) => {
    const result = await userCollection.deleteOne({
        name: req.params.name 
    });
    res.send(result);
})

// server 
app.listen(9000,() => {
    console.log(`Server is running at http://localhost:9000`);
    
})