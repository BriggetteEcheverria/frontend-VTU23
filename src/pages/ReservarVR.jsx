import React, { useEffect, useState } from 'react'
import logo from '../images/logoUnis.png'
import Alerta from '../components/Alerta'
import clienteAxios from '../config/clienteAxios'

const ReservarVR = () => {
    const [horario, setHorario] = useState([])
    const [flag, setFlag] = useState(false)
    const horarioSelect = [
        { hora: '2:30', cant: 0, horaDesc: '2:30 - 2:40' },
        { hora: '2:40', cant: 0, horaDesc: '2:40 - 2:50' },
        { hora: '2:50', cant: 0, horaDesc: '2:50 - 3:00' },
        { hora: '3:00', cant: 0, horaDesc: '3:00 - 3:10' },
        { hora: '3:10', cant: 0, horaDesc: '3:10 - 3:20' },
        { hora: '3:20', cant: 0, horaDesc: '3:20 - 3:30' },
        { hora: '3:40', cant: 0, horaDesc: '3:30 - 3:40' },
        { hora: '3:30', cant: 0, horaDesc: '3:40 - 3:50' },
        { hora: '3:50', cant: 0, horaDesc: '3:50 - 4:00' },
        { hora: '4:00', cant: 0, horaDesc: '4:00 - 4:10' },
        { hora: '4:10', cant: 0, horaDesc: '4:10 - 4:20' },
        { hora: '4:20', cant: 0, horaDesc: '4:20 - 4:30' },
        { hora: '4:30', cant: 0, horaDesc: '4:30 - 4:40' },
        { hora: '4:40', cant: 0, horaDesc: '4:40 - 4:50' },
        { hora: '4:50', cant: 0, horaDesc: '4:50 - 5:00' },
        { hora: '5:00', cant: 0, horaDesc: '5:00 - 5:10' },
        { hora: '5:10', cant: 0, horaDesc: '5:10 - 5:20' },
        { hora: '5:20', cant: 0, horaDesc: '5:20 - 5:30' },
        { hora: '5:30', cant: 0, horaDesc: '5:30 - 5:40' },
        { hora: '5:40', cant: 0, horaDesc: '5:40 - 5:50' },
        { hora: '5:50', cant: 0, horaDesc: '5:50 - 6:00' }]

    useEffect(() => {
        const horario = JSON.parse(localStorage.getItem('horario'));
        if (horario) {
            setHorario(horario)
        } else {
            setHorario(horarioSelect)
        }
    }, []);

    useEffect(() => {
        if (horario?.length) {
            localStorage.setItem('horario', JSON.stringify(horario));
        }
    }, [horario]);



    const [fecha, setFecha] = useState('')
    const [alerta, setAlerta] = useState('')
    const [nombre, setNombre] = useState('')
    const [inputBuscador, setInputBuscador] = useState('')
    const [isUser, setisUser] = useState(false)
    //Evento de submit para buscar al Cliente form
    const handleSubmitBuscar = async e => {
        e.preventDefault()
        //Verificar que no este vacio el campo
        if ([inputBuscador].includes('')) {
            //Set alerta de error
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            //Set vacio todos los campos y deshabilitar boton
            setNombre('')
            return
        }

        try {
            //Query get para obtener datos del contacto
            const { data } = await clienteAxios(`/usuarios/cedula/${inputBuscador}`)
            setisUser(true)
            //Set informacion apra mostrar en los campos
            setNombre(data.nombre)
            //Borrar input para buscar
            setInputBuscador('')
            //Set alerta sin error
            setAlerta({
                msg: '',
                error: false
            })

        } catch (error) {
            console.log(error);
            //Set alerta con Error
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
            //Set campos en vacio
            setNombre('')
        }

    }
    const handleSubmitReservar = async e => {
        e.preventDefault()
        //Verificar que no este vacio el campo
        if ([fecha].includes('')) {
            //Set alerta de error
            setAlerta({
                msg: 'Elige un horario',
                error: true
            })

            return
        }

        const newState = horario.map(horario => {
            // 👇️ if id equals 2, update country property
            if (horario.hora === fecha) {
                const cantidad = horario.cant
                return { ...horario, cant: cantidad + 1 };
            }

            // 👇️ otherwise return the object as is
            return horario;
        });

        setHorario(newState);


    }
    const { msg } = alerta
    return (
        <>
            <div >
                <div className='flex h-[10vh]'>
                    <img src={logo} />
                </div>

                <div className='mt-36 justify-center lg:w-2/3 mx-auto'>
                    <p className='uppercase text-center font-bold text-2xl  text-[#02275e] sm:text-2xl'>Reserva sala de Juegos</p>
                    <div className='flex justify-center'>
                        {msg && <Alerta alerta={alerta} />}
                    </div>
                    {/* Formulario buscar asistente */}
                    <form onSubmit={handleSubmitBuscar} action="" className='text-[#02275e] rounded-lg  my-auto  m-2 sm:mx-20 shadow-md flex justify-between place-items-center'>
                        <input
                            autoFocus
                            id='cedula'
                            type='text'
                            placeholder='Escanéa tu código QR'
                            className='w-full m-5 p-3 border rounded bg-gray-50 text-[#02275e]'
                            value={inputBuscador}
                            onChange={e => setInputBuscador(e.target.value)}
                        />
                    </form>
                    {/* Formulario para imprimir QR */}
                    <div className='text-[#02275e] rounded-lg   bg-[#02275e] my-auto p-8 m-3 sm:mx-20 shadow-md'>
                        <form onSubmit={handleSubmitReservar}>

                            <div className='my-2'>
                                <label
                                    className=' text-white block text-xl font-bold'
                                    htmlFor='nombre'
                                >Nombre:</label>
                                <input
                                    readOnly
                                    id='nombre'
                                    type='text'
                                    placeholder='Su Nombre'
                                    className='read-only:bg-gray-200 w-full mt-3 p-3 border rounded-xl bg-gray-50 text-[#02275e]'
                                    value={nombre}
                                />
                            </div>
                            <div className='my-2'>
                                <label
                                    className=' text-white block text-xl font-bold'
                                    htmlFor='nombre'
                                >Escoge tu hora para reservar:</label>
                                <div className='flex flex-row text-center justify-center gap-10'>
                                    <select value={fecha} onChange={e => setFecha(e.target.value)} name="fecha" id='fecha' className="w-full mt-3 mb-3 p-3 border rounded-xl bg-gray-50  border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value=''>Elige tu horario preferido</option>
                                        {horario.map((item, i) => {
                                            if(item.cant < 2){
                                                return <option key={i} value={item.hora}>{item.horaDesc}</option>
                                            }
                                        })}
                                    </select>
                                </div>


                            </div>


                            <input
                                disabled={isUser ? false : true}
                                type='submit'
                                value={'Reservar'}
                                className='bg-sky-700 w-full py-3 mt-2  text-white uppercase font-bold rounded hover:cursor-pointer
                              hover:bg-sky-800 transition-colors disabled:bg-gray-400'
                            />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReservarVR