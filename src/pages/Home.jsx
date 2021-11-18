import React from "react";
import Contador from "../components/Contador/Contador";
import Header from "../components/Header/Header";
import { Link } from "react-router-dom";


const Home = () =>{
    
    return(
        <>
        <Header/>
        <h2>inicio e-comerce de solana</h2>
        <Link to="/store"><button>ver store</button></Link>
        <Contador/>
        
        </>
    )
}

export default Home;
