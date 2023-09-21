import React, { useState } from 'react'
import Modal from '@material-ui/core/Modal';


/*Componente de una card para mostrar logros en Buscar mis logros */

const LogroCard = ({ logroImg, logroNombre, logro , logroInfo }) => {

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
                                {logroNombre}
                            </h3>
                            <button onClick={handleClose} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                                <svg  class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
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
            <div onClick={handleOpen} className='shadow-[#a8d0d2] shadow-inner p-5 rounded-lg bg-[#a8d0d243] flex flex-col justify-center'>
                <p className='font-bold text-[#2d5151] text-sm text-center'>{logroNombre}</p>
                <img src={logroImg} alt="" className={` rounded-full ${logro.isActive ? '' : 'grayscale'}`} />
            </div>
        </>
    )
}

export default LogroCard