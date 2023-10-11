import React from 'react'
import logo from '../images/logoUnis.png'
import logoZebra from '../images/logos/zebraN.png'
import cerveza from '../images/fiesta/cerveza.webp'
import whisky from '../images/fiesta/whisky.png'
import mojito from '../images/fiesta/mojito.png'
import pinaColada from '../images/fiesta/pinaColada.png'

const FiestaZebra = () => {

    const onClickCerveza = ()=>{
        console.log('cerveza');
    }
    const onClickWhisky = ()=>{
        console.log('onClickWhisky');
    }
    const onClickMojito = ()=>{
        console.log('onClickMojito');
    }
    const onClickPinaColada = ()=>{
        console.log('onClickPinaColada');
    }

    return (
        <div>
            <div className='flex px-10 h-[15vh] justify-between '>
                <img src={logo} />
                <img src={logoZebra} />
            </div>
            <div className='flex h-[80vh] '>
                <div className='grid grid-rows-2 grid-flow-col m-auto gap-10 '>
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
                        <img src={whisky} className='h-40'/>
                    </div>
                    <div id='mojito' onClick={onClickMojito} className='bg-sky-700  p-5 w-60 text-white uppercase font-bold rounded hover:cursor-pointer
                        hover:bg-sky-800 transition-colors text-center flex m-auto flex-col'>
                        <p>Mojito</p>
                        <br />
                        <img src={mojito} className='h-40'/>
                    </div>
                    <div id='pinaColada' onClick={onClickPinaColada} className='bg-sky-700  p-5 w-60 text-white uppercase font-bold rounded hover:cursor-pointer
                        hover:bg-sky-800 transition-colors text-center flex m-auto flex-col'>
                        <p>Piña Colada</p>
                        <br />
                        <img src={pinaColada} className='h-40'/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FiestaZebra