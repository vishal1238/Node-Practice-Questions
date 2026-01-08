// Develop an event-based notification system where a custom event is emitted whenever a new user regtsters. Use the EventEmitter class to trigger and handle events that log user registraUon details to the console.

import EventEmitter from "events";

const userEmitter = new EventEmitter();

//Event listener (handler)
userEmitter.on("userRegistered", (user) => {
    console.log("New User Registered!");
    console.log("Name:", user.name);
    console.log("Email:", user.email);
    console.log("Time:", new Date().toLocaleString());
});

// Function to register a user
function registerUser(name, email){
    const user = {name, email};

    //EMit custom event
    userEmitter.emit("userRegistered", user);
}

//Register users
registerUser("Vishal","vishal@gmail.com")
registerUser("Rahul","rahul@gmail.com")