import React from 'react'
import ComponentMainB from './ComponentMainB'
import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';

const ComponentMain = () => {

    const myname="Fazliddin"
    const { toggleTheme ,mainClass} = useContext(ThemeContext);
  return (
    <div>

        <div className={mainClass}>
            Hello from ComponentMain
        </div>

        <button type="button" onClick={toggleTheme}>Change Theme</button>
        <ComponentMainB name={myname}/>
    </div>
  )
}

export default ComponentMain