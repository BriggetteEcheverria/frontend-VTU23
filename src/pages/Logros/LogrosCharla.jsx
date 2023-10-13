import React from 'react'
import logo from '../../images/logoUnis.png'
import { Link } from 'react-router-dom'

const LogrosCharla = () => {
    return (
        <>
            <div className='flex h-[10vh]'>
                <img src={logo} />
            </div>

            <div className='h-[80vh]  justify-center text-center flex flex-col lg:px-80 '>
                <Link to={'/charlas-3'} className='bg-[#000000] m-2 py-10 text-white uppercase font-bold rounded hover:cursor-pointer
                    hover:bg-[#323232] transition-colors text-center'>
                    Logro CHARLAS: ZEBRA - ZKTECO - UNITECH
                </Link>
                <Link to={'/charlas-2'} className='bg-[#4ea434] m-2 py-10 text-white uppercase font-bold rounded hover:cursor-pointer
                    hover:bg-[#4ea434] transition-colors text-center'>
                    Logro CHARLAS: ZKTECO - UNITECH
                </Link>
                <Link to={'/obtener-logro?marca=unitech&tipo=3'} className='bg-[#006aa2] m-2 py-10 text-white uppercase font-bold rounded hover:cursor-pointer
                        hover:bg-[#006aa2] transition-colors text-center'>
                    Logro CHARLA: UNITECH
                </Link>

            </div>
        </>
    )
}

export default LogrosCharla