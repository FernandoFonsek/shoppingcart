import React, {createContext} from "react";



const CartContext = createContext();


const CartProvider = ({children}) =>{

    const handleCart = () => console.log("funciona")

const data ={
    handleCart
}

    return <CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>

}

export {CartProvider}

export default CartContext;