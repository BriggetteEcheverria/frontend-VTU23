import React, { useEffect, useState } from 'react'
import logo from '../../../images/logoUnis.png'
import { Link, useSearchParams } from 'react-router-dom'
import MenuLogroPorMarca from '../../../components/MenuLogroPorMarca'

/*Menu donde salen los botones para asignar los logros depende la marca */

const MenuLogroMarca = () => {

  /*Usar search params para obtener los paramentros del URL para saber que marca se va a mostrar en el menu  */
  const [searchParams] = useSearchParams();
  
  /*Flag para asignar la marca y los url*/
  const [flag, setFlag] = useState(false)
  const [marca, setMarca] = useState('')
  
  const marcaParam = searchParams.get('marca')

  /*UseEffect para asignar la marca y los url cuando obtenga el parametro marca */
  useEffect(() => {
    if(!flag){
      if(marcaParam.includes('zebra')){
        setMarca({
          nombre: 'ZEBRA',
          routeLogroForm: '/obtener-logro?marca=zebra&tipo=1',
          routeLogroPremiumForm: '/obtener-logro?marca=zebra&tipo=2'
        })
      }
      if(marcaParam.includes('zkteco')){
        setMarca({
          nombre: 'ZKTECO',
          routeLogroForm: '/obtener-logro?marca=zkteco&tipo=1',
          routeLogroPremiumForm: '/obtener-logro?marca=zkteco&tipo=2'
        })
      }
    }
  
    return () => {
     setFlag(true)
    }
  }, [])

  return (
    <>
      <div className='flex h-[10vh]'>
        <img src={logo} />
      </div>
      <MenuLogroPorMarca marca={marca} />
    </>
  )
}

export default MenuLogroMarca