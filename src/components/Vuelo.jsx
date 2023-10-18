import React from 'react'

const Vuelo = ({ info }) => {
    return (
        <div className={`${info.color == 'azul' ? 'bg-[#ffffff] ' : 'bg-[#c8cedd]'}
        grid grid-cols-4 p-2 justify-around place-items-center  text-[9px] text-center lg:text-base`}>
            <p className=' font-bold'>{info.hora}</p>
            {info.vuelo ? <img src={info.vuelo} alt="" className='w-2/3 lg:w-1/3'/> : <p className=' font-extrabold text-orange-400'>{info.texto}</p> }
            <div>
            {info.colorTexto ? <p className=' font-bold  text-orange-400'>{info.destino}</p> : <div className=' font-bold'>{info.destino}</div>}
            {info.desc ? <p className=' font-bold'>{info.desc}</p> : ''}
            </div>
            <p className={`font-black uppercase ${info.estado==='aterrizó' && 'text-[#e13838]' } ${info.estado=='despegó' && 'text-[#43c32a]'} `}>{info.estado}</p>
        </div>
    )
}

export default Vuelo