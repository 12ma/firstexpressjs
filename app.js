var express=require("express");
var app=express();


app.get("/",function(req,res){
  res.send("hi there,welcome to my basic project");
});
app.get("/mayank",function(req,res){
     console.log("you made the request");
res.send("hi my name is mayank");
});

app.get("/webpage/:contents",function(req,res){
 var details={
 home: "Welcome to my homepage",
 about: "Want to know about me",
 contact: "Contact me for more info",
 work: "we work for you",
}

var contents=req.params.contents.toLowerCase();
var details=details[contents];
res.send("The " + contents+ " says '" + details + "'");
});
app.get("/repeat/:message/:times",function(req,res) {
  var message=req.params.message.toLowerCase;
  var times=req.params.times;
  var result="";
  for(var i=0;i<times;i++){
    result+=message + " ";
  }
  res.send(result);
});

app.get("*",function(req,res){

 res.send("you start the server");
});
 app.listen("3060",function(){


  console.log("server has started");
});
