const { todo } = require('./db');
const { createTodo,updateTodo } = require("./types");
// file to validate the input of the post request.

// write basic express boilerplate code,
// with express.json middleware
const express = require("express");
const app = express();

app.use(express.json());// we can parse a json body.

// expected inputs for post is 
//{
//  title: "string",
//  desc: "string",
// }
// you have to validate those inputs 
// using ZOD
app.post("/todo",async function(req,res){ //createPayload and parsePayload
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "You sent wrong input",
        });
        return;
    }
    await todo.create({
        title: createPayload.title,
        desc: createPayload.desc,
        completed: false,
    });
    res.json({
        msg: "Todo has been created in DB",
    })
})
// expected inputs for post is 
//{
//  id: "string",
// }
app.get("/todos",async function(req,res){
    const todos = await todo.find(); // this find() will return all the todos in the collection.
    // if you want a specific todo
    // todo.find({ title : "title of the todo" });
    // or anything which is able to find that todo like desc , id , status of completion , Title of the todo.
    //
    // as you can see we can do CRUD operations using the model todo which we created in db.js
    // 1st imported mongoose
    // then connected to the DB
    // then created a schema
    // then created a model : with schema and mongoose 
    // const todo = mongoose.model('todos',todoSchema);
    // then exported the model.
    res.json(todos);
})

app.put("/completed",async function(req,res){
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeparse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "You sent wrong input",
        });
        return;
    }
    // if the payload is valid put it in MongoDB.
    // update func takes 2 arguments
    // 1.what are your conditions? what do you want to update?

    await todo.update({
        _id : req.body.id, //each entry in table is assigned auto generated _id not id by mongoDB
    },{
        title : updatePayload.title,
        desc : updatePayload.desc,
        completed : true,
    })
    res.json({msg:"todo has been updated"})
})

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})