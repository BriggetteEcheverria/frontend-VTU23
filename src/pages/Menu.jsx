import React from 'react'
import logo from '../images/logoUnis.png'
import { Link } from 'react-router-dom'


const Menu = () => {
    return (
        <div id='fondoMenu'>
            <div className='flex h-[10vh] p-1'>
                <img src={logo} />
            </div>
            {/* lg:px-96 */}
            <div className='h-[90vh] justify-center text-center flex flex-col lg:px-80'>
                <Link to={'/check-in'} className='bg-[#02275e] m-5 py-10 text-white uppercase font-bold rounded hover:cursor-pointer
                    hover:bg-sky-800 transition-colors text-center'>
                    Check-in
                </Link>
                <Link to={'/crear-asistente'} className='bg-[#02275e] m-5 py-10 text-white uppercase font-bold rounded hover:cursor-pointer
                    hover:bg-sky-800 transition-colors text-center'>
                    Crear Asistente
                </Link>
                <Link to={'/buscar-asistente'} className='bg-[#02275e] m-5 py-10 text-white uppercase font-bold rounded hover:cursor-pointer
                    hover:bg-sky-800 transition-colors text-center'>
                    Buscar asistente
                </Link>
                <Link to={'/logros'} className='bg-[#02275e] m-5 py-10 text-white uppercase font-bold rounded hover:cursor-pointer
                    hover:bg-sky-800 transition-colors text-center'>
                    Buscar mis logros
                </Link>
            </div>
        </div>
    )
}

export default Menu