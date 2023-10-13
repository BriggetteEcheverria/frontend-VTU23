import React, { useEffect } from 'react'
import { useState } from 'react'
import logo from '../images/LogoUnis.png'
import avion from '../images/avion.png'
import clienteAxios from '../config/clienteAxios'
import Alerta from '../components/Alerta'
import { useSearchParams } from 'react-router-dom'


const BrazaleteZebra = () => {

  const [searchParams] = useSearchParams();
  const tourParam = searchParams.get('tour')
  const hostParam = searchParams.get('host')

  const [id, setId] = useState('')
  const [alerta, setAlerta] = useState({})
  /*Flag para asignar la marca y los url*/
  const [flag, setFlag] = useState(false)
  const [tour, setTour] = useState('')
  const [nombrehost, setNombrehost] = useState('')

  /*UseEffect para asignar la marca y los url cuando obtenga el parametro marca */
  useEffect(() => {
    if (!flag) {
      if (tourParam.includes('charlesDarwin')) {
        setTour('ESTACIÓN CIENTÍFICA CHARLES DARWIN')
      }
      if (tourParam.includes('grietas')) {
        setTour('LAS GRIETAS')
      }
      if(hostParam.includes('1')){
        setNombrehost('HOST_TICKETERA_BRAZALETE_1')
      }
      if(hostParam.includes('2')){
        setNombrehost('HOST_TICKETERA_BRAZALETE_2')
      }
    }

    return () => {
      setFlag(true)
    }
  }, [])

  //Evento al hacer submit del form
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
      const nombre = data.nombre;
      const { data1 } = await clienteAxios.post('/printers/imprimirBrazaleteTour', {id , tour, nombrehost})
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
      }, 1500);

      setId('')
    } catch (error) {
      //mostrar Error
      console.log(error);
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
      <div className='flex h-[10vh]'>
        <img src={logo} />
      </div>
      <div className='flex  h-[70vh] justify-center'>

        <div className='text-white rounded-lg  my-auto bg-[#02275e] p-14 m-5 sm:mx-20 shadow-md'>
          <p className='text-left font-bold text-2xl sm:text-4xl uppercase'>Tour {tour}</p>

          {msg && <Alerta alerta={alerta} />}
          {/* Formulario para buscar cliete y mandar a imprimir la etiqueta */}
          <form onSubmit={handleSubmit}>
            <div className='my-5'>
              <label
                className='uppercase text-white block text-xl font-bold'
                htmlFor='id'
              >ID</label>
              <input
                autoFocus
                id='id'
                type='text'
                placeholder='Escanéa tu código'
                className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-[#02275e]'
                value={id}
                onChange={e => setId(e.target.value)}
              />
            </div>
            <input
              type='submit'
              value={'Imprime tu Brazalete'}
              className='bg-sky-700 w-full py-3  text-white uppercase font-bold rounded hover:cursor-pointer
                        hover:bg-sky-800 transition-colors'
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default BrazaleteZebra