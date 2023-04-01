import React from 'react'

export default function Hero() {
    return (
       <div className=''>
       
              <div className='flex flex-col justify-center items-center h-screen'>
              <video loop autoPlay muted className=' object-cover absolute top-0 left-0 w-full h-full z-0'>
         <source src={require('../assets/hero.mp4')} type='video/mp4' />

                </video>

                <div className='bg-zinc-700 opacity-90 z-20 p-5 rounded-xl'>
                    <div className='m-auto opacity-100'>
                        <h1 className='text-8xl font-bold text-gray-300'>Darted</h1>
                        <br></br>
                        <h2 className='text-2xl font-bold text-gray-300'>Rise Above Data </h2>
                        <br></br>
                        <p className='text-white w-2/3 m-auto'>
                        <hr></hr>
                        <br></br>
                        Darted is a Real Time Data Visualization Tool for Enterprise Development</p>
                        <br></br>
                        <button className=' bg-gray-200 text-black font-bold py-2 px-4 rounded-md'>Get Started</button>
                        <br></br>
                    </div>

                </div>
               
                {/* }<div className='grid grid-cols-2 gap-12 z-20'>
                    <div className='m-auto'>
                        <h1 className='text-8xl font-bold text-gray-300'>Darted</h1>
                    </div>
                    <div className=''>
                        <h2 className='text-2xl font-bold text-gray-300'>Rise Above Data </h2>
                        <br></br>
                        
                       
                        <p className='text-white w-2/3 m-auto'>
                        <hr></hr>
                        <br></br>
                        Darted is a Real Time Data Visualization Tool for Enterprise Development</p>
                        <br></br>
                        <button className=' bg-gray-200 text-black font-bold py-2 px-4 rounded-md'>Get Started</button>
                    </div>
                    
                </div>
                { */}
                </div>
       </div>
    )
    }
