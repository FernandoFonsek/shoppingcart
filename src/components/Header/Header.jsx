import React, {useContext} from "react";
import DarkModeContext from "../context/DarkModeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";




import "../../css/Header.css"

const Header =() => {

    const {darkMode, handleDarkMode, contador} = useContext(DarkModeContext)

    console.log(darkMode)

    return(
    <div className={darkMode ? "dark flex justify-around items-center" : "ligh flex justify-around items-center"} >
        <button onClick={handleDarkMode} className={darkMode ? "hamburger hamburger--emphatic -ml-10" : "hamburger hamburger--emphatic is-active -ml-10"   } type="button">
            <span className="hamburger-box">
                <span className="hamburger-inner"></span>
            </span>
        </button>
        <div>
            <h1 className="text-balck font-bold">E-comerce</h1>
        </div>
        <div className="flex items-center text-center">  
            <FontAwesomeIcon className="-mr-2" icon={faCartArrowDown} />
            <div className="bg-balck pb-6">
                <h5 className={darkMode ? "bg-blueLight text-balck rounded-full w-6 h-6 text-center text-xs pt-1":"bg-pink text-balck rounded-full w-6 h-6 text-center text-xs pt-1"}>{contador}</h5>
            </div>   
        </div>
    </div>
    
    )
}
export default Header;