import React from 'react'
import { Link } from 'react-router-dom'

/*Componente para el menu donde salen los logros por marca */

const MenuLogroPorMarca = ({marca}) => {
  return (
    <div className='h-[80vh] justify-center text-center flex flex-col lg:px-80'>
        <Link to={marca.routeLogroForm} className='bg-[#02275e] m-5 py-10 text-white uppercase font-bold rounded hover:cursor-pointer
                    hover:bg-sky-800 transition-colors text-center'>
          Logro {marca.nombre}
        </Link>
        <Link to={marca.routeLogroPremiumForm} className='bg-[#edb810] m-5 py-10 text-white uppercase font-bold rounded hover:cursor-pointer
                    hover:bg-[#edcc10] transition-colors text-center'>
          Logro {marca.nombre} PREMIUM
        </Link>
    </div>
  )
}

export default MenuLogroPorMarca