import { Fragment } from "react";
  import "bootstrap/dist/css/bootstrap.css"
import ComponentMain from "./components/ComponentMain";
import { ThemeProvider } from "./components/ThemeContext";



function App() {
  return (
    <Fragment>
      
      <ThemeProvider>
        <ComponentMain/>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;