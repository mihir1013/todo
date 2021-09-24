var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");



var app = express();
app.set('view engine','ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
var i1=[];

app.get("/",function(req,res){
    res.render("list",{newListItems:i1});
})
app.post("/",function(req,res){
      i = req.body.n;
    // res.render("list",{newListItem:i})
    i1.push(i);
    res.redirect("/");
})


app.listen(3000,function(){
    console.log("Listening to port 3000");
})