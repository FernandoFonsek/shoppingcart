import React, {useContext} from "react"
import DarkModeContext from "../context/DarkModeContext";
import CartContext from "../context/CartContext/CartContext";



const Card = ({name, price, id, url}) =>{

    const {  contador, handleCount, pathname} = useContext(DarkModeContext)
    const {handleCart} = useContext(CartContext)

    return(
            <div className="w-2/4 p-0.5 md:w-2/4 md:px-2 md:py-1 lg:w-1/4 lg:px-4 lg:py-2">
                <div className="flex-col border border-blue rounded-lg mx-auto bg-blueLight">
                    
                    <img className="rounded-t-lg" src={url} alt={name}/>
                    <div className="px-1 py-2">
                        <h3 className="text-white text-sm">{name}</h3>
                        <h4 className="text-blue">Catpunk</h4>
                        <div className="flex justify-between">
                            <button className=" border-full rounded-full px-2 bg-celeste font-bold" onClick={()=>handleCart()}>{price}</button>
                            <button className=" border-full rounded-full px-2 bg-pink font-bold" onClick={() => handleCount(pathname) }>$comprar</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Card;