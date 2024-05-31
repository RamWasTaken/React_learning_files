// modern way to do this is to pass whole todos Array which contains many todo object inside it
// todos=[{
//     title:"Buy Milk",
//     desc:"Go to the market and buy milk",
// },{
//     title:"Buy Bread",
//     desc:"Go to the market and buy Bread",
// },so on and so forth...]

// now you will pass that thing directly to the Todos component, while passing todos make sure its in curly braces because its a javascript expression
export function Todos({todos}){
    return(
        <div>
        {todos.map(function(todo){
            return(
                <div>
                <h1>{todo.title}</h1>
                <p>{todo.desc}</p>
                <button>{todo.completed==true ? "Completed" : "Marks as Complete"}</button>
                </div>
            )
        })}
        </div>
    )
}
// since todos contain multiple todo objects , we used map function to iterate over each todo object and render it seprately.