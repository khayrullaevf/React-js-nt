import React from 'react'
import  './random-imgs.css'
import { useState } from 'react'

const RandomImgs = () => {
  let [dog, setDog] = useState(
    "https://images.dog.ceo/breeds/poodle-toy/n02113624_619.jpg"
  );
const getRandomDog=()=>{
 fetch("https://dog.ceo/api/breeds/image/random")
       .then((response) => response.json())
       .then((data) => setDog(data.message))
}

  return (
    <>
      <div className="random-dog">
       
       <h2>This is a random dog</h2>
       <img src={dog} alt={dog} />
       

       <button onClick={()=>getRandomDog()}>Generate random dog</button>




      </div>
    </>
  );
}

export default RandomImgs