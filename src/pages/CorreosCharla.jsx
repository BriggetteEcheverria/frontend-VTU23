import React, { useState } from 'react'
import SidebarAsistente from '../components/SidebarAsistente'
import logo from '../images/logoUnis.png'
import Modal from '@material-ui/core/Modal';
import virus1 from '../images/virus1.jpg'
import virus2 from '../images/virus2.jpg'
import {
    FaArrowLeft
} from "react-icons/fa";

const CorreosCharla = () => {
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [isCorreo1, setisCorreo1] = useState(false)
    const [isCorreo2, setisCorreo2] = useState(false)
    const [isCorreo3, setisCorreo3] = useState(false)
    const [isCorreo, setisCorreo] = useState(false)
    const [isFormulario, setIsFormulario] = useState(false)

    const handleClose = () => {
        setOpen(false);
        setOpen2(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    const handleOpen2 = () => {
        setOpen2(true);
    };

    return (
        <SidebarAsistente>
            <Modal
                onClose={handleClose}
                open={open}
            >
                <div className="relative  my-40 mx-5 ml-16">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* <!-- Modal header --> */}
                        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                            <h3 className=" text-gray-900 dark:text-white">
                                <span className='font-semibold'>CORREO SPAM  </span>
                            </h3>
                            <button onClick={handleClose} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <div className="p-6 space-y-6">
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                <img src={virus1} alt="" />
                            </p>
                        </div>

                    </div>
                </div>

            </Modal>

            <Modal
                onClose={handleClose}
                open={open2}
            >
                <div className="relative  my-40 mx-5 ml-16">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* <!-- Modal header --> */}
                        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                            <h3 className=" text-gray-900 dark:text-white">
                                <span hidden={isFormulario ? true : false} className='font-semibold'>FORMULARIO PARA DESCUENTO</span>
                                <span hidden={isFormulario ? false : true} className='font-semibold'>ERROR VIRUS</span>
                            </h3>
                            <button onClick={handleClose} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <div className="p-6 space-y-6">
                            <div className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                <div hidden={isFormulario ? true : false}>
                                    <input
                                        id='cargo'
                                        type='text'
                                        placeholder='Ingresa su nombre'
                                        className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                    />
                                    <input
                                        id='cargo'
                                        type='number'
                                        placeholder='Ingresa su número de cédula'
                                        className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                    />
                                    <input
                                        id='cargo'
                                        type='number'
                                        placeholder='Ingresa su número de celular'
                                        className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                    />
                                    <input
                                        id='cargo'
                                        type='text'
                                        placeholder='Ingresa su empresa'
                                        className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                    />
                                    <input
                                        id='cargo'
                                        type='text'
                                        placeholder='Ingresa su cargo'
                                        className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                    />
                                    <input
                                        type='submit'
                                        onClick={()=>{
                                            setIsFormulario(true)
                                        }}
                                        value={'ENVIAR'}
                                        className='bg-blue-800 w-full p-3 my-5 text-white uppercase font-bold rounded hover:cursor-pointer
                                        hover:bg-sky-800 transition-colors'
                                    />
                                </div>
                                <div hidden={isFormulario ? false : true}>
                                    <img src={virus2} alt="" />
                                </div>


                            </div>
                        </div>

                    </div>
                </div>

            </Modal>

            <div className='flex h-[6vh]'>
                <img src={logo} />
            </div>
            <div hidden={isCorreo ? false : true}>
                <button
                    onClick={() => {
                        setisCorreo1(false)
                        setisCorreo2(false)
                        setisCorreo3(false)
                        setisCorreo(false)
                    }}
                    className='bg-blue-800 m-2 p-3 text-white uppercase text-sm font-bold rounded hover:cursor-pointer
                            hover:bg-sky-800 transition-colors text-center flex flex-row place-items-center'> <FaArrowLeft /> &nbsp;&nbsp;Atrás</button>
            </div>
            <div hidden={isCorreo ? true : false}>
                <div className='bg-blue-800 p-3'>
                    <p className='text-white font-bold uppercase underline'>Bandeja de entrada</p>
                </div>
                <div
                    onClick={() => {
                        setisCorreo1(true)
                        setisCorreo2(false)
                        setisCorreo3(false)
                        setisCorreo(true)
                    }}
                    className='p-3 border-b border-blue-800'>
                    <p className='font-bold'>hectorredroban@uniscan.gov.ec</p>
                    <p className='font-medium'>Llena esta encuesta y recibe un premio en nuestro evento </p>
                    <p className='text-zinc-500'>Estimado huésped: Estamos gustosos de compartir esta mañana contigo en el vuelo VTU2023...</p>
                </div>
                <div
                    onClick={() => {
                        setisCorreo1(false)
                        setisCorreo2(true)
                        setisCorreo3(false)
                        setisCorreo(true)
                    }}
                    id='error2' className='p-3 border-b border-blue-800'>
                    <p className='font-bold'>uniscan@infogmail.ec</p>
                    <p className='font-medium'>Ganaste un descuento en este evento! </p>
                    <p className='text-zinc-500'>Estimado huésped: Bienvenido a nuestra Vitrina Tecnológica. Durante las próximas horas...</p>
                </div>
                <div
                    onClick={() => {
                        setisCorreo1(false)
                        setisCorreo2(false)
                        setisCorreo3(true)
                        setisCorreo(true)
                    }}
                    id='correcto' className='p-3 border-b border-blue-800'>
                    <p className='font-bold'>uniscan@uniscan.com.ec</p>
                    <p className='font-medium'>Llena esta encuesta y recibe premio en nuestro evento </p>
                    <p className='text-zinc-500'>Estimado Usuario: Estamos gustosos de compartir esta mañana contigo en el vuelo Te invitamos...</p>
                </div>
            </div>

            <div id='correo1' className='p-3' hidden={isCorreo1 ? false : true}>
                <h3 className=" text-gray-900 dark:text-white">
                    <span className='font-semibold'>Asunto: Llena esta encuesta y recibe un premio en nuestro evento  </span>
                    <br />
                    <span className='font-normal underline'>hectorredroban@uniscan.gov.ec</span>
                    <br />
                    <span className='font-light'>Para Tu usuario </span>
                    <hr />
                    <p>Estimado huésped:
                        <br />
                        Estamos gustosos de compartir esta mañana contigo en el vuelo VTU2023. <br /> Es por ello, que te invitamos a realizar una encuesta rápida sobre los productos que desearías adquirir durante esta mañana. <br />
                        Te invitamos a hacer click en el siguiente enlace y completar toda la encuesta: <br />
                        <span className='underline text-blue-500' onClick={handleOpen}>www.vitrinauniscan.com/premio</span>
                        <br />
                        Recibe automáticamente en tu dispositivo un cupón con el 20% de descuento en los productos y servicios que ofreceremos el día de hoy. <br />
                        Gracias por volar con nosotros. <br />
                        UnisAirline
                    </p>
                </h3>

            </div>
            <div id='correo2' className='p-3' hidden={isCorreo2 ? false : true}>
                <h3 className=" text-gray-900 dark:text-white">
                    <span className='font-semibold'>Asunto: Ganaste un descuento en este evento! </span><br />
                    <span className='font-normal underline'>uniscan@infogmail.ec</span>
                    <br />
                    <span className='font-light'>Para Tu usuario </span>
                    <hr />
                    <p>Estimado huésped:
                        <br />
                        Bienvenido a nuestra Vitrina Tecnológica. <br />
                        Durante las próximas horas compartiremos gratas sorpresas, pero sobretodo la oportunidad de introducirnos en el mundo de la seguridad para tu negocio. Es por ello, que te invitamos a responder a este correo electrónico con tus datos para ser seleccionado: <br />
                    </p>
                    <div className='bg-blue-800 m-2 p-3 text-white uppercase font-bold rounded hover:cursor-pointer
                            hover:bg-sky-800 transition-colors text-center' onClick={handleOpen2}>Llena tus datos Aquí</div>
                    <p>
                        Los tres primeros pasajeros que respondan este correo electrónico recibirán automáticamente en sus dispositivos un cupón con el 25% de descuento en los productos y servicios que ofreceremos el día de hoy. <br />
                        Gracias por volar con nosotros. <br />
                        UnisAirline
                    </p>
                </h3>
            </div>
            <div id='correo3' className='p-3' hidden={isCorreo3 ? false : true}>
                <h3 className=" text-gray-900 dark:text-white">
                    <span className='font-semibold'>Asunto: Llena esta encuesta y recibe un premio en nuestro evento  </span>
                    <br />
                    <span className='font-normal underline'>uniscan@uniscan.com.ec</span>
                    <br />
                    <span className='font-light'>Para Tu usuario </span>
                    <hr />
                    <p>Estimado Usuario:
                        <br />
                        Estamos gustosos de compartir esta mañana contigo en el vuelo VTU2023. <br /> Es por ello, que te invitamos a realizar una encuesta rápida sobre los productos que desearías adquirir durante esta mañana. <br />
                        Te invitamos a hacer click en el siguiente enlace y completar toda la encuesta: <br />
                        <span className='underline text-blue-500 break-all' onClick={() => {
                            window.open('https://docs.google.com/forms/d/e/1FAIpQLSfex-Pa9iKu7QHnwNTM8xHDjMPhKqn8w3fb5FjdxgZ34blcIg/viewform?usp=sf_link', "_blank")
                        }}>https://docs.google.com/forms/vtu</span>
                        <br />
                        Recibe automáticamente en tu dispositivo un cupón con el 20% de descuento en los productos y servicios que ofreceremos el día de hoy. <br />
                        Gracias por volar con nosotros. <br />
                        UnisAirline
                    </p>
                </h3>

            </div>
        </SidebarAsistente>
    )
}

export default CorreosCharla