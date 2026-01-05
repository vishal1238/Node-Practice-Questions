// Q3. Create a node.js application which demonstrates the use of GET and POST method using Express.

import express from "express";
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.send("Hello! This is a GET request");
})

app.get("/user",(req, res) => {
    const name = req.query.name;
    res.send(`Hello ${name}`);
})

app.post("/user",(req, res) => {
    const name = req.body.name;
    const age = req.body.age;

    res.send(`User Created: Name = ${name}, Age = ${age}`);
})

app.listen(3000, () => 
    console.log("Server running on http://localhost:3000"  
));
