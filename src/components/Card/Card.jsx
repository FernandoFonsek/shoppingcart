import React, {useContext} from "react"
import DarkModeContext from "../context/DarkModeContext";
import CartContext from "../context/CartContext/CartContext";
import AcountsContext from "../context/AccountsContext/AcountsContext";


const Card = () =>{

    // const {  contador, handleCount, pathname} = useContext(DarkModeContext)
    const { state, dispatch} = useContext(CartContext)
    // const { stastateAcounts, dispatchAcounts } = useContext(AcountsContext)


    return(
            <div className="flex flex-wrap">
                {state?.list?.map(item =>
                <div className="w-2/4 p-0.5 sm:w-1/3 lg:w-1/4  ">
                    <div key={item.id} className="flex-col border border-blue rounded-lg bg-blueLight">
                        <img className="rounded-t-lg" src={item.url} alt={item.name}/>
                        <div className="px-1 py-2">
                            <h3 className="text-white text-sm">{item.name}</h3>
                            <h4 className="text-blue">Catpunk</h4>
                            <div className="flex justify-between">
                                <button className=" border-full rounded-full px-2 bg-celeste font-bold">{item.price}</button>
                                <button className=" border-full rounded-full px-2 bg-pink font-bold" onClick={() => dispatch({ type: "ADD_TO_CART", payload:  item })}>$comprar</button>
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </div>
    )
}

export default Card;

// <div className="flex w-2/4 p-0.5 flex-wrap">
// {state?.list?.map(item =>
// <div key={item.id} className="flex-col border border-blue rounded-lg mx-auto bg-blueLight">
//     <img className="rounded-t-lg" src={item.url} alt={item.name}/>
//     <div className="px-1 py-2">
//         <h3 className="text-white text-sm">{item.name}</h3>
//         <h4 className="text-blue">Catpunk</h4>
//         <div className="flex justify-between">
//             <button className=" border-full rounded-full px-2 bg-celeste font-bold">{item.price}</button>
//             <button className=" border-full rounded-full px-2 bg-pink font-bold" onClick={() => dispatch({ type: "ADD_TO_CART", payload:  item })}>$comprar</button>
//         </div>
//     </div>
// </div>
// )}
// </div>