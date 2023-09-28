import React, { useState } from 'react'
import logo from '../images/logoUnis.png'
import pesas from '../images/ELO/pesas.png'
import cuerda from '../images/ELO/cuerda.png'
import hula from '../images/ELO/hula.png'
import elo from '../images/ELO/elo.png'
import Modal from '@material-ui/core/Modal';
import { useTimer } from 'react-timer-hook'


const EloRetos = () => {

    const [titulo, setTitulo] = useState('')
    const [reto, setReto] = useState('')
    const [infoReto, setInfoReto] = useState('')
    const [isExpired, setIsExpired] = useState(false)

    //CUENTA REGRESIVA
    const expiryTimestamp = new Date();

    const {
        seconds,
        isRunning,
        pause,
        restart
    } = useTimer({
        expiryTimestamp, onExpire: () => {
            console.warn("Se acabo el tiempo...")
            setIsExpired(true)
        }
    });


    // Modal
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
        restart();
        pause()

    };

    const handleOpen = () => {
        setOpen(true);
        setIsExpired(false)
        const time = new Date();
        time.setSeconds(time.getSeconds() + 30);
    };

    return (
        <>
            <Modal
                onClose={handleClose}
                open={open}
            >
                <div className="relative  my-52 mx-5 ">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* <!-- Modal header --> */}
                        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white uppercase">
                                {titulo} <span className='normal-case text-lg font-medium'> {infoReto}</span>
                            </h3>
                            <button onClick={handleClose} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <div className="p-6 space-y-6 text-center">
                            <p className="text-5xl">
                                <div style={{ textAlign: 'center' }}>
                                    <p hidden={isExpired ? false : true} className='text-2xl'>Se acabo el tiempo :( <br /><span>¿Lo lograste?</span></p>
                                    <p hidden={isExpired ? true : false}>{isRunning ? reto : 'Estas listo...'}</p>
                                    <div style={{ fontSize: '100px' }}>
                                        <span>{seconds}</span>
                                    </div>
                                    <div hidden={isExpired ? true : false}>
                                        <button
                                            disabled={isRunning ? true : false}
                                            className={`${isRunning ? 'bg-zinc-400 hover:bg-zinc-400' : 'bg-blue-700 hover:bg-blue-800'} text-white uppercase  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"`}
                                            onClick={() => {
                                                // Restarts to 5 minutes timer
                                                const time = new Date();
                                                time.setSeconds(time.getSeconds() + 30);
                                                restart(time)
                                            }}>Iniciar</button>
                                        <button
                                            hidden={isRunning ? false : true}
                                            className={`bg-blue-700 hover:bg-blue-800 text-white uppercase  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                                            onClick={() => {
                                                // Restarts to 5 minutes timer
                                                const time = new Date();
                                                time.setSeconds(time.getSeconds() + 30);
                                                restart(time)
                                            }}>Reiniciar</button>
                                    </div>

                                </div>
                            </p>

                        </div>
                    </div>
                </div>

            </Modal>
            <div className='flex h-[10vh] justify-between '>
                <img src={logo} />
            </div>
            <div className='flex justify-center p-2'>
                <p className='uppercase text-center text-2xl font-extrabold pt-10 pr-2'>Cumple el Reto de</p>
                <img src={elo} alt="" className='w-1/6' />
            </div>
            <div className='flex h-[75vh]'>
                <div className='grid grid-rows-3 gap-3 grid-flow-col  m-auto '>
                    <div onClick={() => {
                        handleOpen()
                        setTitulo('Reto Pesas')
                        setInfoReto('- Completa 50 repeticiones y gana una recompensa')
                        setReto('Levanta pesas...')
                    }}
                        className='bg-sky-700  p-5 w-60 text-white uppercase font-bold rounded hover:cursor-pointer
                        hover:bg-sky-800 transition-colors text-center'>
                        <p>PESAS</p>
                        <br />
                        <img src={pesas} />
                    </div>
                    <div
                        onClick={() => {
                            handleOpen()
                            setTitulo('Reto Cuerda')
                            setInfoReto('- Salta 50 veces y gana una recompensa')
                            setReto('Salta la cuerda...')
                        }}
                        className='bg-sky-700  p-5 w-60 text-white uppercase font-bold rounded hover:cursor-pointer
                        hover:bg-sky-800 transition-colors text-center'>
                        <p>CUERDA</p>
                        <br />
                        <img src={cuerda} />
                    </div>
                    <div
                        onClick={() => {
                            handleOpen()
                            setTitulo('Reto Hula Hula')
                            setInfoReto('- Hazla girar 50 veces y gana una recompensa')
                            setReto('Gira la Hula...')
                        }}
                        className='bg-sky-700  p-5 w-60  text-white uppercase font-bold rounded hover:cursor-pointer
                        hover:bg-sky-800 transition-colors text-center'>
                        <p>HULA HULA</p>
                        <br />
                        <img src={hula} />
                    </div>
                </div>
            </div>

        </>
    )
}


export default EloRetos