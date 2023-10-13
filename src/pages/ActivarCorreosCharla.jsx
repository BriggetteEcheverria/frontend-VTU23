import React from 'react'
import logo from '../images/LogoUnis.png'
import clienteAxios from '../config/clienteAxios'

const ActivarCorreosCharla = () => {


    const handleCorreos = async e =>{
        try {
            const state= true
            console.log(state);
            const { data } = await clienteAxios.post(`/app/activarCorreos`, {state} )
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className='flex h-[10vh] p-2'>
                <img src={logo} className='h-12' />
            </div>
            <div className='flex items-center justify-center m-5 py-5'>
                <input
                    onClick={handleCorreos}
                    type='submit'
                    value={'ACTIVAR CORREOS'}
                    className='bg-sky-700 w-full py-5  text-white uppercase font-bold rounded hover:cursor-pointer
                                 hover:bg-sky-800 transition-colors text-2xl'
                />
            </div>
        </>
    )
}

export default ActivarCorreosCharla