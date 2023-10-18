import React, { useEffect, useState } from 'react'
import logo from '../images/logoUnis.png'
import Alerta from '../components/Alerta'
import clienteAxios from '../config/clienteAxios'

const PuntuacionVR = () => {

    const [alerta, setAlerta] = useState('')
    const [nombre, setNombre] = useState('')
    const [inputBuscador, setInputBuscador] = useState('')
    const [isUser, setisUser] = useState(false)
    const [id, setId] = useState('')
    const [puntuacion, setPuntuacion] = useState('')
    //Evento de submit para buscar al Cliente form
    const handleSubmitBuscar = async e => {
        e.preventDefault()
        //Verificar que no este vacio el campo
        if ([inputBuscador].includes('')) {
            //Set alerta de error
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            //Set vacio todos los campos y deshabilitar boton
            setNombre('')
            return
        }

        try {
            //Query get para obtener datos del contacto
            const { data } = await clienteAxios(`/usuarios/${inputBuscador}`)
            console.log(data);
            setId(data._id)
            setisUser(true)
            //Set informacion apra mostrar en los campos
            setNombre(data.nombre)
            //Borrar input para buscar
            setInputBuscador('')
            //Set alerta sin error
            setAlerta({
                msg: '',
                error: false
            })


        } catch (error) {
            console.log(error);
            //Set alerta con Error
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
            //Set campos en vacio

        }

    }
    const handleSubmitPuntuacion = async e => {
        e.preventDefault()
        //Verificar que no este vacio el campo
        if ([puntuacion].includes('')) {
            //Set alerta de error
            setAlerta({
                msg: 'Elige un horario',
                error: true
            })

            return
        }
        try {
            //Query get para obtener datos del contacto
            const { data } = await clienteAxios.post(`/usuarios/puntuacionVR/${id}`,{ puntuacion })
            setAlerta({
                msg: 'Puntaje Guardado',
                error: false
            })
            setTimeout(() => {
                setAlerta({
                    msg: '',
                    error: false
                })
            }, 2000);
            setNombre('')
            setisUser(false)
    
            setPuntuacion('')


        } catch (error) {
            console.log(error);
            //Set alerta con Error
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
            //Set campos en vacio
            setNombre('')
            setisUser(false)
            setPuntuacion('')
            setTimeout(() => {
                setAlerta({
                    msg: '',
                    error: false
                })
            }, 3000);
        }

    }
    const { msg } = alerta
    return (
        <>
            <div >
                <div className='flex h-[10vh]'>
                    <img src={logo} />
                </div>

                <div className='mt-20 justify-center lg:w-2/3 mx-auto'>
                    <p className='uppercase text-center font-bold text-2xl  text-[#02275e] sm:text-2xl'>Ingresar Puntuación Sala VR</p>
                    <div className='flex justify-center'>
                        {msg && <Alerta alerta={alerta} />}
                    </div>
                    {/* Formulario buscar asistente */}
                    <form onSubmit={handleSubmitBuscar} action="" className='text-[#02275e] rounded-lg  my-auto  m-2 sm:mx-20 shadow-md flex justify-between place-items-center'>
                        <input
                            autoFocus
                            autoComplete='off'
                            id='cedula'
                            type='text'
                            placeholder='Escanéa el código QR del jugador'
                            className='w-full m-5 p-3 border rounded bg-gray-50 text-[#02275e]'
                            value={inputBuscador}
                            onChange={e => setInputBuscador(e.target.value)}
                        />
                    </form>
                    {/* Formulario para imprimir QR */}
                    <div className='text-[#02275e] rounded-lg   bg-[#02275e] my-auto p-8 m-3 sm:mx-20 shadow-md'>
                        <form onSubmit={handleSubmitPuntuacion}>

                            <div className='my-2'>
                                <label
                                    className=' text-white block text-xl font-bold'
                                    htmlFor='nombre'
                                >Nombre:</label>
                                <input
                                    readOnly
                                    id='nombre'
                                    type='text'
                                    placeholder='Nombre'
                                    className='read-only:bg-gray-200 w-full mt-3 p-3 border rounded-xl bg-gray-50 text-[#02275e]'
                                    value={nombre}
                                />
                            </div>
                            <div className='my-2'>
                                <label
                                    className=' text-white block text-xl font-bold'
                                    htmlFor='nombre'
                                >Puntuación:</label>
                                <input
                                    readOnly={isUser? false : true}
                                    id='nombre'
                                    type='text'
                                    placeholder='Ingresa Puntuación'
                                    className='read-only:bg-gray-200 w-full mt-3 p-3 border rounded-xl bg-gray-50 text-[#02275e]'
                                    value={puntuacion}
                                    onChange={e => setPuntuacion(e.target.value)}
                                />


                            </div>


                            <input
                                disabled={isUser ? false : true}
                                type='submit'
                                value={'Enviar'}
                                className='bg-sky-700 w-full py-3 mt-2  text-white uppercase font-bold rounded hover:cursor-pointer
                              hover:bg-sky-800 transition-colors disabled:bg-gray-400'
                            />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PuntuacionVR