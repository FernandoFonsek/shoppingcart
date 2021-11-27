// import React, { useState, useContext } from  "react";
import Header from "../components/Header/Header";
import { Link } from "react-router-dom";
import Card from "../components/Card/Card";
import InfoHeader from "../components/InfoHeader/InfoHeader";
// import Search from "../components/Search/Seach";
// import SaveCarts from "./SaveCarts";
// import SaveCart from "../components/SaceCart/SaveCart";
import Filter from "../components/Filter/Filter";




const Store = () => {
    return(
        <div className="grid grid-cols-4 gap-4 bg-blueDark"> 
            <div className="fixed w-full">
                <Header/>
            </div>
            {/* <div className="col-span-4 mt-20 text-center">
                <Search/>
            </div> */}
            <div className="col-span-4 ">
                <div className="bg-footer-texture w-full bg-cover bg-center flex items-center">
                    <InfoHeader/>
                </div>
            </div>
            <div className="col-span-4 md:col-span-1 bg-black text-white">
                <h2>inicio e-comerce de solana</h2>
                <Link to="/home"><button>ver home</button></Link>
                <Filter/>
            </div>
            <div className="col-span-4 md:col-span-3">  
                <div className="flex-col">
                    <div className="mb-4 bg-celeste">
                    </div>
                    <div>
                        <Card/>
                    </div>    
                </div>
            </div>
        </div>
    )
}
export default Store;
