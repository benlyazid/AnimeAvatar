require("dotenv").config();
const connectToMongoose = require("./utils/database").connectToMongoose;
const express = require("express");
const apiRoutes = require("./routes/route.api");
var cors = require("cors");
const app = express();
const http = require("http").Server(app);
const utils = require("./utils/utils");

const io = require("socket.io")(http, {
  cors: {
    origin: "*",
  },
});

global.io = io;
app.use(cors());
app.use(apiRoutes);

app.use((req, res, next) => {
  res.status(404).send("Page Not Found");
});

connectToMongoose()
.then((res) => {
  io.on("connection", async (socket) => {
    io.emit("sendStatistiques",  global.statistiques);
  });
  
  http.listen(8080, async () => {
    console.log("Server is running on port 8080");
    global.statistiques = await utils.getStatistiques()


    });
  })
  .catch((err) => {
    console.log("ERROR ON CONNECT....\n" + err);
  });
