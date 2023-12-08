


function App() {


  const isLoggedIn=localStorage.getItem('email')&&localStorage.getItem('password')
  console.log(isLoggedIn);
  

  return (
    <>
     <h1>Lesson-9</h1>
    </>
  );
}

export default App;