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
                    <h1 className='text-5xl font-bold text-gray-300'>Grow your buisness</h1>
                    <br></br>
                    <p className="w-2/3 m-auto text-white">With Darted you can grow your buisness by visualizing your data in real time,
                    DARTED's mission is to employ advanced analytics and AI techniques to help businesses make informed decisions about where and when to establish their presence. 
                    Our comprehensive analysis of local and industry data provides valuable insights into the ideal business locations, 
                    giving our clients a competitive edge in today's market. Rise above data and start your business with an edge. 
                    </p>

                    <div className="grid grid-cols-2 gap-8 p-12">
                        {features.map((feature) => (
                            <div className='bg-zinc-700 rounded-md p-6'>
                                <h1 className='text-2xl font-bold text-gray-300'>{feature.title}</h1>
                                <p className='text-white'>{feature.description}</p>
                            </div>
                            ))
                        }
                    </div>
                </div>
            </div>
    
    )
}