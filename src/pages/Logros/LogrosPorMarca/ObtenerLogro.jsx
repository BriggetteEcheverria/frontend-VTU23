import React, { useState, useEffect } from 'react'
import logo from '../../../images/logoUnis.png'
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
                        img: '../src/images/logros/zebra/zebra_logro.png',
                        idLogro: '64e53838fa45fef75ed09b81',
                        nombre: 'ZEBRA STAND'
                    })
                }
                if (tipoParam.includes('2')) {
                    setLogro({
                        img: '../src/images/logros/zebra/zebra_logroDorado.png',
                        idLogro: '64e63064fa45fef75ed09b99',
                        nombre: 'ZEBRA PREMIUM'
                    })
                }
                if (tipoParam.includes('3')) {
                    setLogro({
                        img: '../src/images/logros/zebra/zebra_logroConferencia.png',
                        idLogro: '651dbf8654eb99d8d33db320',
                        nombre: 'ZEBRA CONFERENCIA'
                    })
                }
                if (tipoParam.includes('4')) {
                    setLogro({
                        img: '../src/images/logros/zebra/zebra_logroJuego.png',
                        idLogro: '651dbfa454eb99d8d33db321',
                        nombre: 'ZEBRA JUEGO'
                    })
                }
            }
            if (marcaParam.includes('zkteco')) {
                if (tipoParam.includes('1')) {
                    setLogro({
                        img: '../src/images/logros/zkteco/zkteco_logro.png',
                        idLogro: '64e7db74180191b414600a80',
                        nombre: 'ZKTECO STAND'
                    })
                } 
                if (tipoParam.includes('2')) {
                    setLogro({
                        img: '../src/images/logros/zkteco/zkteco_logroDorado.png',
                        idLogro: '64e7dbce180191b414600a82',
                        nombre: 'ZKTECO PREMIUM'
                    })
                }
                if (tipoParam.includes('3')) {
                    setLogro({
                        img: '../src/images/logros/zkteco/zkteco_logroConferencia.png',
                        idLogro: '651dbfc954eb99d8d33db322',
                        nombre: 'ZKTECO CONFERENCIA'
                    })
                }
            }
            if (marcaParam.includes('unitech')) {
                if (tipoParam.includes('1')) {
                    setLogro({
                        img: '../src/images/logros/unitech/unitech_logro.png',
                        idLogro: '651dc06154eb99d8d33db324',
                        nombre: 'UNITECH STAND'
                    })
                } 
                if (tipoParam.includes('2')) {
                    setLogro({
                        img: '../src/images/logros/unitech/unitech_logroDorado.png',
                        idLogro: '651dc07b54eb99d8d33db325',
                        nombre: 'UNITECH PREMIUM'
                    })
                }
                if (tipoParam.includes('3')) {
                    setLogro({
                        img: '../src/images/logros/unitech/unitech_logroConferencia.png',
                        idLogro: '651dc00f54eb99d8d33db323',
                        nombre: 'UNITECH CONFERENCIA'
                    })
                }
            }
            if (marcaParam.includes('imin')) {
                if (tipoParam.includes('1')) {
                    setLogro({
                        img: '../src/images/logros/imin/imin_logro.png',
                        idLogro: '651dc09254eb99d8d33db326',
                        nombre: 'IMIN STAND'
                    })
                } 
                if (tipoParam.includes('2')) {
                    setLogro({
                        img: '../src/images/logros/imin/imin_logroDorado.png',
                        idLogro: '651dc0a554eb99d8d33db327',
                        nombre: 'IMIN PREMIUM'
                    })
                }
            }
            if (marcaParam.includes('gainscha')) {
                if (tipoParam.includes('1')) {
                    setLogro({
                        img: '../src/images/logros/gainscha/gainscha_logro.png',
                        idLogro: '651dc0be54eb99d8d33db328',
                        nombre: 'GAINSCHA STAND'
                    })
                } 
                if (tipoParam.includes('2')) {
                    setLogro({
                        img: '../src/images/logros/gainscha/gainscha_logroDorado.png',
                        idLogro: '651dc10654eb99d8d33db329',
                        nombre: 'GAINSCHA PREMIUM'
                    })
                }
            }
            if (marcaParam.includes('elo')) {
                if (tipoParam.includes('1')) {
                    setLogro({
                        img: '../src/images/logros/elo/elo_logro.png',
                        idLogro: '651dc11654eb99d8d33db32a',
                        nombre: 'ELO STAND'
                    })
                } 
                if (tipoParam.includes('2')) {
                    setLogro({
                        img: '../src/images/logros/elo/elo_logroDorado.png',
                        idLogro: '651dc12554eb99d8d33db32b',
                        nombre: 'ELO PREMIUM'
                    })
                }
                if (tipoParam.includes('4')) {
                    setLogro({
                        img: '../src/images/logros/elo/elo_logroJuego.png',
                        idLogro: '651dc13754eb99d8d33db32c',
                        nombre: 'ELO JUEGO'
                    })
                }
            }
            if (marcaParam.includes('bartender')) {
                if (tipoParam.includes('1')) {
                    setLogro({
                        img: '../src/images/logros/bartender/bartender_logro.png',
                        idLogro: '651dc15054eb99d8d33db32d',
                        nombre: 'BARTENDER STAND'
                    })
                } 
                if (tipoParam.includes('2')) {
                    setLogro({
                        img: '../src/images/logros/bartender/bartender_logroDorado.png',
                        idLogro: '651dc16b54eb99d8d33db32e',
                        nombre: 'BARTENDER PREMIUM'
                    })
                }
            }
            if (marcaParam.includes('escondido')) {
                if (tipoParam.includes('1')) {
                    setLogro({
                        img: '../src/images/logros/charlesDarwin.png',
                        idLogro: '6528a0972d334a8928fd1205',
                        nombre: 'RECOMPENSA ESCONDIDA TOUR CHARLES DARWIN'
                    })
                } 
                if (tipoParam.includes('2')) {
                    setLogro({
                        img: '../src/images/logros/grietas.png',
                        idLogro: '6528a0af2d334a8928fd1206',
                        nombre: 'RECOMPENSA ESCONDIDA TOUR GRIETAS'
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
                <img src={logro.img} className='lg:w-1/4 p-5 w-2/3' />
                {msg && <Alerta alerta={alerta} />}
                <label htmlFor="codigo" className='text-[#02275e] block text-xl font-bold text-center p-2'> LOGRO {logro.nombre}</label>
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