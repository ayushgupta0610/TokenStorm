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
	res.render("Index");
});

app.get("/Gallery",function(req,res){
	res.render("Gallery");
});

app.get("/PressRelease", function(req,res){
	res.render("PressRelease");
});

app.listen(3000,function(req,res){
	console.log("began listening");
});