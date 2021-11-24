import React, {createContext, useReducer} from "react";
// import { act } from "react-dom/test-utils";

//crear el contexto
const CartContext = createContext();

//Reducer
const inicialState = {
 list :[
    {
        id: 1,
        name: "3D CATPUNK #7720",
        price: 10,
        url: "https://hkgwtdvfyh.medianetwork.cloud/unsafe/600x600/filters:format(webp)/www.arweave.net/mbYXcky5KzwEXn4hOfQF_3mWlsan1Yh6tmRrl11k814/data.png",
        und: 1 
    },
    {
        id: 2,
        name: "3D CATPUNK #2002",
        price: 20,
        url: "https://hkgwtdvfyh.medianetwork.cloud/unsafe/600x600/filters:format(webp)/www.arweave.net/y56wltV8zNMsxk4e7pZDoqahA4ao6O-FHaGnS2ote1M/data.png",
        und: 1 
    },
    {
        id: 3,
        name: "3D CATPUNK #3120",
        price: 30,
        url: "https://hkgwtdvfyh.medianetwork.cloud/unsafe/600x600/filters:format(webp)/www.arweave.net/DceaYpuWCjre66evV_OGLBUZrP-4Um8mus10ljI8iXQ/data.png",
        und: 1 
    },
    {
        id: 4,
        name: "3D CATPUNK #8388",
        price: 40,
        url: "https://hkgwtdvfyh.medianetwork.cloud/unsafe/600x600/filters:format(webp)/www.arweave.net/nIS4CblB1DKNCCTwYmQfws4h4lRAM7Scvi0AIynyCJw/data.png",
        und: 1 
    },
    {
        id: 5,
        name: "3D CATPUNK #4328",
        price: 50,
        url: "https://hkgwtdvfyh.medianetwork.cloud/unsafe/600x600/filters:format(webp)/www.arweave.net/RU5pvAxXhkyCwaX0VQ9itfiZUG6PR56Fma63CKRQQ1c/data.png",
        und: 1 
    },
    {
        id: 6,
        name: "3D CATPUNK #1382",
        price: 60,
        url: "https://hkgwtdvfyh.medianetwork.cloud/unsafe/600x600/filters:format(webp)/www.arweave.net/4se849Lb4y4uKDv5iZPoMKASLfPZmL9qyzZoqiixMgs/data.png",
        und: 1 
    },
    {
        id: 7,
        name: "3D CATPUNK #6872",
        price: 70,
        url: "https://hkgwtdvfyh.medianetwork.cloud/unsafe/600x600/filters:format(webp)/www.arweave.net/rdVYDFwWd02NMuMxYPnuWCaDmcjeZhRQTuBw1WLtDjI/data.png",
        und: 1 
    }
],
cart: [],
total: 0,
cantidad:[],
}
const reducer = (state, action) =>{
    switch (action.type) {
        case "ADD_TO_CART":
            let itemInCart = state.cart.find(item => item.id === action.payload.id)
            return itemInCart ? {
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id ? {...item, amount: item.amount ++ }: item),
                total: state.total + action.payload.price,
            } :
            {
                ...state,
                cart: [...state.cart, {...action.payload, amount: 1}],
                total: state.total + action.payload.price,
            }                       
        case "REMOVE_ONE_PRODUCT":
            let itemInCartDelete = state.cart.find(item => item.id === action.payload.id & item.amount > 0 ) 
            return itemInCartDelete ? {
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id ? {...item, amount: item.amount -- }: item),
                total: state.total - action.payload.price,
            }: {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id),
                total: state.total - action.payload.price,
            }

        case "REMOVE_FROM_CART":
        return {
            ...state,
            cart: state.cart.filter(item => item.id !== action.payload.id),
            total: state.total - action.payload.price,
        }
        default:
            return state;
    }
}
const CartProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, inicialState)
const data ={
    state,
    dispatch
}
    return <CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>
}
export {CartProvider}
export default CartContext;




{/* <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous"></link> */}