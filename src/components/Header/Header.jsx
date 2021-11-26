import React, {useContext} from "react";
import DarkModeContext from "../context/DarkModeContext";
import CartContext from "../context/CartContext/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import stats from "../../assets/stats.svg"
import help from "../../assets/help.svg"



import "../../css/Header.css"
import { Link } from "react-router-dom";
import Search from "../Search/Seach";

const Header =() => {
    const {state}=useContext(CartContext)
    const {darkMode, handleDarkMode, contador} = useContext(DarkModeContext)
    console.log(state?.cantidad.sort())

    let prueba = state?.cantidad.sort()
    let contado = 1;
    let valores = []
    let repetidos = []
    console.log(valores)
    console.log(repetidos)
    for (let i = 0; i < prueba.length; i++) {
        if(prueba[i+1] === prueba[i]){
            contado ++;
        }else{
            valores.push(prueba[i])
            repetidos.push(contado)
            contado = 1;
        }
    }

    return(
    <div className={darkMode ? "flex justify-around items-center bg-black-alpha" : "flex justify-around items-center"} >
        <button onClick={handleDarkMode} className={darkMode ? "hamburger hamburger--emphatic -ml-10 " : "hamburger hamburger--emphatic is-active -ml-10"} type="button">
            <span className="hamburger-box">
                <span className="hamburger-inner "></span>
            </span>
        </button>
        <div className="flex justify-center items-center">
            <Search/>
        </div>
        <div className="flex-col justify-center content-center text-white ">
            <svg className="fill-current text-white" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M38 6h-28c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4v-28c0-2.21-1.79-4-4-4zm-20 28h-4v-14h4v14zm8 0h-4v-20h4v20zm8 0h-4v-8h4v8z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>
            <p className="">Collections</p>
        </div>
        <div className="flex-col justify-center content-center text-white">
            <svg className="fill-current text-white" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M38 6h-28c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4v-28c0-2.21-1.79-4-4-4zm-20 28h-4v-14h4v14zm8 0h-4v-20h4v20zm8 0h-4v-8h4v8z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>
            <p className="">Stats</p>
        </div>
        <div className="flex-col justify-center content-center text-white">
            {/* <svg className="fill-current text-white" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M38 6h-28c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4v-28c0-2.21-1.79-4-4-4zm-20 28h-4v-14h4v14zm8 0h-4v-20h4v20zm8 0h-4v-8h4v8z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>            */}
            <img className="fill-current text-white" src={help} alt="help"></img>
            <p className="">Help</p>
        </div>
        {/* <div>
            <h1 className="text-balck font-bold">E-comerce</h1>
        </div> */}
        <div className="flex items-center text-center">  
            <FontAwesomeIcon className="-mr-2 text-white" icon={faCartArrowDown} />
            <Link to="/save" > <div className="bg-balck pb-6">
                <h5 className={darkMode ? "bg-blueLight text-balck rounded-full w-6 h-6 text-center text-xs pt-1":"bg-pink text-balck rounded-full w-6 h-6 text-center text-xs pt-1"}>
                    {state?.cart.length}
                </h5>
            </div></Link>
        </div>
    </div>
    )
}
export default Header;