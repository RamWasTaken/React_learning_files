/*
create schema for mongoDB using mongoose
{
    title:string,
    desc:string,
    completed:boolean,
}
*/
const mongoose = require('mongoose');
// const url = 'mongodb+srv://admin:iQzubXdMZwtdEMtB@cluster0.ps2tprv.mongodb.net/';
const url = "mongodb+srv://admin:iQzubXdMZwtdEMtB@cluster0.ps2tprv.mongodb.net/todos?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(url);
const todoSchema = mongoose.Schema({
    title: String,
    desc: String,
    completed: Boolean,
});

const todo = mongoose.model('todos',todoSchema); // model correspond to collection in DB
// models are used to create, read, update, and delete documents from a collection.
// you can query the collection using the model.

module.exports = { todo }