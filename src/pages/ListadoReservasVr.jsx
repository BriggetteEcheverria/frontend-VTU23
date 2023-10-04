import React, { useEffect, useState } from 'react'
import logo from '../images/logoUnis.png'
import clienteAxios from '../config/clienteAxios'
import {
    FaSyncAlt
} from "react-icons/fa";

const ListadoReservasVr = () => {
    const [usuarios, setUsuarios] = useState([])
    const [isReservasChange, setIsReservasChange] = useState(0)
    async function cargarClientes() {
        const { data } = await clienteAxios(`/usuarios`)
        console.log(data);
        setUsuarios(data)
    }
    useEffect(() => {

        cargarClientes()

    }, [isReservasChange])

    // 👇️ sort by String property ASCENDING (A - Z)
    const strAscending = [...usuarios].sort((a, b) =>
        a.actividadVR.fecha < b.actividadVR.fecha ? 1 : -1,
    );

    const handleLocalStorage = () => {
        window.localStorage.setItem("isThisInLocalStorage", "true");
        window.dispatchEvent(new Event("storage"));
    };
    window.addEventListener('storage', () => {
        setIsReservasChange(isReservasChange + 1)
    })

    const handleRecargar = () => {
        cargarClientes()
    }

    return (
        <>
            <div className='flex h-[10vh]'>
                <img src={logo} />
            </div>
            <div>
                <div className='flex justify-evenly' >
                    <p className='text-center font-bold text-2xl'>LISTADO DE RESERVACIONES VR</p>
                    <div onClick={handleRecargar} className='bg-sky-700 px-5 py-3  text-white uppercase font-bold rounded text-xs hover:cursor-pointer
                    hover:bg-sky-800 transition-colors'> <FaSyncAlt /></div>
                </div>


                {strAscending.map((item, i) => {
                    if (item.actividadVR.estado == false) {
                        return
                    }
                    return <div className={`${item.actividadVR.puntuacion == 0 ? 'bg-neutral-300' : 'bg-green-500'}
                    m-5 p-5 rounded-lg`} key={i}>
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