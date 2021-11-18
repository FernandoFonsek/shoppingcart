import React, { useContext} from "react";
// import { useNavigate, useLocation } from "react-router-dom";
import DarkModeContext from "../context/DarkModeContext";
/////////


/////////////

const Contador = () => {

    const {pathname, handleCount, contador} = useContext(DarkModeContext)

    console.log(pathname)


    return (
        <>
        <button onClick={()=>handleCount(pathname)}>{pathname==="/home"? "sumar":pathname==="/store"? "restar":null}</button>
        <h3>{contador}</h3>
        </>
    )
}
export default Contador;