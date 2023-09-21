import React from 'react'
import logo from '../images/logoUnis.png'
import logoZebra from '../images/logos/zebraN.png'
import cerveza from '../images/fiesta/cerveza.webp'

const FiestaZebra = () => {
    return (
        <div>
            <div className='flex px-10 h-[15vh] justify-between '>
                <img src={logo} />
                <img src={logoZebra} />
            </div>
            <div className='flex h-[80vh] '>
                <div className='grid grid-rows-2 grid-flow-col m-auto '>
                    <div className='bg-sky-700  p-5 w-60 m-5 text-white uppercase font-bold rounded hover:cursor-pointer
                        hover:bg-sky-800 transition-colors text-center'>
                        <p>Cerveza</p>
                        <br />
                        <img src={cerveza} />
                    </div>
                    <div className='bg-sky-700  p-5 w-60 m-5 text-white uppercase font-bold rounded hover:cursor-pointer
                        hover:bg-sky-800 transition-colors text-center'>
                        <p>Whisky</p>
                        <br />
                        <img src={cerveza} />
                    </div>
                    <div className='bg-sky-700  p-5 w-60 m-5 text-white uppercase font-bold rounded hover:cursor-pointer
                        hover:bg-sky-800 transition-colors text-center'>
                        <p>Piña Colada</p>
                        <br />
                        <img src={cerveza} />
                    </div>
                    <div className='bg-sky-700  p-5 w-60 m-5 text-white uppercase font-bold rounded hover:cursor-pointer
                        hover:bg-sky-800 transition-colors text-center'>
                        <p>Otro Cóctel</p>
                        <br />
                        <img src={cerveza} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FiestaZebra