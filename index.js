const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("./connection.js");
app.use(function(req,res,next){
	if(req.headers["x-forwarded-proto"] === "https"){
		res.redirect("http://" + req.hostname + req.url);
	}else{
		next();
	}
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require("./api/appRoutesIndex")(app);

module.exports = app