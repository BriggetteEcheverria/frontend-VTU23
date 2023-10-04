import React from 'react'
import { Link } from 'react-router-dom'

/*Componente para el menu donde salen los logros por marca */

const MenuLogroPorMarca = ({ marca }) => {
  return (
    <div className='h-[80vh]  justify-center text-center flex flex-col lg:px-80 '>
      {/* {marca.routeLogroConferencia &&
        <Link to={marca.routeLogroConferencia} className='bg-[#006aa2] m-2 py-10 text-white uppercase font-bold rounded hover:cursor-pointer
                  hover:bg-[#327ea8] transition-colors text-center'>
          Logro {marca.nombre} CONFERENCIA
        </Link>} */}

      <Link to={marca.routeLogroForm} className='bg-[#000000] m-2 py-10 text-white uppercase font-bold rounded hover:cursor-pointer
                    hover:bg-[#323232] transition-colors text-center'>
        Logro {marca.nombre}
      </Link>
      <Link to={marca.routeLogroPremiumForm} className='bg-[#efac08] m-2 py-10 text-white uppercase font-bold rounded hover:cursor-pointer
                    hover:bg-[#e6b63e] transition-colors text-center'>
        Logro {marca.nombre} PREMIUM
      </Link>
      {marca.routeLogroJuego &&
        <Link to={marca.routeLogroJuego} className='bg-[#4ea434] m-2 py-10 text-white uppercase font-bold rounded hover:cursor-pointer
        hover:bg-[#5fba43] transition-colors text-center'>
          Logro {marca.nombre} JUEGO
        </Link>}

    </div>
  )
}

export default MenuLogroPorMarca