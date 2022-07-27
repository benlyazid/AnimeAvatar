require('dotenv').config();

const express = require("express");
const apiRoutes = require("./routes/route.api")
var cors = require('cors')
const app = express();

app.use(cors())
app.use(apiRoutes)

app.use((req, res, next) => {
  res.status(404).send("Page Not Found");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
