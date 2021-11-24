import { createContext, useReducer } from "react";

const AcountsContext = createContext()


const initialState = {
    cantidad : [],
    total : 0
}
const reducer = (state, action) =>{

    switch (action.type) {
    
        default:
           return state;
    }
}

const AcountsProvider = ({children}) =>{

    const [stateAcounts, dispatchAcounts] = useReducer(reducer, initialState )
    
    const data = {
        stateAcounts, 
        dispatchAcounts
    }

    return <AcountsContext.Provider value={data}>
        {children}
    </AcountsContext.Provider>
}


export {AcountsProvider}
export default AcountsContext;