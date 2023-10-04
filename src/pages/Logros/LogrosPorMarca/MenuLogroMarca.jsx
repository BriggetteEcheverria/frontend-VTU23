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
    if (!flag) {
      if (marcaParam.includes('zebra')) {
        setMarca({
          nombre: 'ZEBRA',
          routeLogroForm: '/obtener-logro?marca=zebra&tipo=1',
          routeLogroPremiumForm: '/obtener-logro?marca=zebra&tipo=2',
          routeLogroConferencia: '/obtener-logro?marca=zebra&tipo=3',
          routeLogroJuego: '/obtener-logro?marca=zebra&tipo=4'
        })
      }
      if (marcaParam.includes('zkteco')) {
        setMarca({
          nombre: 'ZKTECO',
          routeLogroForm: '/obtener-logro?marca=zkteco&tipo=1',
          routeLogroPremiumForm: '/obtener-logro?marca=zkteco&tipo=2',
          routeLogroConferencia: '/obtener-logro?marca=zkteco&tipo=3',
        })
      }
      if (marcaParam.includes('unitech')) {
        setMarca({
          nombre: 'UNITECH',
          routeLogroForm: '/obtener-logro?marca=unitech&tipo=1',
          routeLogroPremiumForm: '/obtener-logro?marca=unitech&tipo=2',
          routeLogroConferencia: '/obtener-logro?marca=unitech&tipo=3',
        })
      }
      if (marcaParam.includes('imin')) {
        setMarca({
          nombre: 'IMIN',
          routeLogroForm: '/obtener-logro?marca=imin&tipo=1',
          routeLogroPremiumForm: '/obtener-logro?marca=imin&tipo=2'
        })
      }
      if (marcaParam.includes('gainscha')) {
        setMarca({
          nombre: 'GAINSCHA',
          routeLogroForm: '/obtener-logro?marca=gainscha&tipo=1',
          routeLogroPremiumForm: '/obtener-logro?marca=gainscha&tipo=2'
        })
      }
      if (marcaParam.includes('elo')) {
        setMarca({
          nombre: 'ELO',
          routeLogroForm: '/obtener-logro?marca=elo&tipo=1',
          routeLogroPremiumForm: '/obtener-logro?marca=elo&tipo=2',
          routeLogroJuego: '/obtener-logro?marca=elo&tipo=4',
        })
      }
      if (marcaParam.includes('bartender')) {
        setMarca({
          nombre: 'BARTENDER',
          routeLogroForm: '/obtener-logro?marca=bartender&tipo=1',
          routeLogroPremiumForm: '/obtener-logro?marca=bartender&tipo=2'
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