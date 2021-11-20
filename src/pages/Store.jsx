import React, { useState, useContext } from  "react";
import Contador from "../components/Contador/Contador";
import Header from "../components/Header/Header";
import { Link } from "react-router-dom";
import Card from "../components/Card/Card";
import InfoHeader from "../components/InfoHeader/InfoHeader";
import Search from "../components/Search/Seach";
import SaveCarts from "./SaveCarts";
import SaveCart from "../components/SaceCart/SaveCart";




const Store = () => {
//     const list =[
//         {
//             id: 1,
//             name: "3D CATPUNK #7720",
//             price: 10,
//             url: "https://hkgwtdvfyh.medianetwork.cloud/unsafe/600x600/filters:format(webp)/www.arweave.net/mbYXcky5KzwEXn4hOfQF_3mWlsan1Yh6tmRrl11k814/data.png"  
//         },
//         {
//             id: 2,
//             name: "3D CATPUNK #2002",
//             price: 20,
//             url: "https://hkgwtdvfyh.medianetwork.cloud/unsafe/600x600/filters:format(webp)/www.arweave.net/y56wltV8zNMsxk4e7pZDoqahA4ao6O-FHaGnS2ote1M/data.png"
//         },
//         {
//             id: 3,
//             name: "3D CATPUNK #3120",
//             price: 30,
//             url: "https://hkgwtdvfyh.medianetwork.cloud/unsafe/600x600/filters:format(webp)/www.arweave.net/DceaYpuWCjre66evV_OGLBUZrP-4Um8mus10ljI8iXQ/data.png"
//         },
//         {
//             id: 4,
//             name: "3D CATPUNK #8388",
//             price: 40,
//             url: "https://hkgwtdvfyh.medianetwork.cloud/unsafe/600x600/filters:format(webp)/www.arweave.net/nIS4CblB1DKNCCTwYmQfws4h4lRAM7Scvi0AIynyCJw/data.png"
//         },
//         {
//             id: 5,
//             name: "3D CATPUNK #4328",
//             price: 50,
//             url: "https://hkgwtdvfyh.medianetwork.cloud/unsafe/600x600/filters:format(webp)/www.arweave.net/RU5pvAxXhkyCwaX0VQ9itfiZUG6PR56Fma63CKRQQ1c/data.png"
//         },
//         {
//             id: 6,
//             name: "3D CATPUNK #1382",
//             price: 60,
//             url: "https://hkgwtdvfyh.medianetwork.cloud/unsafe/600x600/filters:format(webp)/www.arweave.net/4se849Lb4y4uKDv5iZPoMKASLfPZmL9qyzZoqiixMgs/data.png"
//         },
//         {
//             id: 7,
//             name: "3D CATPUNK #6872",
//             price: 70,
//             url: "https://hkgwtdvfyh.medianetwork.cloud/unsafe/600x600/filters:format(webp)/www.arweave.net/rdVYDFwWd02NMuMxYPnuWCaDmcjeZhRQTuBw1WLtDjI/data.png"
//         },
//     ]
// const [card, setCard] = useState([])
// const [total, setTotal] = useState(0)

    return(
        <div className="grid grid-cols-4 bg-blueDark gap-4"> 
            <div className="fixed bg-celeste w-full">
                <Header/>
            </div>
            <div className="col-span-4 mt-20 text-center">
                <Search/>
            </div>

            <div className="col-span-4 mt-16 ">
                <InfoHeader/>
            </div>
            <div className="col-span-4 md:col-span-1 bg-black text-white">
                <h2>inicio e-comerce de solana</h2>
                <Link to="/home"><button>ver home</button></Link>
                <Contador/>
            </div>
            <div className="col-span-4 md:col-span-3 ">
                <div className="flex-col">
                    <div className="bg-celeste mb-4">
                        <h2>Filro</h2>
                    </div>
                    <div className="flex flex-wrap">
                        <Card/>
 
                    </div>
                </div>
            </div>
            <SaveCart/>
        </div>
    )
}
export default Store;



// npm i react-router-dom@^5.3.0 react-bootstrap bootstrap@5.1.3