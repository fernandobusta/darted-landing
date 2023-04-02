import React from 'react';
import MapEmbed from './MapEmbed';


export default function Hero() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
            {/*<video loop autoPlay muted className=' object-cover absolute top-0 left-0 w-full h-full z-0'>
                <source src={require('../assets/hero.mp4')} type='video/mp4' />
            </video> */}
            <img src={require('../assets/bg-index.jpg')} className='object-cover absolute top-0 left-0 w-full h-full z-0' />
            <div className='grid grid-cols-2 gap-5 px-24'>
                <div className='opacity-90 z-20 p-5 rounded-xl mt-6 text-left col-span-1'>
                    <div className='m-auto opacity-100'>
                        <h1 className='text-6xl font-bold text-gray-300'>Darted</h1>
                        <br />
                        <h2 className='text-2xl font-bold text-gray-300'>Rise Above Data </h2>
                        <br />
                        <p className='text-white w-2/3 '>
                        <hr />
                        <br />
                        Real Time Data Visualization Tool for Enterprise Development
                        </p>
                        <br />
                        <button className='bg-gray-200 text-black font-bold py-2 px-4 rounded-md'>Get Started</button>
                        <br />
                    </div>
                </div> 
                
                <div className=' m-auto p-5 rounded-xl z-20  col-span-1'>
                        <div className='bg-zinc-700 h-96 w-96 p-3 rounded-xl'>
                            <MapEmbed />
                        </div>
                </div>
                
                
            </div>
    </div>
  );
}
