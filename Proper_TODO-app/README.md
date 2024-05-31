## Todo app

This folder contains simple todo app.
It has following features:

- Anyone can create a Todo
- Anyone can see their existing Todos
- Anyone can mark Todo as done

# Backend start

## create a BackEnd Folder

intialize a node project
ie. put a package.json file here // contains all info about what packages u are using , what all scripts u have.
steps: 
- go to BackEnd folder in terminal 
- npm init -y
> answer the questions.
> this will create a package.json file in the folder.

- npm install express
- npm install jsonwebtoken

> since only fs(library) is bundled with node, we need to install express(library) and jsonwebtoken seprately they will be added to node_modules folder and mentioned under name dependencies in package.json file.

> - node modules are heavy
## Node modules are never shared
> - we need node modules Only when running the app otherwise we can even delete them
> - but how will you know which modules to install when you are running the app on a different machine?
> - so we have package.json file which contains all the info about the packages we are using and the scripts we have.
> - so when we run npm install, it will install all the packages mentioned in the package.json file.

## someone wants to run this app on their machine
- they will clone the repo
- they will go to the BackEnd folder
- they will run npm install
- they will run npm start
- now they have all node modules and they can run the app.

## create a index.js file
- install express,
- import express
- create an express app
- use express.json() // to parse the body of the request
- create routes (get post put etc)
- listen to a port

## input validation : Zod objects
- Before we act on users request we have to check if he passed the data in correct format/schema or not
- for that we use Zod
- npm install zod
- create a new file in the BackEnd folder called types.js/schema.js (to keep track of users input schema/input type of data)
- import zod and create a schema
> const createTodo = zod.object({
    title: zod.string(),
    desc: zod.string()
    });
- export this schema : module.exports = {createTodo}
- import this schema in the index.js file : import {createTodo} from './types.js'
- now we can use this schema to validate the input data
- go to route in which u have to perform validation
- there take the payload which have to validate > const updatePayload = req.body;
- parse it through the validation methode module we created / parse it thorugh schema > const parsepayload = updateTodo.safeparse(updatePayload);
- if its valid push it to database or do what u want
- if not valid then send error to user > if(!parsepayload.success){
        res.status(411).json({
            msg: "You sent wrong input",
        });
        return;
    }
-till here we have created schema needed for our MOngoDB

## mongodb : db.js
- create db.js
- npm install mongoose
- then import mongoose in db.js > const mongoose = require('mongoose');
- connect to the MongoDB using mongoose > mongoose.connect(URL);
- here URL is URL to the databse of MOngoDB > mongodb+srv://admin:iQzubXdMZwtdEMtB@cluster0.ps2tprv.mongodb.net/todos?retryWrites=true&w=majority&appName=Cluster0
> - here admin is the username
> - iQzubXdMZwtdEMtB is the password
> - cluster0.ps2tprv.mongodb.net is the cluster name
> - todos is the database name
> - appName is the name of the app

- create a schema for todo app , which will tell database in which format we expect to store he data, making easier to store and retrieve data.
- schema : structure of the data > const todoSchema = mongoose.Schema({
    title: String,
    desc: String,
    completed: Boolean,
});

Now we have Schmea and connection to the database 
we can create a model to Actually interact with the database
- models are used to create, read, update, and delete documents from a collection
- const todo = mongoose.model('todos',todoSchema);
- export the model so that we can use it in other files > module.exports = todo;
- now we can use this model to interact with the database > todo.find() , todo.create() etc

# Frontend Start

- go to the Root folder in terminal > Proper_TODO-app (for me)
- npm create vite@latest
- complete the steps , and go to the Frontend folder (i named the app Frontend)
- npm install
- head to App.jsx and clean that file > it will look like this : 
```
import './App.css'

function App() {

  return (
    <div>
    hi there
    </div>
  )
}
export default App
```
- now we have to create components for our app
- create a new folder called components
- create a new file called CreateTodo.js
- in this file we will take input from user { title , desc}
- import this to app.jsx and render it
- now we can get Todos from user
> (export function CreateTodo(){
    return(
        <div>
        <input type="text" placeholder="Title" /> <br />
        <input type="text" placeholder="Description" /> <br />

        <button>Add Todo</button>
        </div>
    )
} like this.)
- to display Todos we will create new component called Todos.js
- in this component we will fetch the todos from the backend and display them.