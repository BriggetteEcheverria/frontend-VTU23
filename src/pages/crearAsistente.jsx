import React, { useState } from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import Alerta from '../components/Alerta'
import clienteAxios from '../config/clienteAxios'

const crearAsistente = () => {

    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [cedula, setCedula] = useState('')
    const [empresa, setEmpresa] = useState('')
    const [cargo, setCargo] = useState('')
    
    const [alerta, setAlerta] = useState({})

    const handleSubmit = async e =>{
        e.preventDefault()

        if([nombre, email, cedula, empresa, cargo].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return
        }

        // Crear el usuario en la API
        try {
            const { data } = await clienteAxios.post('/usuarios', {nombre, email, cedula, empresa,cargo} )
            console.log(data);
            setAlerta({
                msg: 'Asistente ingresado correctamente',
                error: false
            })

            setNombre('')
            setEmail('')
            setCedula('')
            setEmpresa('')
            setCargo('')
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
            <div className='h-[90vh] justify-center lg:w-4/5 mx-auto'>

                <div className='text-[#02275e] rounded-lg  my-auto bg-gray-50 p-8 m-3 sm:mx-20 shadow-md'>
                    <p className='uppercase text-left font-bold text-2xl sm:text-2xl'>Crear asistente</p>
                    
                    {msg && <Alerta alerta={alerta}/>}
                    
                    <form onSubmit={handleSubmit}>
                        <div className='my-2'>
                            <label
                                className=' text-[#02275e] block text-xl font-bold'
                                htmlFor='cedula'
                            >Cédula:</label>
                            <input
                                autoFocus
                                id='cedula'
                                type='text'
                                placeholder='Ingresa su cédula'
                                className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-[#02275e]'
                                value={cedula}
                                onChange={e=>setCedula(e.target.value)}
                            />
                        </div>
                        <div className='my-2'>
                            <label
                                className=' text-[#02275e] block text-xl font-bold'
                                htmlFor='nombre'
                            >Nombre:</label>
                            <input
                                id='nombre'
                                type='text'
                                placeholder='Ingresa su nombre'
                                className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-[#02275e]'
                                value={nombre}
                                onChange={e=>setNombre(e.target.value)}
                            />
                        </div>
                        <div className='my-2'>
                            <label
                                className=' text-[#02275e] block text-xl font-bold'
                                htmlFor='email'
                            >Correo:</label>
                            <input
                                id='email'
                                type='email'
                                placeholder='Ingresa su empresa'
                                className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-[#02275e]'
                                value={email}
                                onChange={e=>setEmail(e.target.value)}
                            />
                        </div>
                        <div className='my-2'>
                            <label
                                className=' text-[#02275e] block text-xl font-bold'
                                htmlFor='empresa'
                            >Empresa:</label>
                            <input
                                id='empresa'
                                type='text'
                                placeholder='Ingresa su empresa'
                                className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-[#02275e]'
                                value={empresa}
                                onChange={e=>setEmpresa(e.target.value)}
                            />
                        </div>
                        <div className='my-2'>
                            <label
                                className=' text-[#02275e] block text-xl font-bold'
                                htmlFor='cargo'
                            >Cargo:</label>
                            <input
                                id='cargo'
                                type='text'
                                placeholder='Ingresa su empresa'
                                className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-[#02275e]'
                                value={cargo}
                                onChange={e=>setCargo(e.target.value)}
                            />
                        </div>
                        <input
                            type='submit'
                            value={'Crear e imprimir QR'}
                            className='bg-sky-700 w-full py-3  text-white uppercase font-bold rounded hover:cursor-pointer
                    hover:bg-sky-800 transition-colors'
                        />
                    </form>
                    <nav className='lg:flex lg:justify-between'>
                        <Link to={'/buscar-asistente'}>
                        <p className='block text-center my-5 text-slate-500 uppercase text-sm '>
                            ¿Usuario duplicado? <span className='font-extrabold'> Encuentra al usuario aquí</span> </p>
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default crearAsistente