import React from "react";

const InfoHeader = () =>{
    const rut = "https://hkgwtdvfyh.medianetwork.cloud/unsafe/600x600/filters:format(webp)/www.arweave.net/quNx7upiJ0rSg7gRYhmOlqyrUkKfZ8sjUn1QhLY70wg/data.png"

 return(
     <div className="w-1/5 m-auto my-40">
        <img src={rut} alt="logo" className="rounded-full" />
     </div>
 )   
}

export default InfoHeader;