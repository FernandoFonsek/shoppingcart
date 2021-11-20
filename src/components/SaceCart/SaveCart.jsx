import { useContext } from "react";
import CartContext from "../context/CartContext/CartContext";


const SaveCart = () => {

    const {state, dispatch} = useContext(CartContext)
    console.log(state?.cantidad.sort())
    return (
        <div>
                {/* <h3>{state?.cart?.cant}</h3> */}
        {state?.cart?.map(item => 
        <div className="w-2/4 p-0.5 md:w-2/4 md:px-2 md:py-1 lg:w-1/4 lg:px-4 lg:py-2 flex flex-wrap">
        <div key={item?.id} className="flex-col border border-blue rounded-lg mx-auto bg-blueLight">   
            <img className="rounded-t-lg" src={item.url} alt={item.name}/>
            <div className="px-1 py-2">
                <h3 className="text-white text-sm">{item.name}</h3>
                <h4 className="text-blue">Catpunk</h4>
                <h4>{item.und}</h4>
                <h4>{item.cantidad}</h4>
                <div className="flex justify-between">
                    <button className=" border-full rounded-full px-2 bg-celeste font-bold"></button>
                    <button className=" border-full rounded-full px-2 bg-pink font-bold" onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item })}>Eliminar</button>
                </div>
            </div>
        </div>
        </div>
        )}
    </div>
    )
}

export default SaveCart;
