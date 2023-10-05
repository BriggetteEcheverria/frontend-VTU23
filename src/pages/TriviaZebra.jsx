import React, { useState } from 'react'
import logo from '../images/logoUnis.png'
import logoZebra from '../images/logos/zebraN.png'
import gafasBambu from '../images/gafasBambu.jpeg'

const TriviaZebra = () => {

    const listaPreguntas = [
        {
            id: '1',
            pregunta: '¿Cuáles son los últimos lanzamientos de Zebra?',
            opciones: ['TC15, ET4X, ZT231', 'TC15, ET5X, ZT111', 'TC2X, L10, ZT411'],
            respuesta: [0]
        },
        {
            id: '2',
            pregunta: '¿Qué efectos especiales puede imprimir una impresora ZC300?',
            opciones: ['Estampado, efecto coning, efecto 3D ', 'Efecto perlado, laminado, barnizado', 'Efecto perlado, efecto 3D metálico, efecto larga vida'],
            respuesta: [2]
        },
        {
            id: '3',
            pregunta: '¿Cuál es la cantidad de impresión de tarjetas anual sugerida por Zebra para los modelos ZC100 y ZC300?',
            opciones: ['10000/15000 Tarjetas anuales', '12000/17000 Tarjetas anuales', '15000/20000 Tarjetas anuales'],
            respuesta: [0]
        },
        {
            id: '4',
            pregunta: '¿En qué medidas se encuentra disponible la Tablet ET4x?',
            opciones: ['10 y 12 pulgadas', '8 y 10 pulgadas', '8 y 12 pulgadas'],
            respuesta: [1]
        },
        {
            id: '5',
            pregunta: '¿Cuáles son los materiales de cintas/ribbons utilizados en las impresoras de etiquetas Zebra? ',
            opciones: ['Térmica, transferencia termica, Resina', ' Cera, resina, Transferencia térmica.', 'Cera, Cera-Resina, Resina'],
            respuesta: [2]
        },
        {
            id: '6',
            pregunta: '¿Cuándo es recomendable usar un ribbon/cinta de resina? ',
            opciones: ['Aplicaciones especiales, alta resistencia y excelente calidad de impresión, Alta durabilidad.', 'Propósito general, calidad de impresión y menor coste, etiquetas con duración corta. ', 'Alta versatilidad, calidad de impresión y alta velocidad, durabilidad. '],
            respuesta: [0]
        },
        {
            id: '7',
            pregunta: '¿Cuál es la vida útil de un cabezal de Zebra? ',
            opciones: ['3 millones de pulgadas lineales.', '1 millon de pulgadas lineales.', '2 millones de pulgadas lineales'],
            respuesta: [1]
        },
        {
            id: '8',
            pregunta: '¿Cuántos años se encuentra Zebra en el mercado? ',
            opciones: ['50 años', '54 años ', '60 años'],
            respuesta: [1]
        },
        {
            id: '9',
            pregunta: ' El TC15 es considerado un modelo de rango: ',
            opciones: ['Medio ', 'Premium ', 'Entrada '],
            respuesta: [2]
        },
        {
            id: '10',
            pregunta: '¿Con cuántos puertos puede ser solicitado un reader FX9600?',
            opciones: ['4 y 8 puertos', '2 y 4 puertos', '3 y 6 puertos'],
            respuesta: [0]
        },
    ]

    const [respuesta, setRespuesta] = useState('')

    const handleOpcion = () => {
        console.log('entra')
        console.log(respuesta);
    }

    function funcion(opcion){
        console.log(opcion);
    }

    return (
        <>
            <div className='flex p-5 h-[15vh] justify-between '>
                <img src={logo} />
                <img src={logoZebra} />
            </div>

            <div id='start' className='flex flex-col justify-center text-center  place-items-center mx-auto h-[80vh]'>
                <img src={gafasBambu} />
                <p className='text-4xl p-5 uppercase'>¡Participa en la trivia para ganar una gafas de bambú!</p>
                <button className='bg-sky-700 px-2 py-3 w-72 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors mt-5 '>Comenzar</button>
            </div>
            <div>
                Tiempo: 10
                {listaPreguntas.map((pregunta, i) => {
                    return (
                        <div key={i}>
                            <p>{pregunta.pregunta}</p>
                            {pregunta.opciones.map((opcion, j) => {
                                return <div className="flex items-center" key={j}>
                                    <input
                                        id={opcion}
                                        type="radio"
                                        value={respuesta}
                                        onChange={e => setRespuesta(e.target.value)} 
                                        name={pregunta.id} 
                                        onClick={handleOpcion} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor={opcion} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{opcion}</label>
                                </div>
                            })}
                        </div>

                    )

                })}

            </div>

        </>
    )
}

export default TriviaZebra