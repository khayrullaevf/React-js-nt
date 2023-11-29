import React, { useState } from 'react'

import mystyle from './ComponentB.module.css'

const ComponentB = () => {
const [value, setValue] = useState('');
 const handleInputChange = (e) => {
   setValue(e.target.value);
   console.log(value);
 };
  return (
    <div>
      <h1 className={mystyle.text}>ComponentB</h1>
      <input type="text" placeholder='just write something' onChange={handleInputChange} />
    </div>
  );
}

export default ComponentB