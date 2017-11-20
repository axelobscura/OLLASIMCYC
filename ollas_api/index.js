var express = require("express"),
    app = express(),
    port = process.env.PORT || 8080;

app.get('/', function(req,res){
  res.send("Hola");
})

app.listen(port, function(){
  console.log("APP is running " + port)
})
