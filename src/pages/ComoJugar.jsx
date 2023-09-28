import React from 'react'
import SidebarAsistente from '../components/SidebarAsistente'
import logo from '../images/LogoUnis.png'

const ComoJugar = () => {
    return (
        <SidebarAsistente>
            <div className='flex h-[10vh] p-2 place-items-center'>
                <img src={logo} className='h-12' />
            </div>
            <div className='mx-5 mb-5 text-justify'>
                <p className='text-center'>Gracias por escoger el <br /><span className='uppercase font-bold text-[#02275e]'>Resort Uniscan – Galápagos</span><br /> para su estadía.</p>
                <br />
                <p className='text-center text-[#02275e] italic'>¡Te recompensamos por ser uno de nuestros huéspedes!</p>
                <br />
                <p>Visita cada área del Resort y participa en las preguntas o actividades de cada una, al hacerlo puedes ganar puntos que se acumularán para un <span className='text-[#02275e]  font-extrabold'>GRAN SORTEO FINAL.</span></p>
                <br />
                <p className='font-black uppercase text-[#02275e]'>Pasos para obtener recompensas:</p>
                <ol className='list-decimal list-inside '>
                    <li className='underline decoration-sky-500 decoration-2 '>Asistir a las conferencias (Consulta el itinerario)</li>
                    <li className='underline decoration-pink-500 decoration-2 '>Acércate a todas las áreas del resort y escucha las exposiciones.</li>
                    <li className='underline decoration-indigo-500 decoration-2 '>Participa y responde las preguntas de los expositores.</li>
                    <li className='underline decoration-orange-500 decoration-2 '>Encuentra los animales escondidos y responde la trivia.</li>
                </ol>
                <br />
                <p className='text-center'>¡Mientras más puntos acumules la aplicación se actualizará con tu posición en el ranking de huéspedes!</p>
                <br />
                <p> <span className='font-black text-[#02275e]'>GRAN PREMIO:</span> VIAJE A GALÁPAGOS PARA DOS PERSONAS.</p>
                <br />
                <p className='text-sm font-bold'>Si tienes dudas acércate a cualquier guía de nuestro Resort.</p>
                <br />
                <p className='text-center text-[#02275e] italic'>¡Disfruta la experiencia Uniscan!</p>
                <br />
                <div className='text-xs'>
                    <p>*El sorteo se realizará entre todos los participantes sin importar su lugar en el ranking.</p>
                    <p>*Mientras más puntos acumules más oportunidades tendrás de ganar.</p>
                    <p>*Tendremos premios sorpresa para los primeros lugares del ranking.</p>
                    <span className='text-red-600'>*Aplica restricciones</span>
                </div>

            </div>
        </SidebarAsistente>
    )
}

export default ComoJugar