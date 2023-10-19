import React from 'react'
import logo from '../images/logoB.png'
import Vuelo from '../components/Vuelo';
import SidebarAsistente from '../components/SidebarAsistente';


const Itinerario = () => {
    const locale = 'en';
    const [today, setDate] = React.useState(new Date()); // Save the current date to be able to trigger an update

    React.useEffect(() => {
        const timer = setInterval(() => { // Creates an interval which will update the current data every minute
            // This will trigger a rerender every component that uses the useDate hook.
            setDate(new Date());
        }, 60 * 1000);
        return () => {
            clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
        }
    }, []);

    const day = today.toLocaleDateString(locale, { weekday: 'long' });
    const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;

    const hour = today.getHours();
    const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}, `;

    const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });

    return (
        <SidebarAsistente>
            <div className='bg-[#1a2092] flex p-5 justify-around place-items-center '>
                <img src={logo} alt="" className='w-1/2 lg:w-2/6' />
                <p className='text-white font-bold'>{time}</p>
            </div>
            <div>
                <p className='uppercase font-extrabold text-center bg-[#ef7c3f] text-white '>Llegadas nacionales</p>
                <p className='uppercase font-medium text-center bg-[#1a2092] text-white'>CRONOGRAMA</p>
            </div>
            <div className='bg-[#ef7c3f] grid grid-cols-4 p-2 justify-around place-items-center font-black uppercase text-[9px] text-center lg:text-base'>
                <p className='text-white font-bold'>Arribo</p>
                <p className='text-white font-bold'>Vuelo</p>
                <p className='text-white font-bold'>Itinerario</p>
                <p className='text-white font-bold'>Estado</p>
            </div>
            <Vuelo info={
                ({
                    hora: '8:00 a 9:00',
                    vuelo: "src/images/logos/LogoUnis.png",
                    destino: 'CHECK-IN y desayuno express',
                    estado: 'despegó',
                    color: 'azul'
                })} />
            <Vuelo info={
                ({
                    hora: '9:00 a 9:30',
                    vuelo: "src/images/logos/LogoUnis.png",
                    destino: 'Abordaje y despegue (Bienvenida)',
                    estado: 'A tiempo',
                    color: 'gris'
                })} />
            <Vuelo info={
                ({
                    hora: '9:30 a 10:30',
                    texto: "INVITADO",
                    destino: 'Conferencia: Ciberseguridad en tiempos de crisis informática',
                    estado: 'A tiempo',
                    color: 'azul'
                })} />
            <Vuelo info={
                ({
                    hora: '10:30 a 11:10',
                    vuelo: "src/images/logos/zebra.png",
                    destino: 'Conferencia: The Modern Store by Zebra',
                    estado: 'A tiempo',
                    color: 'gris'
                })} />
            <Vuelo info={
                ({
                    hora: '11:10 a 11:50',
                    vuelo: "src/images/logos/zkteco.png",
                    destino: 'Conferencia: Mejorando la experiencia del usuario en tienda: Tags electrónicos y pantallas publicitarias',
                    estado: 'A tiempo',
                    color: 'azul'
                })} />
            <Vuelo info={
                ({
                    hora: '11:50 a 12:20',
                    vuelo: "src/images/logos/unitech.png",
                    destino: 'Conferencia: Conoce nuestro software especializado para complementar la operación de los equipos POS',
                    estado: 'A tiempo',
                    color: 'gris'
                })} />
            <Vuelo info={
                ({
                    hora: '12:20 a 13:00',
                    vuelo: "src/images/logos/LogoUnis.png",
                    destino: 'ACTIVIDAD SORPRESA',
                    estado: 'A tiempo',
                    color: 'azul',
                    colorTexto: true
                })} />
            <Vuelo info={
                ({
                    hora: '13:00 a 14:00',
                    vuelo: "src/images/logos/zkteco.png",
                    destino: 'ALMUERZO',
                    estado: 'A tiempo',
                    color: 'gris',
                    colorTexto: true
                })} />
            <Vuelo info={
                ({
                    hora: '14:00 a 18:00',
                    vuelo: "src/images/logos/LOGOS VERTICAL.png",
                    destino: 'CHECK-IN RESORT Y CENTRO DE EXPERIENCIAS (SHOWROOM)',
                    estado: 'A tiempo',
                    color: 'azul'
                })} />
            <Vuelo info={
                ({
                    hora: '19:00 a 23:00',
                    vuelo: "src/images/logos/zebra.png",
                    destino: 'FIESTA DE PLAYA',
                    estado: 'A tiempo',
                    color: 'gris',
                    colorTexto: true,
                    desc: 'Código de vestimenta: Color blanco'
                })} />
        </SidebarAsistente>
    )
}

export default Itinerario