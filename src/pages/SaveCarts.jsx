import React from 'react'
import Acounts from '../components/Acounts/Acounts'
import Buy from '../components/Buy/Buy'
import Header from '../components/Header/Header'
import SaveCart from '../components/SaceCart/SaveCart'
import backrow from "../assets/backrow.svg"
import { Link } from "react-router-dom";


const SaveCarts = () => {

    return (
        <div className="bg-blueDark min-h-screen">
            <Header/>
            <div className="flex w-11/12  sm:w-9/12 md:w-6/12 justify-center items center mx-auto">
                <SaveCart/>
            </div>
            <div className="text-center mx-auto w-9/12">
                <Acounts/>
            </div>
            <div className="text-center mx-auto w-9/12">
                <Buy/>
            </div>
            <Link to="/"><div className="flex justify-center items-center sm:w-1/6 h-full px-2.5 py-1 border rounded-md border-blue">
              <img src={backrow} alt="Back"></img>
                    <h2 className="ml-2 text-white">BACK</h2> 
            </div></Link>
        </div>
    )
}

export default SaveCarts
