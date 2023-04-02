import React from 'react';
import MapEmbed from './MapEmbed';
import logoWhite from '../assets/logo-no-background.png';


export default function Hero() {
  return (
    <div className='flex flex-col justify-center items-center h-screen overflow-hidden'>
            {/*<video loop autoPlay muted className=' object-cover absolute top-0 left-0 w-full h-full z-0'>
                <source src={require('../assets/hero.mp4')} type='video/mp4' />
            </video> */}
            <img src={require('../assets/bg-index.jpg')} className='object-cover absolute top-0 left-0 w-full h-full z-0' />
          
            <div className='grid sm:grid-cols-2 gap-5 sm:px-24'>
                <div className='opacity-90 z-20  rounded-xl sm:mt-6 sm:p-5 sm:text-left col-span-1'>
                    <div className='m-auto opacity-100'>
                        <h1 className='flex-1 tracking-wide font-poppins leading-tight font-bold sm:text-5xl text-2xl sm:mt-12 text-white '>
                        Real Time Data <br className='hidden sm:block' /> {" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-60% to-sky-200">
                        Visualization <br className='hidden sm:block' ></br> </span> {" "}
                        for Enterprise Development
                        </h1>
                        <br /> 
                        <button className='bg-gradient-to-r from-emerald-600 to-90% to-sky-200 text-black font-bold sm:py-3 sm:px-5 p-2 rounded-md'>Get Started</button>
                        <br />
                    </div>
                </div> 
                
                <div className=' m-auto sm:p-5 rounded-xl overflow-hidden z-20 sm:mt-12 col-span-1 '>
                    <div className='h-full w-full overflow-hidden'>
                        <div className='absolute z-0  top-0 w-[40%] h-[35%] blur-2xl overflow-hidden opacity-30 bg-gradient-to-r from-gray-400 to-90% to-gray-400'></div>
                        <div className='absolute z-0 rounded-full bottom-3 w-[40%] h-[60%] blur-2xl overflow-hidden opacity-50 bg-gradient-to-r from-gray-800 to-90% to-gray-500'></div>
                        <div className='absolute z-0 top-0 w-[30%] h-[15%] blur-2xl opacity-20 bg-gradient-to-r overflow-hidden from-sky-200 to-90% to-gray-600'></div>

                    </div>
                    <div className='bg-zinc-700 h-64 w-64 sm:h-96 sm:w-96 p-3 z-50 opacoty-100 rounded-xl'>
                        <MapEmbed />
                    </div>   
                </div>
            </div>
    </div>
  );
}
