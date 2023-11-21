// import React from "react";
// import { useState } from "react";

// const RandomImgs = () => {
//   const [x, setX] = useState(0);
//   const [y, setY] = useState(0);

//   const setRandom = () => {
//     let x = Math.floor(Math.random() * window.innerWidth);
//     let y = Math.floor(Math.random() * window.innerHeight);
//     setX(x);
//     setY(y);
//   };

//   return (
//     <>
//       <button onClick={setRandom}>Generate random image</button>

//       {x !== 0 && y !== 0 && (
//         <img
//           src="https://www.placecage.com/gif/200/200"
//           style={{ position: "fixed", top: x, left: y }}
//         />
//       )}
//     </>
//   );
// };

// export default RandomImgs;
