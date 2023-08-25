import React from 'react'
import logo from '../../images/logoUnis.png'
import { Link } from 'react-router-dom'

const MenuLogros = () => {
    return (
        <div id='fondoMenu'>
            <div className='flex h-[10vh] p-1'>
                <img src={logo} />
            </div>
            {/* Menu de todos las marcas para ingresar a los logros */}
            <div className='justify-center text-center flex flex-col lg:px-80'>
                <Link to={'/buscar-logros'} className='bg-[#02275e] m-5 py-10 text-white uppercase font-bold rounded hover:cursor-pointer
                    hover:bg-sky-800 transition-colors text-center'>
                    Buscar mis Logros
                </Link>
                <Link to={'/menu-conseguir-logros?marca=zebra'} className='bg-[#02275e] m-5 py-10 text-white uppercase font-bold rounded hover:cursor-pointer
                    hover:bg-sky-800 transition-colors text-center'>
                    Logros Zebra
                </Link>
                <Link to={'/menu-conseguir-logros?marca=zkteco'} className='bg-[#02275e] m-5 py-10 text-white uppercase font-bold rounded hover:cursor-pointer
                    hover:bg-sky-800 transition-colors text-center'>
                    Logros Zkteco
                </Link>
                <Link to={'/menu-logros'} className='bg-[#02275e] m-5 py-10 text-white uppercase font-bold rounded hover:cursor-pointer
                    hover:bg-sky-800 transition-colors text-center'>
                    Logros Unitech
                </Link>
                <Link to={'/menu-logros'} className='bg-[#02275e] m-5 py-10 text-white uppercase font-bold rounded hover:cursor-pointer
                    hover:bg-sky-800 transition-colors text-center'>
                    Logros iMin
                </Link>
                <Link to={'/menu-logros'} className='bg-[#02275e] m-5 py-10 text-white uppercase font-bold rounded hover:cursor-pointer
                    hover:bg-sky-800 transition-colors text-center'>
                    Logros Gainscha
                </Link>
                <Link to={'/menu-logros'} className='bg-[#02275e] m-5 py-10 text-white uppercase font-bold rounded hover:cursor-pointer
                    hover:bg-sky-800 transition-colors text-center'>
                    Logros Citizen
                </Link>
            </div>
        </div>
    )
}

export default MenuLogros