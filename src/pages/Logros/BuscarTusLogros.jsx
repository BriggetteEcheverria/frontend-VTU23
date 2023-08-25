import React, { useEffect, useState } from 'react'
import fondoMar from '../../images/fondoMar.png'
import logo from '../../images/logoUnis.png'
import LogroCard from '../../components/LogroCard'
import Alerta from '../../components/Alerta'
import clienteAxios from '../../config/clienteAxios'

// Pagina para buscar el avance de tus logros 

const Logros = () => {

    const cantLogros = 4

    const [id, setId] = useState('')
    const [nombre, setNombre] = useState('')
    const [logrosFaltantes, setLogrosFaltantes] = useState('')
    //Flag para saber si completo todos los logros en caso de que sea true se muestra un mensaje con los logros faltantes o de felicitaciones
    const [isComplete, setIsComplete] = useState(false)
    //Flag para saber si el usuario buscado se encontro en caso de que sea true se muestra un mensaje con su nombre
    const [isUser, setIsUser] = useState(false)
    const [alerta, setAlerta] = useState('')
    //States para Activar o desactivar los logros dependiento el usuarios
    const [logroZebra, setLogroZebra] = useState('')
    const [logroZebraPremium, setLogroZebraPremium] = useState('')
    const [logroZkteco, setLogroZkteco] = useState('')
    const [logroZktecoPremium, setLogroZktecoPremium] = useState('')

    //evento al hacer submit en el form 
    const handleSubmitBuscar = async e => {
        e.preventDefault()
        //validar que no este vacia el campo de cedula para buscar
        if ([id].includes('')) {
            //se setea el User a false para no mostrar mensajes
            setIsUser(false)
            setIsComplete(false)
            //se muestra la alerta
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            //setea a falso para desactivar el logro
            setLogroZebra({ isActive: false })
            setLogroZebraPremium({ isActive: false })
            setLogroZkteco({ isActive: false })
            setLogroZktecoPremium({ isActive: false })
            setId('')
            return
        }

        try {
            //buscar usuario por cedula
            const { data } = await clienteAxios(`/usuarios/cedula/${id}`)
            //en listar los logros del usuario
            const logrosList = data.logros
            
            const cantLogrosList = logrosList.length 

            console.log(cantLogrosList);
            
            const nombreCliente = data.nombre
            setNombre(nombreCliente)
            console.log(data);
            setIsUser(true)
            setId('')
            if (logrosList.includes('64e53838fa45fef75ed09b81')) {
                setLogroZebra({ isActive: true })
            } else {
                setLogroZebra({ isActive: false })
            }
            if (logrosList.includes('64e63064fa45fef75ed09b99')) {
                setLogroZebraPremium({ isActive: true })
            } else {
                setLogroZebraPremium({ isActive: false })
            }
            if (logrosList.includes('64e7db74180191b414600a80')) {
                setLogroZkteco({ isActive: true })
            } else {
                setLogroZkteco({ isActive: false })
            }
            if (logrosList.includes('64e7dbce180191b414600a82')) {
                setLogroZktecoPremium({ isActive: true })
            } else {
                setLogroZktecoPremium({ isActive: false })
            }
            setAlerta({
                msg: '',
                error: false
            })

        } catch (error) {
            setIsUser(false)
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
            setLogroZebra({ isActive: false })
            setLogroZebraPremium({ isActive: false })
            setId('')
        }

    }
    const { msg } = alerta
    return (
        <>
            <div className='flex h-[10vh]'>
                <img src={logo} />
            </div>
            <div className='shadow-md m-2 mt-2 bg-[#a8d0d2] p-5'>
                <p className='uppercase text-center font-bold text-2xl text-white sm:text-2xl'>Mira tus logros</p>
                {msg && <Alerta alerta={alerta} />}
                <form onSubmit={handleSubmitBuscar} action="" className='text-[#02275e] rounded-lg  my-auto  m-2 sm:mx-20 flex justify-between'>
                    <input
                        autoFocus
                        id='cedula'
                        type='text'
                        placeholder='Ingresa tu cédula'
                        className='w-full m-2 p-3 border rounded bg-gray-50 text-[#02275e]'
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <input
                        type='submit'
                        value={'Buscar'}
                        className='bg-sky-700 w-1/3 m-2 p-3 text-white uppercase font-bold rounded hover:cursor-pointer
                            hover:bg-sky-800 transition-colors'
                    />
                </form>
            </div>
            <div hidden={isUser ? false : true}>
                <p> ¡Hola {nombre} este es tu avance hasta este momento! </p>
                <p> Te falta solo {logrosFaltantes} </p>
                <p> ¡ Felicitaciones {nombre} conseguiste todos los logros!  </p>
            </div>
            <div className="grid grid-cols-2 grid-flow-row gap-4 text-center my-10 mx-5">
                <LogroCard logroImg={'../src/images/tortuga.jpg'} logroNombre={'LOGRO TORTUGA'} logro={logroZebra} />
                <LogroCard logroImg={'../src/images/tortugaDorada.svg'} logroNombre={'LOGRO TORTUGA PREMIUM'} logro={logroZebraPremium} />
                <LogroCard logroImg={'../src/images/mantarraya.svg'} logroNombre={'LOGRO MATARRAYA'} logro={logroZkteco} />
                <LogroCard logroImg={'../src/images/mantarrayaDorado.svg'} logroNombre={'LOGRO MANTARRAYA PREMIUM'} logro={logroZktecoPremium} />



            </div>
            <div className='h-[80vh]'>
                <img src={fondoMar} alt="" className=' inset-x-0 bottom-0 fixed' />
            </div>
        </>
    )
}

export default Logros