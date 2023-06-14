import { useState } from 'react'
import logo from '../images/logo.png'
import avion from '../images/avion.png'
import clienteAxios from '../config/clienteAxios'
import Alerta from '../components/Alerta'

const CheckIn = () => {

    const [id, setId] = useState('')
    const [alerta, setAlerta] = useState({})

    const handleSubmit = async e =>{
        e.preventDefault()

        if([id].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return
         }

        try {
            const{data} = await clienteAxios(`/usuarios/${id}`)
            setAlerta({
                msg: 'Imprimiendo...',
                error: false
            })
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
        }
    }

    const {msg} = alerta

    return (
        <div id='unisAirline'>
            <div className='flex flex-row-reverse h-[10vh]'>
                <img src={logo} />
            </div>
            <div className='md:flex  h-[90vh] '>
                <img src={avion} className='object-contain hidden md:block' />

                <div className='text-[#02275e] rounded-lg  my-auto bg-gray-50 p-14 m-5 sm:mx-20 shadow-md'>
                    <p className='text-left font-bold text-2xl sm:text-4xl'>¡Es hora de viajar!</p>

                    { msg && <Alerta alerta={alerta} /> }

                    <form onSubmit={handleSubmit}>
                        <div className='my-5'>
                            <label
                                className='uppercase text-[#02275e] block text-xl font-bold'
                                htmlFor='id'
                            >ID</label>
                            <input
                                autoFocus
                                id='id'
                                type='text'
                                placeholder='Escanéa tu código'
                                className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-[#02275e]'
                                value={id}
                                onChange={e=>setId(e.target.value)}
                            />
                        </div>
                        <input
                            type='submit'
                            value={'Check-in'}
                            className='bg-sky-700 w-full py-3  text-white uppercase font-bold rounded hover:cursor-pointer
                        hover:bg-sky-800 transition-colors'
                        />
                    </form>
                <nav className='lg:flex lg:justify-between'>
                    <p className='block text-center my-5 text-slate-500 uppercase text-sm '>
                    ¿No tienes tu código? <span className='font-extrabold'>Acércate a un asistente para que te ayude con tu ID</span> </p>
                </nav>
                </div>
                <img src={avion} className='object-contain block md:hidden' />
            </div>
        </div>
    )
}

export default CheckIn