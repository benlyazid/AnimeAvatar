require('dotenv').config();
const connectToMongoose = require('./utils/database').connectToMongoose
const express = require("express");
const apiRoutes = require("./routes/route.api")
var cors = require('cors')
const app = express();
const http = require('http').Server(app);

const io = require('socket.io')(http);
const utils = require('./utils/utils')

app.use(cors())
app.use(apiRoutes)

app.use((req, res, next) => {
	res.status(404).send("Page Not Found");
});

connectToMongoose()
.then(res=>{
	app.listen(8080, () => {
		console.log("Server is running on port 8080");
		io.on('connection', (socket) => { 
			socket.on('getStatistiques', msg => {
				const statistiques = utils.getStatistiques()
				io.emit('sendStatistiques', statistiques);
			});
		});
	})
})
.catch(err => {
  console.log("ERROR ON CONNECT....\n" + err)
})
