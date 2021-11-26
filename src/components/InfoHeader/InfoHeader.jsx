import React from "react";

//svg
import backrow from "../../assets/backrow.svg"
import collections from "../../assets/collections.svg"
import discord from "../../assets/discord.svg"
import graph from "../../assets/graph.svg"
import help from "../../assets/help.svg"
import note from "../../assets/note.svg"
import stats from "../../assets/stats.svg"
import twitter from "../../assets/twitter.svg"
import web from "../../assets/web.svg"


const InfoHeader = () =>{
    const rut = "https://hkgwtdvfyh.medianetwork.cloud/unsafe/600x600/filters:format(webp)/www.arweave.net/quNx7upiJ0rSg7gRYhmOlqyrUkKfZ8sjUn1QhLY70wg/data.png"

 return(
     <div className="flex-col w-full pt-20">
        <div className="w-11/12 flex text-white justify-center mx-auto"> 
            <div className="w-2/6">
                <div className="flex border rounded-md border-blue sm:w-9/12">
                    <div className="border-r border-blue border-opacity-50 w-2/6 flex justify-center items-center">
                        <div className="">
                            <img src={twitter} alt=""></img>
                        </div>
                    </div>
                    <div className="w-2/6 flex justify-center items-center">  
                        <div className="">                      
                            <img src={twitter} alt=""></img>
                        </div>
                    </div>        
                    <div className="border-l border-blue border-opacity-50 w-2/6 flex justify-center items-center">
                        <div className="">
                            <svg className="fill-current text-white" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M40 8H8c-2.21 0-3.98 1.79-3.98 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zM30 36H8v-8h22v8zm0-10H8v-8h22v8zm10 10h-8V18h8v18z"/><path d="M0 0h48v48H0z" fill="none"/></svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-2/6 flex justify-center items-center">
                <div className="sm:w-1/2">
                <img  src={rut} alt="logo" className="rounded-full border" />
                </div>
            </div>
            <div className="w-2/6">
                <div className="flex justify-end">
                    <div className="flex-col ">
                        <div className="flex border my-1.5 px-2.5 py-1 rounded-md border-blue">
                            <img src={twitter} alt="Sales"></img>
                            <h4 className="ml-2">Latest sales</h4>
                        </div>
                        <div className="flex border my-1.5 px-2.5 py-1 rounded-md border-blue">
                            <img src={twitter} alt="Price History"></img>
                            <h4 className="ml-2">Price History</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <did className="text-center">
            <h2 className="text-white font-bold text-3xl pt-2">Catpunk</h2>
            <h2 className="text-white font-bold text-2xl p-2">Where NFT utilities meet high-quality 3D art</h2>
        </did>
        <div className="sm:flex w-full sm:w-11/12 text-white justify-start mx-auto pb-10">
            <div className="w-1/4 sm:w-1/5 my-1.5  ">
                <div className="flex justify-center items-center sm:w-1/2 h-full px-2.5 py-1 border rounded-md border-blue">
                    <img src={backrow} alt="Back"></img>
                    <h2 className="ml-2">BACK</h2>
                </div>
            </div>
            <span className="flex flex-grow-0  border rounded-md border-blue">
                <div className="text-center py-1.5 px-4 border-r border-opacity-50 border-blue">
                    <h3 className="font-semibold">267 / 9999</h3>
                    <p className="font-light">Items</p>
                </div>
                <div className="py-1.5 px-4 text-center border-r border-opacity-50 border-blue">
                    <h3 className="font-semibold">207</h3>
                    <p className="font-light">Owners</p>
                </div>
                <div className="py-1.5 px-4 text-center border-r border-opacity-50 border-blue">
                    <h3 className="font-semibold">1.19 SOL</h3>
                    <p className="font-light">Floor price</p>
                </div>
                <div className="py-1.5 px-4 text-center ">
                    <h3 className="font-semibold">963 SOL</h3>
                    <p className="font-light">Volume traded</p>
                </div>
            </span>
        </div>
    </div>
 )   
}
export default InfoHeader;