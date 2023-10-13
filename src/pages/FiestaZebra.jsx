import React, { useState } from 'react'
import logo from '../images/logoUnis.png'
import logoZebra from '../images/logos/zebraN.png'
import cerveza from '../images/fiesta/cerveza.webp'
import whisky from '../images/fiesta/whisky.png'
import mojito from '../images/fiesta/mojito.png'
import pinaColada from '../images/fiesta/pinaColada.png'
import Alerta from '../components/Alerta'
import clienteAxios from '../config/clienteAxios'


const FiestaZebra = () => {
    const [alerta, setAlerta] = useState('')
    const [id, setId] = useState('')
    const [isUser, setIsUser] = useState(false)
    const [nombre, setNombre] = useState('')

    const onClickCerveza = async () => {
        const nombreBebida = 'cerveza'
        await clienteAxios.post('/printers/imprimirBebida', {nombreBebida})
        setIsUser(false)
    }
    const onClickWhisky = async () => {
        const nombreBebida = 'whisky'
        await clienteAxios.post('/printers/imprimirBebida', {nombreBebida})
        setIsUser(false)
    }
    const onClickMojito = async() => {
        const nombreBebida = 'mojito'
        await clienteAxios.post('/printers/imprimirBebida', {nombreBebida})
        setIsUser(false)
    }
    const onClickPinaColada = async () => {
        const nombreBebida = 'pinacolada'
        await clienteAxios.post('/printers/imprimirBebida', {nombreBebida})
        
        setIsUser(false)
    }

    const handleSubmit = async e => {
        e.preventDefault()
        //verificar si esta vacio
        if ([id].includes('')) {
            setId('')
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return
        }
        try {
            //Buscar si existe cliente
            const { data } = await clienteAxios(`/usuarios/${id}`)
            console.log(data);
            setNombre(data.nombre)
            setIsUser(true)
            setId('')
        } catch (error) {
            //mostrar Error
            setId('')
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
        }
    }

    const { msg } = alerta

    return (
        <div>
            <div className='flex px-10 h-[15vh] justify-between '>
                <img src={logo} />
                <img src={logoZebra} />
            </div>
            <div hidden={isUser ? true : false}>
                <div className='h-[80vh] justify-center text-center flex flex-col lg:px-80 mx-20'>
                    <p className='uppercase font-extrabold lg:text-3xl text-xl pb-4'>ESCANÉA TU CÓDIGO Y ELIGE TU TRAGO</p>
                    {msg && <Alerta alerta={alerta} />}
                    <form onSubmit={handleSubmit} >
                        <input
                            autoFocus
                            type="text"
                            value={id}
                            onChange={e => setId(e.target.value)}
                            placeholder='Escanéa tu código QR '
                            className={` ${isUser ? 'bg-gray-200' : 'bg-gray-50'} w-full mt-3 p-3 border border-[#02275e] rounded-xl bg-gray-50 text-[#02275e]`} />
                    </form>
                </div>
            </div>
            <div hidden={isUser ? false : true}>
                <div className='flex h-[80vh] flex-col text-center p-3'>
                    <p className='text-2xl font-medium p-3'>¡Hola <span className='uppercase font-bold'>{nombre}</span> , elije tu trago! </p>
                    <div className='grid grid-rows-2 grid-flow-col m-auto gap-5 '>
                        <div id='cerveza' onClick={onClickCerveza} className='bg-sky-700  p-5 w-60 text-white uppercase font-bold rounded hover:cursor-pointer
                        hover:bg-sky-800 transition-colors text-center place-content-center flex m-auto flex-col'>
                            <p>Cerveza</p>
                            <br />
                            <img src={cerveza} className='h-40' />
                        </div>
                        <div id='whisky' onClick={onClickWhisky} className='bg-sky-700  p-5 w-60 text-white uppercase font-bold rounded hover:cursor-pointer
                        hover:bg-sky-800 transition-colors text-center flex m-auto flex-col'>
                            <p>Whisky</p>
                            <br />
                            <img src={whisky} className='h-40' />
                        </div>
                        <div id='mojito' onClick={onClickMojito} className='bg-sky-700  p-5 w-60 text-white uppercase font-bold rounded hover:cursor-pointer
                        hover:bg-sky-800 transition-colors text-center flex m-auto flex-col'>
                            <p>Mojito</p>
                            <br />
                            <img src={mojito} className='h-40' />
                        </div>
                        <div id='pinaColada' onClick={onClickPinaColada} className='bg-sky-700  p-5 w-60 text-white uppercase font-bold rounded hover:cursor-pointer
                        hover:bg-sky-800 transition-colors text-center flex m-auto flex-col'>
                            <p>Piña Colada</p>
                            <br />
                            <img src={pinaColada} className='h-40' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FiestaZebra