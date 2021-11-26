import React from 'react'
import Acounts from '../components/Acounts/Acounts'
import Header from '../components/Header/Header'
import SaveCart from '../components/SaceCart/SaveCart'


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
        </div>
    )
}

export default SaveCarts
