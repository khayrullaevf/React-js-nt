import { React, useEffect, useState } from "react";

const ComponentC = () => {


    const [count,setCount]=useState(0);
    const [value, setValue] = useState("");
    const handleInputChange = (e) => {
      setValue(e.target.value);
      console.log(e.target.value);
    };


   useEffect(()=>{
    console.log("calling");
   },[count])







    const increment=()=>{
        setCount(count+1)
    }








  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <input type="text" placeholder='just write something' onChange=
      {handleInputChange} />
    </div>
  );
}

export default ComponentC