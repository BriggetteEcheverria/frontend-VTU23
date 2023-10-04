import React, { useEffect, useState } from 'react'
import logo from '../../images/logoUnis.png'
import LogroCard from '../../components/LogroCard'
import Alerta from '../../components/Alerta'
import clienteAxios from '../../config/clienteAxios'
import SidebarAsistente from '../../components/SidebarAsistente'
import QRCode from 'react-qr-code';
import {
    FaSyncAlt
} from "react-icons/fa";

// Pagina para buscar el avance de tus logros 

const Logros = () => {

    const cantLogros = 19
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
    //ZEBRA
    const [logroZebraConferencia, setLogroZebraConferencia] = useState('')
    const [logroZebra, setLogroZebra] = useState('')
    const [logroZebraPremium, setLogroZebraPremium] = useState('')
    const [logroZebraJuego, setLogroZebraJuego] = useState('')
    //ZKTECO
    const [logroZktecoConferencia, setLogroZktecoConferencia] = useState('')
    const [logroZkteco, setLogroZkteco] = useState('')
    const [logroZktecoPremium, setLogroZktecoPremium] = useState('')
    //UNITECH
    const [logroUnitechConferencia, setLogroUnitechCoferencia] = useState('')
    const [logroUnitech, setLogroUnitech] = useState('')
    const [logroUnitechPremium, setLogroUnitechPremium] = useState('')
    //iMin
    const [logroImin, setLogroImin] = useState('')
    const [logroIminPremium, setLogroIminPremium] = useState('')
    //Gainscha
    const [logroGainscha, setLogroGainscha] = useState('')
    const [logroGainschaPremium, setLogroGainschaPremium] = useState('')
    //Elo
    const [logroElo, setLogroElo] = useState('')
    const [logroEloPremium, setLogroEloPremium] = useState('')
    const [logroEloJuego, setLogroEloJuego] = useState('')
    //Bartender
    const [logroBartender, setLogroBartender] = useState('')
    const [logroBartenderPremium, setLogroBartenderPremium] = useState('')


    //Mostrar recompensas o actividades dependiendo el boton
    const [isActividades, setIsActividades] = useState(false)
    const [isRecompensas, setIsRecompensas] = useState(true)
    const [isVR, setIsVR] = useState(false)
    const [isEquipajeZebra, setIsEquipajeZebra] = useState(false)
    const [horarioVR, setHorarioVR] = useState('')
    const [puntuacionVR, setPuntuacionVR] = useState('')


    const logros = [
        //CONFERENCIAS
        {
            logroImg: '../src/images/logros/zebra/zebra_logroConferencia.png',
            logroNombre: 'ZEBRA CONFERENCIA',
            logro: logroZebraConferencia,
            logroInfo: 'Puedes obtener esta recompensa asistiendo a la conferencia ZEBRA'
        },
        {
            logroImg: '../src/images/logros/zkteco/zkteco_logroConferencia.png',
            logroNombre: 'ZKTECO CONFERENCIA',
            logro: logroZktecoConferencia,
            logroInfo: 'Puedes obtener esta recompensa asistiendo a la conferencia ZKTECO'
        },
        {
            logroImg: '../src/images/logros/unitech/unitech_logroConferencia.png',
            logroNombre: 'UNITECH CONFERENCIA',
            logro: logroUnitechConferencia,
            logroInfo: 'Puedes obtener esta recompensa asistiendo a la conferencia UNITECH'
        },
        //ZEBRA
        {
            logroImg: '../src/images/logros/zebra/zebra_logro.png',
            logroNombre: 'ZEBRA STAND',
            logro: logroZebra,
            logroInfo: 'Puedes obtener esta recompensa visitando el stand de ZEBRA'
        },
        {
            logroImg: '../src/images/logros/zebra/zebra_logroDorado.png',
            logroNombre: 'ZEBRA DORADO',
            logro: logroZebraPremium,
            logroInfo: 'Puedes obtener esta recompensa respondiendo preguntas en el stand de ZEBRA'
        },
        {
            logroImg: '../src/images/logros/zebra/zebra_logroJuego.png',
            logroNombre: 'ZEBRA JUEGO',
            logro: logroZebraJuego,
            logroInfo: 'Puedes obtener esta recompensa ganando el juego en el stand de ZEBRA'
        },
        //ZKTECO
        {
            logroImg: '../src/images/logros/zkteco/zkteco_logro.png',
            logroNombre: 'ZKTECO STAND',
            logro: logroZkteco,
            logroInfo: 'Puedes obtener esta recompensa visitando el stand de ZEBRA'
        },
        {
            logroImg: '../src/images/logros/zkteco/zkteco_logroDorado.png',
            logroNombre: 'ZKTECO DORADO',
            logro: logroZktecoPremium,
            logroInfo: 'Puedes obtener esta recompensa respondiendo preguntas en el stand de ZEBRA'
        },
        //UNITECH
        {
            logroImg: '../src/images/logros/unitech/unitech_logro.png',
            logroNombre: 'UNITECH STAND',
            logro: logroUnitech,
            logroInfo: 'Puedes obtener esta recompensa visitando el stand de UNITECH'
        },
        {
            logroImg: '../src/images/logros/unitech/unitech_logroDorado.png',
            logroNombre: 'UNITECH DORADO',
            logro: logroUnitechPremium,
            logroInfo: 'Puedes obtener esta recompensa respondiendo preguntas en el stand de UNITECH'
        },
        //IMIN
        {
            logroImg: '../src/images/logros/imin/imin_logro.png',
            logroNombre: 'IMIN STAND',
            logro: logroImin,
            logroInfo: 'Puedes obtener esta recompensa visitando el stand de IMIN'
        },
        {
            logroImg: '../src/images/logros/imin/imin_logroDorado.png',
            logroNombre: 'IMIN DORADO',
            logro: logroIminPremium,
            logroInfo: 'Puedes obtener esta recompensa respondiendo preguntas en el stand de IMIN'
        },
        //GAINSCHA
        {
            logroImg: '../src/images/logros/gainscha/gainscha_logro.png',
            logroNombre: 'GAINSCHA STAND',
            logro: logroGainscha,
            logroInfo: 'Puedes obtener esta recompensa visitando el stand de GAINSCHA'
        },
        {
            logroImg: '../src/images/logros/gainscha/gainscha_logroDorado.png',
            logroNombre: 'GAINSCHA DORADO',
            logro: logroGainschaPremium,
            logroInfo: 'Puedes obtener esta recompensa respondiendo preguntas en el stand de GAINSCHA'
        },
        //ELO
        {
            logroImg: '../src/images/logros/elo/elo_logro.png',
            logroNombre: 'ELO STAND',
            logro: logroElo,
            logroInfo: 'Puedes obtener esta recompensa visitando el stand de ELO'
        },
        {
            logroImg: '../src/images/logros/elo/elo_logroDorado.png',
            logroNombre: 'ELO DORADO',
            logro: logroEloPremium,
            logroInfo: 'Puedes obtener esta recompensa respondiendo preguntas en el stand de ELO'
        },
        {
            logroImg: '../src/images/logros/elo/elo_logroJuego.png',
            logroNombre: 'ELO JUEGO',
            logro: logroEloJuego,
            logroInfo: 'Puedes obtener esta recompensa ganando el juego en el stand de ELO'
        },
        //BARTENDER
        {
            logroImg: '../src/images/logros/bartender/bartender_logro.png',
            logroNombre: 'BARTENDER STAND',
            logro: logroBartender,
            logroInfo: 'Puedes obtener esta recompensa visitando el stand de BARTENDER'
        },
        {
            logroImg: '../src/images/logros/bartender/bartender_logroDorado.png',
            logroNombre: 'BARTENDER DORADO',
            logro: logroBartenderPremium,
            logroInfo: 'Puedes obtener esta recompensa respondiendo preguntas en el stand de BARTENDER'
        },
    ]

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
        setHorarioVR(data.actividadVR.fecha)
        setPuntuacionVR(data.actividadVR.puntuacion)

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
        //Si completo el logro Zebra Conferencia
        if (logrosList.includes('651dbf8654eb99d8d33db320')) {
            setLogroZebraConferencia({ isActive: true })
        } else {
            setLogroZebraConferencia({ isActive: false })
        }
        //Si completo el logro Zebra juego
        if (logrosList.includes('651dbfa454eb99d8d33db321')) {
            setLogroZebraJuego({ isActive: true })
        } else {
            setLogroZebraJuego({ isActive: false })
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
        //Si completo el logro Zkteco Conferencia
        if (logrosList.includes('651dbfc954eb99d8d33db322')) {
            setLogroZktecoConferencia({ isActive: true })
        } else {
            setLogroZktecoConferencia({ isActive: false })
        }
        //Si completo el logro UNITECH
        if (logrosList.includes('651dc06154eb99d8d33db324')) {
            setLogroUnitech({ isActive: true })
        } else {
            setLogroUnitech({ isActive: false })
        }
        //Si completo el logro UNITECH Premium
        if (logrosList.includes('651dc07b54eb99d8d33db325')) {
            setLogroUnitechPremium({ isActive: true })
        } else {
            setLogroUnitechPremium({ isActive: false })
        }
        //Si completo el logro UNITECH Conferencia
        if (logrosList.includes('651dc00f54eb99d8d33db323')) {
            setLogroUnitechCoferencia({ isActive: true })
        } else {
            setLogroUnitechCoferencia({ isActive: false })
        }
        //Si completo el logro IMIN
        if (logrosList.includes('651dc09254eb99d8d33db326')) {
            setLogroImin({ isActive: true })
        } else {
            setLogroImin({ isActive: false })
        }
        //Si completo el logro IMIN Premium
        if (logrosList.includes('651dc0a554eb99d8d33db327')) {
            setLogroIminPremium({ isActive: true })
        } else {
            setLogroIminPremium({ isActive: false })
        }
        //Si completo el logro GAINSCHA
        if (logrosList.includes('651dc0be54eb99d8d33db328')) {
            setLogroGainscha({ isActive: true })
        } else {
            setLogroGainscha({ isActive: false })
        }
        //Si completo el logro GAINSCHA Premium
        if (logrosList.includes('651dc10654eb99d8d33db329')) {
            setLogroGainschaPremium({ isActive: true })
        } else {
            setLogroGainschaPremium({ isActive: false })
        }
        //Si completo el logro ELO
        if (logrosList.includes('651dc11654eb99d8d33db32a')) {
            setLogroElo({ isActive: true })
        } else {
            setLogroElo({ isActive: false })
        }
        //Si completo el logro ELO Premium
        if (logrosList.includes('651dc12554eb99d8d33db32b')) {
            setLogroEloPremium({ isActive: true })
        } else {
            setLogroEloPremium({ isActive: false })
        }
        //Si completo el logro ELO Juego
        if (logrosList.includes('651dc13754eb99d8d33db32c')) {
            setLogroEloJuego({ isActive: true })
        } else {
            setLogroEloJuego({ isActive: false })
        }
        //Si completo el logro BARTENDER
        if (logrosList.includes('651dc15054eb99d8d33db32d')) {
            setLogroBartender({ isActive: true })
        } else {
            setLogroBartender({ isActive: false })
        }
        //Si completo el logro BARTENDER Premium
        if (logrosList.includes('651dc16b54eb99d8d33db32e')) {
            setLogroBartenderPremium({ isActive: true })
        } else {
            setLogroBartenderPremium({ isActive: false })
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

    const handleRecargar = () => {
        const cedula = localStorage.getItem('cedula')
        if (cedula) {
            setCedula(cedula)
            buscarLogros(cedula)
        }
    }

    const { msg } = alerta
    return (
        <SidebarAsistente>
            <div className='flex h-[10vh]'>
                <img src={logo} />
            </div>
            <div className='shadow-md mt-2 p-3'>
                <div className='flex justify-evenly' >
                    <p className='uppercase text-center font-bold text-lg text-black sm:text-2xl'>VITRINA 2023</p>
                    <div onClick={handleRecargar} className='bg-amber-400 px-5 py-3  text-white uppercase font-bold rounded text-xs hover:cursor-pointer
                    hover:bg-amber-500 transition-colors'> <FaSyncAlt /></div>
                </div>
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

                    {logros.map((logro, i) => {
                        return <LogroCard key={i}
                            logroImg={logro.logroImg} logroNombre={logro.logroNombre} logro={logro.logro}
                            logroInfo={logro.logroInfo}
                        />

                    })}

                </div>
            </div>
            <div id='actividades' hidden={isActividades ? false : true}>
                <div className='m-5 p-5 bg-neutral-300 rounded-lg'>
                    <p className='uppercase font-extrabold text-lg'>Juego Realidad Virtual</p>
                    <div hidden={isVR ? false : true}>
                        <p>Horario de reserva: <span className='font-extrabold'>{horarioVR}</span></p>
                        <p>Puntaje: <span className='font-extrabold'>{puntuacionVR}</span></p>
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