import React, { useEffect, useState } from 'react'
import logo from '../../images/logoUnis.png'
import LogroCard from '../../components/LogroCard'
import Alerta from '../../components/Alerta'
import clienteAxios from '../../config/clienteAxios'
import SidebarAsistente from '../../components/SidebarAsistente'
import QRCode from 'react-qr-code';

// Pagina para buscar el avance de tus logros 

const Logros = () => {

    const cantLogros = 4
    const [cedula, setCedula] = useState('')
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
    //Mostrar recompensas o actividades dependiendo el boton
    const [isActividades, setIsActividades] = useState(false)
    const [isRecompensas, setIsRecompensas] = useState(true)
    const [isVR, setIsVR] = useState(false)
    const [isEquipajeZebra, setIsEquipajeZebra] = useState(false)

    useEffect(() => {
        const cedula = localStorage.getItem('cedula')
        if (cedula) {
            setCedula(cedula)
            buscarLogros(cedula)
        }

    }, [])

    useEffect(() => {
        localStorage.setItem('cedula', cedula)
    }, [cedula])


    async function buscarLogros(id) {
        //buscar usuario por cedula
        const { data } = await clienteAxios(`/usuarios/cedula/${id}`)
        setIsVR(data.actividadVR.estado)
        setIsEquipajeZebra(data.actividadZebra.estado)

        setCedula(data.cedula)
        //en listar los logros del usuario
        const logrosList = data.logros
        //cantidad de logros obtenidos
        const cantLogrosList = logrosList.length
        // cantidad de Logros que faltan por completar
        const cantLogrosFaltantes = (cantLogros - cantLogrosList).toString()
        setLogrosFaltantes(cantLogrosFaltantes)
        //Condicional si obtuvo todo los logros isComplete=true para mostrar mensaje de felicitacion
        if (cantLogrosFaltantes === '0') {
            setIsComplete(true)
        } else {
            setIsComplete(false)
        }
        //Set el nombre para mostrar en mensaje
        const nombreCliente = data.nombre
        setNombre(nombreCliente)
        //Set user=true para mostrar mensaje
        setIsUser(true)
        //Vaciar campo ID
        setId('')
        //Condicionales
        //Si completo el logro Zebra
        if (logrosList.includes('64e53838fa45fef75ed09b81')) {
            setLogroZebra({ isActive: true })
        } else {
            setLogroZebra({ isActive: false })
        }
        //Si completo el logro Zebra premium
        if (logrosList.includes('64e63064fa45fef75ed09b99')) {
            setLogroZebraPremium({ isActive: true })
        } else {
            setLogroZebraPremium({ isActive: false })
        }
        //Si completo el logro Zkteco
        if (logrosList.includes('64e7db74180191b414600a80')) {
            setLogroZkteco({ isActive: true })
        } else {
            setLogroZkteco({ isActive: false })
        }
        //Si completo el logro Zkteco Premium
        if (logrosList.includes('64e7dbce180191b414600a82')) {
            setLogroZktecoPremium({ isActive: true })
        } else {
            setLogroZktecoPremium({ isActive: false })
        }
        //Set alerta vacio
        setAlerta({
            msg: '',
            error: false
        })
    }

    const handleRecompensas = e => {
        setIsRecompensas(true)
        setIsActividades(false)
    }

    const handleActividades = e => {
        setIsRecompensas(false)
        setIsActividades(true)
    }

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

            buscarLogros(id)

        } catch (error) {
            //Set user=false para quitar mensaje
            setIsUser(false)
            //Mostrar alerta
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
            //setea a falso para desactivar el logro
            setLogroZebra({ isActive: false })
            setLogroZebraPremium({ isActive: false })
            setLogroZkteco({ isActive: false })
            setLogroZktecoPremium({ isActive: false })
            setId('')
        }

    }

    const { msg } = alerta
    return (
        <SidebarAsistente>
            <div className='flex h-[10vh]'>
                <img src={logo} />
            </div>
            <div className='shadow-md mt-2 p-3'>
                <p className='uppercase text-center font-bold text-lg text-black sm:text-2xl'>VITRINA 2023</p>
                {msg && <Alerta alerta={alerta} />}
                {/* Formulario para buscar logros de cliente */}
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

            <div className='flex justify-around'>
                <input
                    type='button'
                    onClick={handleRecompensas}
                    value={'Tus Recompensas'}
                    className='bg-sky-700 px-5 py-3  text-white uppercase font-bold rounded text-xs hover:cursor-pointer
                                 hover:bg-sky-800 transition-colors'
                />
                <input
                    type='button'
                    onClick={handleActividades}
                    value={'Tus Actividades'}
                    className='bg-sky-700 px-5 py-3  text-white uppercase font-bold text-xs rounded hover:cursor-pointer
                                 hover:bg-sky-800 transition-colors'
                />
            </div>
            <div id='recompensas' hidden={isRecompensas ? false : true}>
                <p className='text-xs pt-4 px-3 text-justify'>*Selecciona cada recompensa para saber como conseguirla</p>
                {/* Mensaje direccionado a cliente para que vea cuantos logros le faltan */}
                <div hidden={isUser ? false : true} className='text-center mt-5'>
                    <p hidden={isComplete ? true : false}> ¡Hola <span className='text-[#285aa4] font-bold uppercase'>{nombre}</span> este es tu avance hasta este momento! <br /> Te falta solo <span className='text-[#285aa4] font-bold uppercase'>{logrosFaltantes}</span> logros</p>
                    <p hidden={isComplete ? false : true}> ¡Felicitaciones <span className='text-[#e2bf31] font-bold uppercase'>{nombre}</span> conseguiste todos los logros!  </p>
                </div>
                {/* Cards de todos los logros */}
                <div className="grid grid-cols-2 grid-flow-row gap-4 text-center my-5 mx-5">
                    <LogroCard
                        logroImg={'../src/images/tortuga.jpg'} logroNombre={'ZEBRA'} logro={logroZebra}
                        logroInfo={'Puedes obtener esta recompensa visitando el stand de ZEBRA'}
                    />
                    <LogroCard
                        logroImg={'../src/images/tortugaDorada.svg'} logroNombre={'ZEBRA PREMIUM'} logro={logroZebraPremium}
                        logroInfo={'Puedes obtener esta recompensa respondiendo preguntas en el stand de ZEBRA'}
                    />
                    <LogroCard
                        logroImg={'../src/images/tortugaDorada.svg'} logroNombre={'ZEBRA JUEGO'} logro={logroZebraPremium}
                        logroInfo={'Puedes obtener esta recompensa ganando el juego en el stand de ZEBRA'}
                    />
                    <LogroCard
                        logroImg={'../src/images/tortugaDorada.svg'} logroNombre={'ZEBRA CONFERENCIA'} logro={logroZebraPremium}
                        logroInfo={'Puedes obtener esta recompensa asistinedo a la conferencia ZEBRA'}
                    />
                    <LogroCard
                        logroImg={'../src/images/mantarraya.svg'} logroNombre={'ZKTECO'} logro={logroZkteco}
                        logroInfo={'Puedes obtener esta recompensa ganando el juego en el stand de ZEBRA'}
                    />
                    <LogroCard
                        logroImg={'../src/images/mantarrayaDorado.svg'} logroNombre={'ZKTECO PREMIUM'} logro={logroZktecoPremium}
                        logroInfo={'Puedes obtener esta recompensa ganando el juego en el stand de ZEBRA'}
                    />
                    <LogroCard
                        logroImg={'../src/images/mantarrayaDorado.svg'} logroNombre={'ZKTECO CONFERENCIA'} logro={logroZktecoPremium}
                        logroInfo={'Puedes obtener esta recompensa ganando el juego en el stand de ZEBRA'}
                    />
                    <LogroCard
                        logroImg={'../src/images/mantarrayaDorado.svg'} logroNombre={'UNITECH'} logro={logroZktecoPremium}
                        logroInfo={'Puedes obtener esta recompensa ganando el juego en el stand de ZEBRA'}
                    />
                    <LogroCard
                        logroImg={'../src/images/mantarrayaDorado.svg'} logroNombre={'UNITECH PREMIUM'} logro={logroZktecoPremium}
                        logroInfo={'Puedes obtener esta recompensa ganando el juego en el stand de ZEBRA'}
                    />
                    <LogroCard
                        logroImg={'../src/images/mantarrayaDorado.svg'} logroNombre={'ELO'} logro={logroZktecoPremium}
                        logroInfo={'Puedes obtener esta recompensa ganando el juego en el stand de ZEBRA'}
                    />
                    <LogroCard
                        logroImg={'../src/images/mantarrayaDorado.svg'} logroNombre={'ELO PREMIUM'} logro={logroZktecoPremium}
                        logroInfo={'Puedes obtener esta recompensa ganando el juego en el stand de ZEBRA'}
                    />
                    <LogroCard
                        logroImg={'../src/images/mantarrayaDorado.svg'} logroNombre={'ELO JUEGO'} logro={logroZktecoPremium}
                        logroInfo={'Puedes obtener esta recompensa ganando el juego en el stand de ZEBRA'}
                    />
                    <LogroCard
                        logroImg={'../src/images/mantarrayaDorado.svg'} logroNombre={'IMIN'} logro={logroZktecoPremium}
                        logroInfo={'Puedes obtener esta recompensa ganando el juego en el stand de ZEBRA'}
                    />
                    <LogroCard
                        logroImg={'../src/images/mantarrayaDorado.svg'} logroNombre={'IMIN PREMIUM'} logro={logroZktecoPremium}
                        logroInfo={'Puedes obtener esta recompensa ganando el juego en el stand de ZEBRA'}
                    />
                    <LogroCard
                        logroImg={'../src/images/mantarrayaDorado.svg'} logroNombre={'GAINSCHA'} logro={logroZktecoPremium}
                        logroInfo={'Puedes obtener esta recompensa ganando el juego en el stand de ZEBRA'}
                    />
                    <LogroCard
                        logroImg={'../src/images/mantarrayaDorado.svg'} logroNombre={'GAINSCHA PREMIUM'} logro={logroZktecoPremium}
                        logroInfo={'Puedes obtener esta recompensa ganando el juego en el stand de ZEBRA'}
                    />
                    <LogroCard
                        logroImg={'../src/images/mantarrayaDorado.svg'} logroNombre={'BARTENDER'} logro={logroZktecoPremium}
                        logroInfo={'Puedes obtener esta recompensa ganando el juego en el stand de ZEBRA'}
                    />
                    <LogroCard
                        logroImg={'../src/images/mantarrayaDorado.svg'} logroNombre={'BARTENDER PREMIUM'} logro={logroZktecoPremium}
                        logroInfo={'Puedes obtener esta recompensa ganando el juego en el stand de ZEBRA'}
                    />

                </div>
            </div>
            <div id='actividades' hidden={isActividades ? false : true}>
                <div className='m-5 p-5 bg-neutral-300 rounded-lg'>
                    <p className='uppercase font-extrabold text-lg'>Juego Realidad Virtual</p>
                    <div hidden={isVR ? false : true}>
                        <p>Horario de reserva: <span className='font-extrabold'>15:00 - 15:15</span></p>
                        <p>Puntaje: <span className='font-extrabold'>0</span></p>
                    </div>
                    <div hidden={isVR ? true : false}>
                        <p>Acércate al stand de ELO para poder agendar tu cita de Realidad Virtual</p>
                    </div>
                </div>

                <div className='m-5 p-5 bg-stone-300 rounded-lg' >
                    <p className='uppercase font-extrabold text-lg'>Equipaje Zebra</p>
                    <div hidden={isEquipajeZebra ? false : true}>
                        <div className='grid place-items-start' >
                            <p>Acércate al manejo de equipaje de Zebra para que encuentren tu maleta leyendo tu ID.</p>
                            <div className='grid grid-flow-col pt-5'>
                                <p>ID: &nbsp;&nbsp;&nbsp;&nbsp; </p>
                                <div style={{ height: "auto", margin: "0 auto", maxWidth: 200, width: "100%" }}>
                                    <QRCode
                                        size={256}
                                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                        value={'0064530000000000000006C9'}
                                        viewBox={`0 0 256 256`}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div hidden={isEquipajeZebra ? true : false}>
                        <p>Acércate al stand de ZEBRA para encontrar tu maleta de viaje</p>
                    </div>

                </div>
            </div>
        </SidebarAsistente>
    )
}

export default Logros