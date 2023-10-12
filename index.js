const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// app.get("/",(req, res)=>{
//     res.send("<h1>ComeBack in this winter</h1>");
// });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// io.on("connection", (socket) => {
//   console.log("a user connected");
//   socket.on("disconnect", ()=>{
//     console.log("user disconnected");
//   });
// });

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    //   console.log('message: ' + msg);
    // socket.broadcast.emit('hi');
    io.emit("chat message", msg);
  });
});

server.listen(3000, () => {
  console.log("Listning on port: 3000");
});
