

import React, { useRef } from 'react'
import styles from './homepage.module.css'
const Homepage = () => {
  // const myStyle={
  //   color:'red',
  //   //this is inline style
  // }

  const inputRef=useRef(null);

  const  handleClick=()=>{
    console.log(inputRef.current.value.trim());
  }
 
  return (
    <div>
      <input  ref={inputRef} type="text" placeholder='Enter your name' />
        <button onClick={handleClick}>add</button>
      <h1 className={styles.text}>Hi</h1> 
      </div>
  )
}

export default Homepage