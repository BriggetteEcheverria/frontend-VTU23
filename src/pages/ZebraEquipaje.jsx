import React from 'react'
import { useState } from 'react'
import logo from '../images/logoUnis.png'
import Alerta from '../components/Alerta'
import clienteAxios from '../config/clienteAxios'

const ZebraEquipaje = () => {

    const [id, setId] = useState('')
    const [alerta, setAlerta] = useState('')

    //Evento cuando manda submit en el form
    const handleSubmit = async e => {
        e.preventDefault()
        //Validar que los campos no esten vacios
        if ([id].includes('')) {
            //Set alerta
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return
        }

        // Crear el usuario en la API
        try {
            const { data } = await clienteAxios(`/usuarios/${id}`)
            const nombrehost = 'HOST_ZEBRA_RFID'
            const { data1 } = await clienteAxios.post('/printers/reciboQRZebra', {id , nombrehost})
            //Set alerta
            setAlerta({
                msg: 'Registro Exitoso',
                error: false
            })
            //set campos vacios despues de guardar
            setId('')

        } catch (error) {
            console.log(error);
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
        }
    }

    const { msg } = alerta

    return (
        <div>
            <div className='flex flex-row-reverse h-[10vh]'>
                <img src={logo} />
            </div>
            <div className='h-[90vh] justify-center lg:w-4/5 mx-auto mt-5'>

                <div className='text-white rounded-lg  my-auto bg-[#02275e] p-8 m-3 sm:mx-20 shadow-md'>
                    <p className='uppercase text-left font-bold text-xl sm:text-2xl'>Registrar Equipaje</p>
                    <p className='uppercase text-left font-bold text-base sm:text-2xl'>Impresión TAG RFID</p>
                    {msg && <Alerta alerta={alerta} />}
                    {/* Formulario para crear un cliente */}
                    <form onSubmit={handleSubmit}>
                        <div className='my-2'>
                            <label
                                className=' text-white block text-xl font-bold'
                                htmlFor='cedula'
                            >ID:</label>
                            <input
                                autoFocus
                                id='nombre'
                                type='text'
                                placeholder='Ingresa su id'
                                className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                value={id}
                                onChange={e => setId(e.target.value)}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ZebraEquipaje