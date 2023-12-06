import React, { useState } from 'react'
import {MemoizedComponentB} from './ComponentB'


const ComponentA = () => {
    const[count,setCount]=useState(0)
    console.log('ComponentA re-render');
    const onIncrement=()=>{
        setCount(prevcount=>prevcount+1)
    }
  return (
    <div>
    ComponentA
    {count}
    <button onClick={onIncrement}>+</button>
    {/* <ComponentB/> */}
    <MemoizedComponentB/>

    </div>
  )
}

export default ComponentA

//React.memo
