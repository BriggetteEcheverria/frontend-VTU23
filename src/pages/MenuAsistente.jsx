import React from 'react'
import logo from '../images/logoUnis.png'
import { Link } from 'react-router-dom'
import Sidebar from '../components/SidebarAsistente'

const MenuAsistente = () => {
    return (
        <Sidebar>
            <div id='fondoMenu'>
                <div className='flex h-[10vh] mb-9'>
                    <img src={logo} />
                </div>
                {/* lg:px-96 */}
                <div className='justify-center text-center flex flex-col lg:px-80'>
                    <Link to={'/menu-logros'} className='bg-[#02275e] m-3 py-10 text-white uppercase font-bold rounded hover:cursor-pointer
                    hover:bg-sky-800 transition-colors text-center'>
                        Logros
                    </Link>
                    <Link to={'/podio-recompensas'} className='bg-[#02275e] m-3 py-10 text-white uppercase font-bold rounded hover:cursor-pointer
                    hover:bg-sky-800 transition-colors text-center'>
                        Podio Recompensas
                    </Link>
                    <Link to={'/itinerario'} className='bg-[#02275e] m-3 py-10 text-white uppercase font-bold rounded hover:cursor-pointer
                    hover:bg-sky-800 transition-colors text-center'>
                        Itinerario
                    </Link>
                </div>
            </div>
        </Sidebar>
    )
}

export default MenuAsistente