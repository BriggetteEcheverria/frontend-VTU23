import React from 'react'

const Vuelo = ({ info }) => {
    return (
        <div className={`${info.color == 'azul' ? 'bg-[#02275e] ' : 'bg-[#a1a0a0]'}
        grid grid-cols-4 p-2 justify-around place-items-center h-20 text-xs text-center lg:text-base`}>
            <p className='text-white font-bold'>{info.hora}</p>
            <img src={info.vuelo} alt="" className='w-2/3 lg:w-1/3'/>
            <div className='text-white font-bold'>{info.destino}</div>
            <p className={`text-white font-black uppercase ${info.estado=='aterrizo' && 'text-[#e13838]'} ${info.estado=='despego' && 'text-[#9af488]'}`}>{info.estado}</p>
        </div>
    )
}

export default Vuelo