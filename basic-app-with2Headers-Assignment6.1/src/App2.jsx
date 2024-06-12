// re-rendering whole component but issuse is we want to render only small part not the whole thing 
import { useState } from "react"

export const App2 = () => {
    const [title,setTitle] = useState('Ram');
    let value = 0;
    function handleClick(){
        value = Math.random();
        setTitle(value); // setTitle(Math.random()) will do it to no need to define value then.
        console.log(value,title);
    }
    return(
        <>
            <button onClick={handleClick}>Click to change the Title</button>
            <h4>Here is the {title} </h4>
            <h3>this line shouldnt re-render</h3>
        </>
    )
}
//This re-renders whole thing 
// but we only want to re-render 1 part which is title
// since if a state is getting updated , the component which holds the state also gets updated
// thats why we 