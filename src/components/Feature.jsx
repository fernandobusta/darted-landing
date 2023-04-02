import React from 'react'

const features = [
    {
        title: 'Detection',
        description: "DARTED's technology and models allows you to asses what the best place to locate your new business is. Its real-time data and social media analytics allows you to spot 'hot zones' before anyone. ",
    },
    {
        title: 'Competition assessment',
        description: 'Gain an edge over your competitor with a precise analysis and details on how to obtain a bigger market share of costumers. Compare your business to your competitors, with real-time accurate data to maximise decision making. ',
    },
    {
        title: 'Inside View',
        description: 'An inside view into your business, providing vast amount of processed readable data. From what your customers think, to what they will potentially think in the future. An inside look to determine how your different business locations compare to each other, and what decisions could be made to maximise your income. ',
    },
    {
        title: 'Expansion and Scaling',
        description: 'Incorporate AI into your workflow to no be left behind. Base your expansion criteria on our currated data, served from multiple APIs and processed to maximise its potential. ',
    },
]

export default function Feature() {
    return (
        <div className='flex flex-col justify-center items-center mt-32 h-screen'>
                <div>
                    <h1 className='sm:text-6xl max-sm:text-3xl sm:p-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-70% to-sky-200'>Grow your business</h1>
                    <br className='hidden sm:block'></br>
                    <p className="sm:w-2/3 max-sm:p-4 m-auto max-sm:text-xs text-white">With Darted you can grow your business by visualizing your data in real time,
                    DARTED's mission is to employ advanced analytics and AI techniques to help businesses make informed decisions about where and when to establish their presence. 
                    Our comprehensive analysis of local and industry data provides valuable insights into the ideal business locations, 
                    giving our clients a competitive edge in today's market. Rise above data and start your business with an edge. 
                    </p>

                    <div className="grid sm:grid-cols-2 gap-8 sm:p-12 p-4">
                        {features.map((feature) => (
                            <div className='bg-zinc-700 rounded-md shadow-sm shadow-emerald-200 p-6'>
                                 <h1 className='sm:text-3xl max-sm:text-xl sm:p-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-70% to-sky-200'>{feature.title}</h1>
                                <p className='max-sm:text-xs text-white'>{feature.description}</p>
                            </div>
                            ))
                        }
                    </div>
                </div>
            </div>
    
    )
}