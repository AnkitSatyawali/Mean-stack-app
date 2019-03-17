const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const postsRoutes = require("./routes/posts");
const userRoutes = require("./routes/user");
const config = require("./config/database");

const app = express();
//Jz60PJO2FMC69zvW

mongoose.connect(config.database,{ useNewUrlParser: true })
.then(() => {
    console.log('Connected to database');
},
err => {
    console.log('Connection failed');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use("/images",express.static(path.join(__dirname,"images")));
app.use("/",express.static(path.join(__dirname,"./frontend/dist")));
/*app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers",
    	"Origin,X-Requested-With,Content-Type,Accept,Authorization");
    res.setHeader("Access-Control-Allow-Methods",
    	"GET, POST, PATCH, PUT, DELETE, OPTIONS");
    next();
});*/

app.use("/api/posts",postsRoutes);
app.use("/api/user",userRoutes);
app.use((req,res,next) => {
   res.sendFile(path.join(__dirname,"./frontend/dist","index.html"));
});
module.exports = app;