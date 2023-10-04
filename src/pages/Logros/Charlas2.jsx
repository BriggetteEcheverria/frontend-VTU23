import React, { useState, useEffect } from 'react'
import logo from '../../images/logoUnis.png'
import Alerta from '../../components/Alerta'
import clienteAxios from '../../config/clienteAxios'
import { useSearchParams } from 'react-router-dom'

const Charlas2 = () => {

    const [idUsuario, setIdUsuario] = useState('')
    const [logro, setLogro] = useState('')
    const [flag, setFlag] = useState(false)
    const [alerta, setAlerta] = useState('')

    //Evento cuando envia el formulario
    const handleSubmit = async e => {
        e.preventDefault()
        //valida que no este vacio el input
        if ([idUsuario].includes('')) {
            //setea el campo usuario vacio
            setIdUsuario('')
            //muestra alerta
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return
        }

        // Asigna el logro al cliente que se ha ingresado en el input
        try {
            //manda por post el id del logro y el id del usuario para asignarle el logro
            const { data } = await clienteAxios.post('/usuarios/asignarLogro', { idLogro, idUsuario })
            //setea el campo usuario vacio
            setIdUsuario('')
            //muestra alerta
            setAlerta({
                msg: 'Logro añadido correctamente',
                error: false
            })

        } catch (error) {
            //setea el campo usuario vacio
            setIdUsuario('')
            //muestra alerta
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
        }
    }
    const { msg } = alerta
    return (
        <>
            <div className='flex h-[10vh]'>
                <img src={logo} />
            </div>
            <div className='flex flex-col h-[80vh] justify-center items-center'>
                <div className='flex'>
                    <img src={'../src/images/logros/zkteco/zkteco_logroConferencia.png'} className='lg:w-1/4 p-5 w-1/2' />
                    <img src={'../src/images/logros/unitech/unitech_logroConferencia.png'} className='lg:w-1/4 p-5 w-1/2' />
                </div>

                {msg && <Alerta alerta={alerta} />}
                <label htmlFor="codigo" className='text-[#02275e] block text-xl font-bold'> LOGRO CHARLA ZKTECO - UNITECH</label>
                {/* Formulario para agregar logro a un usuario */}
                <form onSubmit={handleSubmit}>
                    <input
                        autoFocus
                        id='codigo'
                        type='text'
                        placeholder='Lea el código del cliente'
                        className='w-64 mt-3 p-3 border rounded-xl bg-gray-50 text-[#02275e]'
                        value={idUsuario}
                        onChange={e => setIdUsuario(e.target.value)}
                    />
                </form>
            </div>
        </>
    )
}

export default Charlas2