import React from 'react'
import logo from '../images/logoUnis.png'
import { Link } from 'react-router-dom'

//Formulario menu prinicipal

const MenuZebra = () => {
    return (
        <div id='fondoMenu'>
            <div className='flex h-[10vh] mb-9'>
                <img src={logo} />
            </div>
            {/* lg:px-96 */}
            <div className='h-[80vh] justify-center text-center flex flex-col lg:px-80'>
                <Link to={'/equipaje-zebra'} className='bg-[#02275e] m-3 py-10 text-white uppercase font-bold rounded hover:cursor-pointer
                    hover:bg-sky-800 transition-colors text-center'>
                    Equipaje Zebra
                </Link>
                <Link to={'/menu-conseguir-logros?marca=zebra'} className='bg-[#02275e] m-3 py-10 text-white uppercase font-bold rounded hover:cursor-pointer
                    hover:bg-sky-800 transition-colors text-center'>
                    Logros Zebra
                </Link>
                <Link to={'/fiesta-zebra'} className='bg-[#02275e] m-3 py-10 text-white uppercase font-bold rounded hover:cursor-pointer
                    hover:bg-sky-800 transition-colors text-center'>
                    Fiesta Zebra
                </Link>
                
            </div>
        </div>
    )
}

export default MenuZebra