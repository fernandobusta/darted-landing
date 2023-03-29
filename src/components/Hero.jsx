import React from 'react'

export default function Hero() {
    return (
       <div className=''>
              <div className='flex flex-col justify-center items-center h-screen'>
                <div className='grid grid-cols-2 gap-12'>
                    <div className='m-auto'>
                        <h1 className='text-6xl font-bold text-teal-600'>Darted</h1>
                    </div>
                    <div>
                        <h2 className='text-2xl font-bold text-white'>Rise Above Data </h2>
                        <br></br>
                        
                       
                        <p className='text-white w-2/3 m-auto'>
                        <hr></hr>
                        <br></br>
                        Darted is a Real Time Data Visualization Tool for Enterprise Development</p>
                        <br></br>
                        <button className=' bg-teal-600 text-black font-bold py-2 px-4 rounded-md'>Get Started</button>
                    </div>
                    
                </div>
                </div>
       </div>
    )
    }
