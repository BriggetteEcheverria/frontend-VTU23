import React, { useEffect, useState } from 'react'
import logo from '../../images/logoUnis.png'
import clienteAxios from '../../config/clienteAxios'
import oro from '../../images/medallas-01.svg'
import plata from '../../images/medallas-02.svg'
import bronce from '../../images/medallas-03.svg'

//Pagina para mostrar posiciones de los logros

const PodioLogros = () => {

    const [flag, setFlag] = useState(false)
    const [userOrdenado, setUserOrdenado] = useState([])

    //hook para obtener las posiciones de los usuarios dependiendo los logros

    useEffect(() => {
        const interval = setInterval(() => {
            //Metodo para busqueda de datos
            const dataFetch = async () => {
                //Query para obtener todos los usuarios
                const { data } = await clienteAxios('/usuarios')
                //Ordenar de mayor a menor basado en la cantidad de logros
                const sortPodio = [...data].sort((a, b) => b.logros.length - a.logros.length)
                //set array de user ordenado por cantidad de logros de mayor a menor 
                setUserOrdenado(sortPodio)
            };
            if (!flag) {
                dataFetch()
            }
            return () => {
                setFlag(true)
            }
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className='flex h-[10vh] p-1'>
                <img src={logo} />
            </div>


            <div className='m-3'>
                {userOrdenado.map((user,i) => {
                    return (
                        <>
                            <div key={user._id} className='bg-blue-800 rounded-lg p-4 text-white flex flex-row m-2 justify-between'>
                                <div>
                                    <p className='font-bold uppercase'>{user.nombre}</p>
                                    <p className='text-lg'>Logros obtenidos: <span className='font-black '>{user.logros.length}</span></p>
                                </div>
                                {i == 0 && <img src={oro} alt="" className='w-1/5 lg:w-28' />}
                                {i == 1 && <img src={plata} alt="" className='w-1/5 lg:w-28' />}
                                {i == 2 && <img src={bronce} alt="" className='w-1/5 lg:w-28' />}

                            </div>
                        </>
                    )
                })}
            </div>
        </>

    )
}

export default PodioLogros