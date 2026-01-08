// Implement a custom express middleware that logs request method, URL and timeStamp for every incoming request. Apply the middleware globally using appendFile.use();

import express from "express";
const app = express();

//Custom middleware
const loggerMiddleware = (req, res, next) => {
    const timeStamp = new Date().toLocaleString();

    console.log(
        `[${timeStamp}] ${req.method} ${req.url}`
    );
    next(); // move to next middleware / route
};

//Apply middleware globally
app.use(loggerMiddleware);

app.get("/", (req, res) => {
    res.send("Home Page");
});

// Another route
app.get("/about", (req, res) => {
    res.send("About Page");
});

//Start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
