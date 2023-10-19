import React from 'react'
import logo from '../images/LogoUnis.png'
import GI2408T from '../images/GI-2408T.png'
import GA2408T from '../images/GA-2408T.png'
import axios from "axios";

const Gainscha = () => {

  const handleNacional = async e => {
    e.preventDefault()
    const nombrehost = 'HOST_GAINSCHA_1'
    const { data } = await axios.post(`http://192.168.0.182:3001/print`, {nombrehost})
    console.log('HandleNacional');
  }
  const handleInternacional = async e => {
    e.preventDefault()
    const nombrehost = 'HOST_GAINSCHA_2'
    const { data } = await axios.post(`http://192.168.0.182:3001/print`, {nombrehost})
    console.log('HandleINterNacional');
  }

  return (
    <>
      <div className='flex h-[10vh] p-2 place-items-center'>
        <img src={logo} className='h-12' />
      </div>
      <p className='text-center uppercase font-bold text-5xl'>PAQUETERIA GAINSCHA</p>

      <div className='grid grid-cols-2 text-center p-10 font-bold uppercase text-3xl  place-items-center'>
        <p>Envios Nacionales</p>
        <p>Envios Internacionales</p>
        <div
        onClick={handleInternacional} 
        className='bg-sky-700 py-3 mt-2 h-80 text-white uppercase font-bold rounded hover:cursor-pointer
                            hover:bg-sky-800 transition-colors disabled:bg-gray-400 w-2/3 flex place-items-center justify-center' >
          <img src={GI2408T} className=' w-2/3' />
        </div>

        <div
          onClick={handleNacional}
          className='bg-sky-700 py-3 mt-2 h-80 text-white uppercase font-bold rounded hover:cursor-pointer
                            hover:bg-sky-800 transition-colors disabled:bg-gray-400 w-2/3 flex place-items-center justify-center'>
          <img src={GA2408T} className=' w-2/3' />
        </div>

      </div>
    </>
  )
}

export default Gainscha