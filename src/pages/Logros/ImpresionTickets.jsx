import React, { useState } from 'react'
import logo from '../../images/logoUnis.png'
import clienteAxios from '../../config/clienteAxios'
import Alerta from '../../components/Alerta'

const ImpresionTickets = () => {

    const [input, setInput] = useState('')
    const [nombre, setNombre] = useState('')
    const [logros, setLogros] = useState('')
    const [isUser, setIsUser] = useState(false)
    const [alerta, setAlerta] = useState('')
    const [id, setId] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        if ([input].includes('')) {
            setAlerta({
                msg: 'Escanée su código',
                error: true
            })
            return
        }
        try {
            const { data } = await clienteAxios(`/usuarios/${input}`)
            const nombreUser = data.nombre
            const numLogros = (data.logros).length
            setId(data._id)
            setIsUser(true)
            setNombre(nombreUser)
            setLogros(numLogros)
            setInput('')
            setAlerta({
                msg: '',
                error: false
            })

        } catch (error) {
            setInput('')
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
        }
    }
    const handleSubmitImpresion = async (e) => {
        e.preventDefault()
        try {
            const nombrehost = 'HOST_BOLETERA_1'
            const { data2 } = await clienteAxios.post('/printers/imprimirSorteoFinal', { nombrehost, id })
            setIsUser(false)
            setAlerta({
                msg: 'Imprimiendo...',
                error: false
            })
            //Borrar alerta despues de 1500ms
            setTimeout(() => {
                setAlerta({
                    msg: '',
                    error: false
                })
            }, 2000);
        } catch (error) {
            setIsUser(false)
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
            //Borrar alerta despues de 1500ms
            setTimeout(() => {
                setAlerta({
                    msg: '',
                    error: false
                })
            }, 5000);
        }


    }

    const { msg } = alerta
    return (
        <>
            <div className='flex h-[10vh] p-1'>
                <img src={logo} />
            </div>
            <div className='h-[80vh] justify-center text-center flex flex-col lg:px-80 mx-20'>
                <p className='uppercase font-extrabold lg:text-3xl text-xl pb-4'>Imprimir tickets para el sorteo</p>
                {msg && <Alerta alerta={alerta} />}
                <form onSubmit={handleSubmit} >
                    <input
                        autoComplete='off'
                        autoFocus
                        type="text"
                        value={input}
                        disabled={isUser ? true : false}
                        onChange={e => setInput(e.target.value)}
                        placeholder='Escanéa tu código QR '
                        className={` ${isUser ? 'bg-gray-200' : 'bg-gray-50'} w-full mt-3 p-3 border border-[#02275e] rounded-xl bg-gray-50 text-[#02275e]`} />
                </form>

                <form
                    onSubmit={handleSubmitImpresion}
                    className='text-center'
                    hidden={isUser ? false : true}
                >
                    <p className='mt-5 text-xl'>Hola {nombre}! has obtenido {logros} recompensas.</p>
                    <input
                        type="submit"
                        value="Imprimir tus tickets para el sorteo"
                        className='bg-sky-700 px-2 w-full py-3  text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors mt-5 ' />
                </form>
            </div>
        </>
    )
}

export default ImpresionTickets