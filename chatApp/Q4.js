// Build a real time chat application where multiple users can connect, send messages and receive messages instantly using Socket.io. Display Join and Disconnect notification for users.

// import { Socket } from 'dgram';
// import { disconnect } from "cluster";
import express from "express";
const http = require("http");
const { server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new server(server);

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("User connection: ", socket.id);

  //when user joins
  socket.broadcast.emit("message", "A user joined the chat");

  //Receive message from client
  socket.on("chatMessage", (msg) => {
    io.emit("message", msg);
  });

  //when user disconnects
  socket.on("disconnect", () => {
    console.log("user disconneted: ", socket.id);
    socket.broadcast.emit("message", "A user left the chat");
  });
});

server.listen(3000, () => {
    console.log("server is runnning oon http://localhost:3000");
})