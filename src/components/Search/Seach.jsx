import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../../styles/Header.css"

const Search = () => {


    return (
        // <div className=""> 
            <div className="absolute search">
                <input className="outline-none rounded-full inputdr " type="text" placeholder="Search" required="required"></input>
                <div className="absolute top-0 right-0 bg-pink rounded-full cursor-pointer w-20">
                    <FontAwesomeIcon icon={faSearch} />
                </div>
            </div>
        // </div>
    )
}

export default Search;
