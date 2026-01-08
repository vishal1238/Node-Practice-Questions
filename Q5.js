// Create a basic website using Express that displays a registration from using a GET request and process the submitted form data using POST. use body-parser middleware to extract user input.

import express from "express";
import bodyParser from "body-parser";

const app = express();

//Middleware to parse from data
app.use(bodyParser.urlencoded({ extended: false }));

//GET request: show registaion from

app.get("/", (req, res) => {
  res.send(`
        <h2>Registration Form<h2>
        <form action = "/register" method="POST">
        Name: <input type="text" name="name" required><br><br>
        email: <input type="text" name="email" required><br><br>
        password: <input type="text" name="password" required><br><br>
         
        <button type="submit">Register</button>
        </form>
    `);
});


//POST request: process form data

app.post("/register",(req, res) => {
    const {name, email, password} = req.body;

    res.send(`
        <h2>Registration Successful</h2> 
        <p>Name: ${name}</p>   
        <p>email: ${email}</p>   
        <p>password: ${password}</p>   
    `);
});

// Start Server

app.listen(5000,() => {
    console.log(`server running at http://localhost:5000`);
});