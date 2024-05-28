// write basic express boilerplate code,
// with express.json middleware
const express = require(express);
const app = express();

app.use(express.json());// we can parse a json body.

// expected inputs for post is 
//{
//  title: "string",
//  desc: "string",
//  status: Boolean,
// }
// you have to validate those inputs 
// using ZOD
app.post("/todo",function(req,res){
    
})

app.get("/todos",function(req,res){
    
})

app.put("/completed",function(req,res){
    
})
