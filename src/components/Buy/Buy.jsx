import React, { useContext }  from 'react'
import CartContext from '../context/CartContext/CartContext'

const Buy = () => {
    const {state} = useContext(CartContext)

    return (
        <div className="flex justify-center">
            <button className="border rounded-lg bg-pink px-2" onClick={()=>alert("successful")}>Buy Now</button>
            <h4 className="border rounded-lg bg-green px-4">{`$ ${state?.total}`}</h4>
        </div>
    )
}

export default Buy
