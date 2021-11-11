import React, {createContext } from "react";

// create context

const DarkModeContext = createContext()


const DarkModeProvider = ({children})=>{

    return <DarkModeContext.Provider>
        {children}
        </DarkModeContext.Provider>
}

export { DarkModeProvider }

export default DarkModeContext;