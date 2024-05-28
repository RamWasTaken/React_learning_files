//what we really need while creating an Dynamic app is : State and Component

// React will not Keep Track of any random variable we have to define state in a certain way.
// 
// let state={
//   count : 0
// }

import {useState} from 'react'; // useState hook will help us to define state
// so when the state changes the component will re-render 
// BY REACT

// XML not HTML
function App(){

  // useState will return an array of two elements
  // 1. state variable
  // 2. function to update the state variable
  const [count,setCount] = useState(0); //destructuring Array
  // useState(0) will set the initial value of state variable to 0
  
  // function onPressed(){
  // // count = count + 1; // this will not work
  // // we have to use the function provided by useState to update the state variable
  // useCount(count+1); // call this function with new value of state variable.
  // }
  return(
    <div>
      <ButtonComponent count={count - 1} setCount={setCount}/>
      <ButtonComponent count={count} setCount={setCount}/>
      <ButtonComponent count={count + 1} setCount={setCount}/>
    </div>
  )
}

//component for Button
function ButtonComponent(props){ //u can use props or any other name.
  function onClickHandler(){
    props.setCount(props.count+1);
  }
  return(
    <button onClick={onClickHandler} >counter {props.count}</button>
  )
}

export default App;