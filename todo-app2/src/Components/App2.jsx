import React, { Children } from 'react'
import { Todo } from './Todo'

export const App2 = () => {
  return (
    <TodoWrapper>
      <Todo title={"hey there"} desc={'this is des'} done={false} />
    </TodoWrapper>
  )
}

function TodoWrapper({children}){
    return(
        <div style={{border:"2px solid black", padding:"20"}} >
            {children}
        </div>
    )
}