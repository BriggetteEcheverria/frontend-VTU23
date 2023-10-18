import React, { useState } from 'react'
import logo from '../images/logos/unisAirAzul.png'
import { Link, useSearchParams } from 'react-router-dom'
import Alerta from '../components/Alerta'
import clienteAxios from '../config/clienteAxios'
import SidebarRegistro from '../components/SidebarRegistro'

//Pagina para crear asistente

const crearAsistente = () => {

    const [nombrehost, setNombrehost] = useState('')

    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [cedula, setCedula] = useState('')
    const [empresa, setEmpresa] = useState('')
    const [cargo, setCargo] = useState('')



    const [alerta, setAlerta] = useState({})

    //Evento cuando manda submit en el form
    const handleSubmit = async e => {
        e.preventDefault()
        //Validar que los campos no esten vacios
        if ([nombre, email, cedula, empresa, cargo, nombrehost].includes('')) {
            //Set alerta
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return
        }

        // Crear el usuario en la API
        try {
            const { data } = await clienteAxios.post('/usuarios', { nombre, email, cedula, empresa, cargo })
            const id = data._id
            //Imprimir QR
            const { data2 } = await clienteAxios.post(`/printers/reciboQR`, { id, nombrehost })
            //Set alerta
            setAlerta({
                msg: 'Asistente ingresado correctamente',
                error: false
            })
            //set campos vacios despues de guardar
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

    const { msg } = alerta

    return (
        <SidebarRegistro>
            <div>
                <div className='flex flex-row-reverse h-[10vh]'>
                    <img src={logo} />
                </div>
                <div className='justify-center lg:w-4/5 mx-auto'>

                    <div className='text-white rounded-lg  my-auto bg-[#02275e] p-8 m-3 sm:mx-20 shadow-md'>
                        <p className='uppercase text-left font-bold text-xl sm:text-2xl'>Registrar asistente</p>

                        {msg && <Alerta alerta={alerta} />}
                        {/* Formulario para crear un cliente */}
                        <form onSubmit={handleSubmit}>
                            <div className='my-2'>
                                <label
                                    className=' text-white block text-xl font-bold'
                                    htmlFor='cedula'
                                >Cédula:</label>
                                <input
                                    autoComplete='off'
                                    autoFocus
                                    id='cedula'
                                    type='number'
                                    placeholder='Ingresa su cédula'
                                    className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                    value={cedula}
                                    onChange={e => setCedula(e.target.value)}
                                />
                            </div>
                            <div className='my-2'>
                                <label
                                    className=' text-white block text-xl font-bold'
                                    htmlFor='nombre'
                                >Nombre:</label>
                                <input
                                    autoComplete='off'
                                    id='nombre'
                                    type='text'
                                    placeholder='Ingresa su nombre'
                                    className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                    value={nombre}
                                    onChange={e => setNombre(e.target.value)}
                                />
                            </div>
                            <div className='my-2'>
                                <label
                                    className=' text-white block text-xl font-bold'
                                    htmlFor='email'
                                >Correo:</label>
                                <input
                                    autoComplete='off'
                                    id='email'
                                    type='email'
                                    placeholder='Ingresa su empresa'
                                    className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <div className='my-2'>
                                <label
                                    className=' text-white block text-xl font-bold'
                                    htmlFor='empresa'
                                >Empresa:</label>
                                <input
                                    autoComplete='off'
                                    id='empresa'
                                    type='text'
                                    placeholder='Ingresa su empresa'
                                    className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                    value={empresa}
                                    onChange={e => setEmpresa(e.target.value)}
                                />
                            </div>
                            <div className='my-2'>
                                <label
                                    className=' text-white block text-xl font-bold'
                                    htmlFor='cargo'
                                >Cargo:</label>
                                <input
                                    autoComplete='off'
                                    id='cargo'
                                    type='text'
                                    placeholder='Ingresa su empresa'
                                    className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                    value={cargo}
                                    onChange={e => setCargo(e.target.value)}
                                />
                            </div>


                            <label className=' text-white block text-xl font-bold' htmlFor='host'>Impresora:</label>
                            <select value={nombrehost} onChange={e => setNombrehost(e.target.value)} name="host" className="w-full mt-3 mb-3 p-3 border rounded-xl bg-gray-50  border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value='' selected>Elige una impresora</option>
                                <option value='HOST_RECIBOS_1'>HOST 1</option>
                                <option value='HOST_RECIBOS_2'>HOST 2</option>

                            </select>


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
        </SidebarRegistro>
    )
}

export default crearAsistente