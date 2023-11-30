import React from 'react'

import { createContext,useState } from 'react'
export const ThemeContext =createContext()

export const ThemeProvider=({children})=>{
    const [theme, setTheme] = useState("ligth");




  const mainClass = theme === "ligth" ? "ligth-theme" : "dark-theme";
    



    const toggleTheme=()=>{
        setTheme((prevTheme) =>
          setTheme(prevTheme === "ligth" ? "dark" : "ligth")
        );
    }



    return(
        <ThemeContext.Provider value={{toggleTheme,mainClass}}>
            {children}
        </ThemeContext.Provider>
    )
}

   


