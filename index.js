var express = require("express");
var app = express();
var ejs = require("ejs");
var path = require("path")

app.use(express.static(path.join(__dirname, 'public/style')));
app.use(express.static(path.join(__dirname, 'public/images')));
app.use(express.static(path.join(__dirname, 'public/js')));
app.use(express.static(path.join(__dirname, 'public/docs')));
app.set("view engine", "ejs");

app.get("/",function(req,res){
	res.render("index");
});

app.get("/Gallery",function(req,res){
	res.render("gallery");
});

app.get("/PressRelease", function(req,res){
	res.render("pressRelease");
});

app.listen(process.env.PORT || 3000,function(req,res){
	console.log("began listening");
});
