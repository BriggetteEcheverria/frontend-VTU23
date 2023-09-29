import React, { useEffect, useState } from 'react'
import logo from '../images/logoUnis.png'
import clienteAxios from '../config/clienteAxios'

const ListadoReservasVr = () => {
    const [nombre, setNombre] = useState('')
    const [hora, setHora] = useState('')
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        // declare the data fetching function
        const fetchData = async () => {
            const { data } = await clienteAxios(`/usuarios`)
            setUsuarios(data)
            console.log(data);
        }

        fetchData()
            .catch(console.error);

    }, [])

    return (
        <>
            <div className='flex h-[10vh]'>
                <img src={logo} />
            </div>
            <div>
                <p className='text-center font-bold text-2xl'>LISTADO DE RESERVACIONES VR</p>

                {usuarios.map((item) => {
                    if(item.actividadVR.estado == false){
                        return
                    }
                    return <div className='m-5 p-5 bg-neutral-300 rounded-lg'>
                    <div>
                        <p className='font-extrabold'>Nombre Reserva: <span className='font-normal' >{item.nombre}</span></p>
                        <p className='font-extrabold'>Horario de Reserva: <span className='font-normal' > {item.actividadVR.fecha}</span></p>
                    </div>
                </div>
                })}
            </div>

        </>
    )
}

export default ListadoReservasVr