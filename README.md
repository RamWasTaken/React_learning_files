# React_learning_files
here are the files i used to learn React

# Uploading to github 
cd .\React_learning_files\ [ go to correct repository which has connected to github and git]
    git status (will check the status of git what has added deleted modified)
git add File_Name.extension [ or git add . (will add all files)]
git commit -m "message write here"
    git branch(check branch if there are multiple and make sure u want to upload it to the branch which has * in front of it)
git push origin main

# Creating a React app using Vite
npm create vite@latest
-give your app a name : XYZ
-select framework : React
-select variant : JS (language?)
cd XYZ - to go to the app which is created
npm install - install all dependinces
npm run dev - run the app.

npm run build - this will create dist folder
    this command takes the React code converts it into html css js file
    now even if u delete rest of the folder its fine
    u can use the dist folder , its your Fully Functioning app , you can host it on AWS
    just making changes in it will be difficult.

# From Start to End
First create an Boiler plate app using: npm create vite@latest
install all dependencies : npm install
index.html -> main.jsx -> app.jsx -> "hello there!"
to check if its running correctly : npm run dev
then we build it using : npm run build 
now we have created html/css/js file from React files(jsx (JS Xml)) now we can upload this dist folder and get the fullyfunctioning result that what we want

# Render Dynamic VAribale inside React COmponent {}
When you have to use JS inside a React
or when u have to use JS variable inside React then 
Put it inside curly braces {}
like

let state={
  count : 0
}
return(
<div>
    <button>{state.count}</button> //this is dynamic variable
</div>
)

# Calling a Function

<button onClick={onPressed}> Counter {state.count}</button>
you dont have to call it here like onPressed() just give the name onPressed.

function onPressed(){
  state.count++;
}

this function is defined inside App function but outside the return()

# why we need State
let state={
  count : 0
}

function App(){

  function onPressed(){
  state.count++;
  console.log(state.count);
  }

  return(
    <div>
      <button onClick={onPressed}> Counter {state.count}</button>
    </div>
  )
}

export default App;

This Program here is updating the value of Count inside state 
BUT we cant see changes happening in UI bc its not re-rendering.

We want React to keep watch on State 
to do that we have to do it a certain way
that is by using useState hook

IF we use this hook to define our STATE then react will Re-render when we Upadate the State.

# So it will be like this 

import {useState} from 'react'; //imported the Hook
function App(){
  const [count,useCount] = useState(0);//intializing the state
    //defined the state and stateUpdating function's Name and also predefined state's value
  
  function onPressed(){
  useCount(count+1);//use State update function to set new value of State
  }
  return(
    <div>
      <button onClick={onPressed}> Counter {count}</button>
    </div>
  )
}

# End for counter-app

# TODO-app

in TODO-app we need a state to store the list of todos
and setState for updating the list of todos

const [todos,setTodos] = useState([]); //intializing the state

also to display those TODOs we cant just display them like {todos}
we have to stringify them using JSON.stringify(todos)
so atleast it will be printed on the screen
like this
[{"title":"Go to Gym","desc":"go to gym from 7-9","completed":false},{"title":"Go to study","desc":"go to Study from 9-10","completed":true}]

this will update dynamically when we setTodo but
its not looking good

{*Here in TODOs there are multiple TODO we need component which will render 1 TODO at a time.*}

so we created COMPONENT named TODO
which takes input like TITLE, DESC, COMPLETED.
and gives ouptput like h1:title , h2:desc, if completed : done :? not done

function Todo(props){
  return(
    <div>
      <h1> {props.title} </h1>
      <h2>{props.desc} </h2>
    </div>
  )
}

and to call this function we write
<Todo title={todos[0].title} desc={todos[0].desc} />

but as you can see it will only render 0th element from todos array
so we need to map through the todos array and render each TODO.

since we have to write map a JS function write it inside {}
{todos.map(function(todo){
  return(<todo title={todo.title} desc={todo.desc}>)
})}