import React, { useState, useEffect } from 'react'
import logo from '../../../images/logoUnis.png'
import tortuga from '../../../images/tortugaDorada.svg'
import Alerta from '../../../components/Alerta'
import clienteAxios from '../../../config/clienteAxios'
import { useSearchParams } from 'react-router-dom'

const ObtenerLogro = () => {

    /*Usar search params para obtener los paramentros del URL para saber que logro sera asignado */
    const [searchParams] = useSearchParams();

    const [idUsuario, setIdUsuario] = useState('')
    const [logro, setLogro] = useState('')
    const [flag, setFlag] = useState(false)
    const [alerta, setAlerta] = useState('')

    const marcaParam = searchParams.get('marca')
    const tipoParam = searchParams.get('tipo')

    /*UseEffect para asignar la marca y los url cuando obtenga el parametro marca y su tipo*/
    useEffect(() => {
        if (!flag) {
            if (marcaParam.includes('zebra')) {
                setLogro({
                    nombre: 'ZEBRA'
                })
                if (tipoParam.includes('1')) {
                    setLogro({
                        img: '../../src/images/tortuga.jpg',
                        idLogro: '64e53838fa45fef75ed09b81',
                        nombre: 'ZEBRA'
                    })
                } else {
                    setLogro({
                        img: '../../src/images/tortugaDorada.svg',
                        idLogro: '64e63064fa45fef75ed09b99',
                        nombre: 'ZEBRA PREMIUM'
                    })
                }
            }
            if (marcaParam.includes('zkteco')) {
                if (tipoParam.includes('1')) {
                    setLogro({
                        img: '../../src/images/mantarraya.svg',
                        idLogro: '64e7db74180191b414600a80',
                        nombre: 'ZKTECO'
                    })
                } else {
                    setLogro({
                        img: '../../src/images/mantarrayaDorado.svg',
                        idLogro: '64e7dbce180191b414600a82',
                        nombre: 'ZKTECO PREMIUM'
                    })
                }
            }
        }

        return () => {
            setFlag(true)
        }
    }, [])

    const idLogro = logro.idLogro

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
                <img src={logro.img} className='rounded-full lg:w-1/4 p-5 w-2/3' />
                {msg && <Alerta alerta={alerta} />}
                <label htmlFor="codigo" className='text-[#02275e] block text-xl font-bold'> LOGRO {logro.nombre}</label>
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

export default ObtenerLogro