// const express = require("express");
const cors = require("cors");
// const socketio = require("socket.io");
// const http = require("http");
const router = require("./router");

// const app = express();
// const server = http.createServer(app);
// // const io = socketio(server);
// // const io = socketio(server, {
// //   cors: {
// //     origin: "*",
// //   },
// // });

// const io = socketio(server, {
//   cors: {
//     origin: "your origin",
//     methods: ["GET", "POST"],
//     credentials: true,
//   },
// });

// const express = require("express");
// const app = express();
// const http = require("http");
// const server = http.createServer(app);
// const { Server } = require("socket.io");
// const io = new Server(server);

const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

const PORT = 3000;

app.use(cors());

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

app.use(router);

app.listen(PORT, () => {
  console.log("server started at", PORT);
});
