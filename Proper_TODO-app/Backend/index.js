import { createTodo,updateTodo } from "./types";
// file to validate the input of the post request.

// write basic express boilerplate code,
// with express.json middleware
const express = require(express);
const app = express();

app.use(express.json());// we can parse a json body.

// expected inputs for post is 
//{
//  title: "string",
//  desc: "string",
// }
// you have to validate those inputs 
// using ZOD
app.post("/todo",function(req,res){ //createPayload and parsePayload
    const validate = createTodo.safeParse(req.body);
    if(validate){
        const title = req.body.title;
        const desc = req.body.desc;
    }
})
// expected inputs for post is 
//{
//  id: "string",
// }
app.get("/todos",function(req,res){
    
})

app.put("/completed",function(req,res){
    const updatePayload = req.body;
    const parsepayload = updateTodo.safeparse(updatePayload);
    if(!parsepayload.success){
        res.status(411).json({
            msg: "You sent wrong input",
        });
        return;
    }
    // if the payload is valid put it in MongoDB.
})

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})