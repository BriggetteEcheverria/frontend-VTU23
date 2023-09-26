import React from 'react'
import logo from '../images/logoUnis.png'
import pesas from '../images/ELO/pesas.png'
import cuerda from '../images/ELO/cuerda.png'
import hula from '../images/ELO/hula.png'
import elo from '../images/ELO/elo.png'
import Modal from '@material-ui/core/Modal';

const EloRetos = () => {

    const handlePesas = () => {
        console.log('pesas');
    }

    
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <>
            <Modal
                onClose={handleClose}
                open={open}
            >
                <div class="relative  my-40 mx-5 ml-16">
                    {/* <!-- Modal content --> */}
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* <!-- Modal header --> */}
                        <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                {'logroNombre'}
                            </h3>
                            <button onClick={handleClose} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <div class="p-6 space-y-6">
                            <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                {logroInfo}
                            </p>
                        </div>
                        {/* <!-- Modal footer --> */}
                        <div class="flex items-center p-6 space-x-2 border-t justify-center border-gray-200 rounded-b dark:border-gray-600">
                            <button onClick={handleClose} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Entendido</button>

                        </div>
                    </div>
                </div>

            </Modal>
            <div className='flex h-[10vh] justify-between '>
                <img src={logo} />
            </div>
            <div className='flex justify-center p-5'>
                <p className='uppercase text-center text-3xl font-extrabold pt-10 pr-2'>Cumple el Reto de</p>
                <img src={elo} alt="" className='w-1/6' />
            </div>
            <div className='flex h-[75vh]'>
                <div className='grid grid-rows-3 gap-3 grid-flow-col  m-auto '>
                    <div onClick={handleOpen} className='bg-sky-700  p-5 w-60 text-white uppercase font-bold rounded hover:cursor-pointer
                        hover:bg-sky-800 transition-colors text-center'>
                        <p>PESAS</p>
                        <br />
                        <img src={pesas} />
                    </div>
                    <div className='bg-sky-700  p-5 w-60 text-white uppercase font-bold rounded hover:cursor-pointer
                        hover:bg-sky-800 transition-colors text-center'>
                        <p>CUERDA</p>
                        <br />
                        <img src={cuerda} />
                    </div>
                    <div className='bg-sky-700  p-5 w-60  text-white uppercase font-bold rounded hover:cursor-pointer
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