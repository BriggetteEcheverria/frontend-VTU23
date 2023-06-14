import React from 'react'
import fondoMar from '../images/fondoMar.png'
import tortuga from '../images/tortuga.jpg'
import logo from '../images/logoUnis.png'

const Logros = () => {

    const handleSubmitBuscar = async e => {
        e.preventDefault()

        if ([id].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return
        }

        try {
            const { data } = await clienteAxios(`/usuarios/${id}`)
            console.log(data);

            // setId('')

        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
        }

    }
    return (
        <>
            <div className='flex h-[10vh]'>
                <img src={logo} />
            </div>
            <div className='shadow-md m-2 mt-2 bg-[#a8d0d2] p-5'>
                <p className='uppercase text-center font-bold text-2xl text-white sm:text-2xl'>Mira tus logros</p>
                <form onSubmit={handleSubmitBuscar} action="" className='text-[#02275e] rounded-lg  my-auto  m-2 sm:mx-20 flex justify-between'>
                    <input
                        autoFocus
                        id='cedula'
                        type='text'
                        placeholder='Ingresa tu cédula'
                        className='w-full m-2 p-3 border rounded bg-gray-50 text-[#02275e]'
                    // value={id}
                    // onChange={e=>setId(e.target.value)}
                    />
                    <input
                        type='submit'
                        value={'Buscar'}
                        className='bg-sky-700 w-1/3 m-2 p-3 text-white uppercase font-bold rounded hover:cursor-pointer
                            hover:bg-sky-800 transition-colors'
                    />
                </form>
            </div>
            <div className="grid grid-cols-2 grid-flow-row gap-4 text-center my-10 mx-5">
                <div className='shadow-[#a8d0d2] shadow-inner p-5 rounded-lg bg-[#a8d0d243]'>
                    <p className='font-bold text-[#2d5151]'>LOGRO TORTUGA</p>
                    <img src={tortuga} alt="" className='rounded-full'/>
                </div>
                <div className='shadow-[#a8d0d2] shadow-inner p-5 rounded-lg bg-[#a8d0d243]'>
                    <p className='font-bold text-[#2d5151]'>LOGRO TORTUGA</p>
                    <img src={tortuga} alt="" className='rounded-full grayscale'/>
                </div>
                <div className='shadow-[#a8d0d2] shadow-inner p-5 rounded-lg bg-[#a8d0d243]'>
                    <p className='font-bold text-[#2d5151]'>LOGRO TORTUGA</p>
                    <img src={tortuga} alt="" className='rounded-full grayscale'/>
                </div>
                <div className='shadow-[#a8d0d2] shadow-inner p-5 rounded-lg bg-[#a8d0d243]'>
                    <p className='font-bold text-[#2d5151]'>LOGRO TORTUGA</p>
                    <img src={tortuga} alt="" className='rounded-full'/>
                </div>
                <div className='shadow-[#a8d0d2] shadow-inner p-5 rounded-lg bg-[#a8d0d243]'>
                    <p className='font-bold text-[#2d5151]'>LOGRO TORTUGA</p>
                    <img src={tortuga} alt="" className='rounded-full grayscale'/>
                </div>
                <div className='shadow-[#a8d0d2] shadow-inner p-5 rounded-lg bg-[#a8d0d243]'>
                    <p className='font-bold text-[#2d5151]'>LOGRO TORTUGA</p>
                    <img src={tortuga} alt="" className='rounded-full'/>
                </div>
                

            </div>
            <div className='h-[80vh]'>
                <img src={fondoMar} alt="" className=' inset-x-0 bottom-0 fixed' />
            </div>
        </>
    )
}

export default Logros