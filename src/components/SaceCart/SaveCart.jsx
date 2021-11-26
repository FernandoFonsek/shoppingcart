import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";


const SaveCart = () => {
    //context
    const {state, dispatch} = useContext(CartContext)

    return (
        <div className="flex flex-wrap ">
            {state?.cart?.map(item => 
            <div className="w-2/4 p-0.5 sm:w-1/3 lg:w-1/4  ">
                    <div key={item.id} className="flex-col border border-blue rounded-lg bg-blueLight">   
                        <img className="rounded-t-lg" src={item.url} alt={item.name}/>
                        <div className={"px-1 py-2"}>
                            <h3 className="text-white text-sm">{item.name}</h3>
                            <h4 className="text-blue">Catpunk</h4>
                            <h4>{item.price * item.amount}</h4>
                            <div className="flex justify-between"> 
                                <button className=" border-full rounded-full px-2 bg-celeste font-bold">{item.price}</button>
                                <button className=" border-full rounded-full px-2 bg-pink font-bold" onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item })}> eliminar</button>
                            </div>
                            <div className="flex justify-center mt-1 text-xs text-indigo-600 items-center ">
                                <button onClick={()=> dispatch({type: "ADD_TO_CART", payload: item })} className="mx-2 px-2 border rounded-full"><FontAwesomeIcon icon={faPlusCircle}/></button>
                                <button onClick={()=> dispatch({type: "REMOVE_ONE_PRODUCT", payload: item })}  className="mx-2 px-2 border rounded-full"><FontAwesomeIcon icon={faMinusCircle}/></button>
                            </div>
                        </div>
                </div>

        </div> 
            
        )}
    </div>
    )
}

export default SaveCart;

        //     <div>
        //         <button onClick={()=> dispatch({type: "ADD_TO_CART", payload: item })} className="mx-4 border bg-pink">subir</button>
        //         <button onClick={()=> dispatch({type: "REMOVE_ONE_PRODUCT", payload: item })}  className="mx-4 border bg-pink">bajar</button>
        //     </div>
        //     <div>
        //         <h4>{item.amount}</h4>
        //     </div> 


        // <div>
        //     <Link to="/store">go store</Link> 

        //     <p className="bg-pink"> Redux Thunk
        //         Firebase auth</p>   
        // </div>   