import React, { useState, useEffect } from 'react'
import logo from '../../images/logoUnis.png'
import Alerta from '../../components/Alerta'
import clienteAxios from '../../config/clienteAxios'
import { useSearchParams } from 'react-router-dom'

const Charlas3 = () => {
  const [idUsuario, setIdUsuario] = useState('')
  const [logro, setLogro] = useState('')
  const [flag, setFlag] = useState(false)
  const [alerta, setAlerta] = useState('')

  const handleLogroZebra = async () => {
    const idLogro = '651dbf8654eb99d8d33db320'
    const { data } = await clienteAxios.post('/usuarios/asignarLogro', { idLogro, idUsuario })
  }
  const handleLogroZkteco = async () => {
    const idLogro = '651dbfc954eb99d8d33db322'
    const { data } = await clienteAxios.post('/usuarios/asignarLogro', { idLogro, idUsuario })
  }
  const handleLogroUnitech = async () => {
    const idLogro = '651dc00f54eb99d8d33db323'
    const { data } = await clienteAxios.post('/usuarios/asignarLogro', { idLogro, idUsuario })
  }

  //Evento cuando envia el formulario
  const handleSubmit = async e => {
    e.preventDefault()
    //valida que no este vacio el input
    if ([idUsuario].includes('')) {
      //setea el campo usuario vacio
      setIdUsuario('')
      //muestra alerta
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      })
      return
    }

    // Asigna el logro al cliente que se ha ingresado en el input
    try {
      await handleLogroZebra()
      await handleLogroZkteco()
      await handleLogroUnitech()

      setIdUsuario('')
      //muestra alerta
      setAlerta({
        msg: 'Logro añadido correctamente',
        error: false
      })

    } catch (error) {
      console.log(error);
      //setea el campo usuario vacio
      setIdUsuario('')
      //muestra alerta
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
    }
  }
  const { msg } = alerta
  return (
    <>
      <div className='flex h-[10vh]'>
        <img src={logo} />
      </div>
      <div className='flex flex-col h-[80vh] justify-center items-center'>
        <div className='flex'>
          <img src={'../src/images/logros/zebra/zebra_logroConferencia.png'} className='lg:w-1/4 p-5 w-1/2' />
          <img src={'../src/images/logros/zkteco/zkteco_logroConferencia.png'} className='lg:w-1/4 p-5 w-1/2' />

        </div>
        <img src={'../src/images/logros/unitech/unitech_logroConferencia.png'} className='lg:w-1/4 p-5 w-1/2' />

        {msg && <Alerta alerta={alerta} />}
        <label htmlFor="codigo" className='text-[#02275e] block text-xl font-bold text-center'> LOGRO CHARLA ZEBRA - ZKTECO - UNITECH</label>
        {/* Formulario para agregar logro a un usuario */}
        <form onSubmit={handleSubmit}>
          <input
            autoComplete='off'
            autoFocus
            id='codigo'
            type='text'
            placeholder='Lea el código del cliente'
            className='w-64 mt-3 p-3 border rounded-xl bg-gray-50 text-[#02275e]'
            value={idUsuario}
            onChange={e => setIdUsuario(e.target.value)}
          />
        </form>
      </div>
    </>
  )
}

export default Charlas3