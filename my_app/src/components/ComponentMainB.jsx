import React from 'react'
import ComponentMainC from './ComponentMainC'

import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
const ComponentMainB = (props) => {
    const{name}=props
const {toggleTheme ,mainClass} = useContext(ThemeContext);
    
   
  return (
    <div className={mainClass}>
      B
      <ComponentMainC name={name} />
      <button type="button" onClick={toggleTheme}>
        Change Theme
      </button>
    </div>
  );
}

export default ComponentMainB