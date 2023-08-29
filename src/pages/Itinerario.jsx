import React from 'react'
import logo from '../images/logo.png'
import Vuelo from '../components/Vuelo';

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
        <>
            <div className='bg-[#02275e] flex p-5 justify-around place-items-center '>
                <img src={logo} alt="" className='w-1/3 lg:w-1/6' />
                <p className='text-white font-black'>ITINERARIO</p>
                <p className='text-white font-bold'>{time}</p>
            </div>
            <div className='bg-[#295eac] grid grid-cols-4 p-2 justify-around place-items-center font-black uppercase text-xs text-center lg:text-base'>
                <p className='text-white font-bold'>Hora programada</p>
                <p className='text-white font-bold'>Vuelo</p>
                <p className='text-white font-bold'>Destino</p>
                <p className='text-white font-bold'>Estado</p>
            </div>
            <Vuelo info={
                ({
                    hora: '9:00 AM',
                    vuelo: "src/images/logos/zebra.png",
                    destino: 'CONFERENCIA',
                    estado: 'aterrizo',
                    color:'azul'
                })} />
            <Vuelo info={
                ({
                    hora: '9:50 AM',
                    vuelo: "src/images/logos/gainscha.png",
                    destino: 'CONFERENCIA',
                    estado: 'despego',
                    color:'gris'
                })} />
            <Vuelo info={
                ({
                    hora: '10:40 AM',
                    vuelo: "src/images/logos/imin.png",
                    destino: 'CONFERENCIA',
                    estado: 'A tiempo',
                    color:'azul'
                })} />
            <Vuelo info={
                ({
                    hora: '11:10 AM',
                    vuelo: "src/images/logos/unitech.png",
                    destino: 'CONFERENCIA',
                    estado: 'A tiempo',
                    color:'gris'
                })} />
            <Vuelo info={
                ({
                    hora: '11:30 AM',
                    vuelo: "src/images/logos/zkteco.png",
                    destino: 'CONFERENCIA',
                    estado: 'A tiempo',
                    color:'azul'
                })} />
            <Vuelo info={
                ({
                    hora: '12:30 PM',
                    vuelo: "src/images/logos/zkteco.png",
                    destino: 'LUNCH',
                    estado: 'A tiempo',
                    color:'gris'
                })} />
            <Vuelo info={
                ({
                    hora: '2:30 PM',
                    vuelo: "src/images/logos/uniscan.png",
                    destino: 'SHOWROOM',
                    estado: 'A tiempo',
                    color:'azul'
                })} />
            <Vuelo info={
                ({
                    hora: '7:00 PM',
                    vuelo:"src/images/logos/zebra.png",
                    destino: 'COCTEL/PARTY',
                    estado: 'A tiempo',
                    color:'gris'
                })} />

        </>
    )
}

export default Itinerario