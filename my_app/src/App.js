import { Navigate, Route, Routes } from "react-router-dom";
import Register from "./Components/Register";
import Home from "./Components/Home";
import Login from "./Components/Login";
import About from "./Components/About";


function App() {


  const isLoggedIn=localStorage.getItem('email')&&localStorage.getItem('password')
  console.log(isLoggedIn);
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
         {isLoggedIn?<Route path="/about" element={<About/>} />:<Route path="/about" element={<Navigate to='/register' />} />}
      </Routes>
    </>
  );
}

export default App;