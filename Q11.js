// Enhance an Express applicabon to validate user registration data such as email and password using express-validator. Invalid inputs should return meaningful error messages.

import express from "express";
import {body, validationResult} from "express-validator";

const app = express();

// Middleware to parse JSON data
app.use(express.json());

//Registertion route with validation
app.post("/register",
    [
        body("email")
        .isEmail()
        .withMessage("Please enter a valid email address"),

        body("password")
        .isLength({min: 6})
        .withMessage("Password must be at least 6 characters long")
    ],
    (req, res) => {
        const errors = validationResult(req);

        //If validation errors exist
        if(!errors.isEmpty()){
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

        //If validation passes
        res.status(200).json({
            success: true,
            message: "User registered successfully",
            data: req.body
        });
    }
);

app.listen(9000,() => {
    console.log(`Server running on http://localhost:9000`);
});