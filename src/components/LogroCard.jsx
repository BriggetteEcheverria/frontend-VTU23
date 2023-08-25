import React from 'react'

/*Componente de una card para mostrar logros en Buscar mis logros */

const LogroCard = ({ logroImg, logroNombre, logro }) => {
    return (
        <>
            <div className='shadow-[#a8d0d2] shadow-inner p-5 rounded-lg bg-[#a8d0d243]'>
                <p className='font-bold text-[#2d5151] text-sm'>{logroNombre}</p>
                <img src={logroImg} alt="" className={` rounded-full ${logro.isActive ? '' : 'grayscale'}`} />
            </div>
        </>
    )
}

export default LogroCard