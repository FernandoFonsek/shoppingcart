import {createContext, useState } from "react";

// create context

const DarkModeContext = createContext()
const DarkModeProvider = ({children})=>{


    const [darkMode, setDarkMode] = useState(false)
    const [contador, setContador] = useState(0);

    //funciones
    const handleDarkMode = () => setDarkMode(!darkMode)
    const handleCount = (pathname) => {
        if(pathname === "/home"){
            setContador(contador - 1)
        }else if(pathname === "/store"){
            setContador(contador + 1)
        }
    
        }


    const data = {
        darkMode,
        handleDarkMode,
        handleCount,
        contador
    }

    return <DarkModeContext.Provider value={data} >
        {children}
        </DarkModeContext.Provider>
}

export { DarkModeProvider }

export default DarkModeContext;