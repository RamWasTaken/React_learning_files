import './App.css'

function App() {

  return (
    //replace <> with <React.Fragment> use <React.Fragment> it will not be visible in final render but still act like there parent and will let it execute without error.
    <>
      <Header title="Let's Do It" ></Header>
      <Header title="I Like to MOVE it"></Header>
    </>
  )
}

function Header(props){
return(
  <div> {props.title} </div>
)
}

export default App
