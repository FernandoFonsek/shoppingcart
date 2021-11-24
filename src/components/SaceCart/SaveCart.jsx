import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext/CartContext";


const SaveCart = () => {
    //context
    const {state, dispatch} = useContext(CartContext)

    return (
        <div>
        {state?.cart?.map(item => 
        <div className= "flex justify items-center" >
            <div className={ "w-2/4 p-0.5 md:w-2/4 md:px-2 md:py-1 lg:w-1/4 lg:px-4 lg:py-2 flex flex-wrap" }>
                <div key={item.id} className="flex-col border border-blue rounded-lg mx-auto bg-blueLight">   
                    <img className="rounded-t-lg" src={item.url} alt={item.name}/>
                    <div className={"px-1 py-2"}>
                        <h3 className="text-white text-sm">{item.name}</h3>
                        <h4 className="text-blue">{item.name}</h4>
                        <h4>{item.und}</h4>
                        <h4>{item.price * item.amount}</h4>
                        <div className="flex justify-between"> 
                            <button className=" border-full rounded-full px-2 bg-celeste font-bold">{item.price}</button>
                            <button className=" border-full rounded-full px-2 bg-pink font-bold" onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item })}> eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={()=> dispatch({type: "ADD_TO_CART", payload: item })} className="mx-4 border bg-pink">subir</button>
                <button onClick={()=> dispatch({type: "REMOVE_ONE_PRODUCT", payload: item })}  className="mx-4 border bg-pink">bajar</button>
            </div>
            <div>
                <h4>{item.amount}</h4>
            </div>
        </div> 
            
        )}
        <div>
            <Link to="/store">go store</Link> 

            <p className="bg-pink"> Redux Thunk
Firebase auth</p>   
        </div>   

    </div>
    )
}

export default SaveCart;
