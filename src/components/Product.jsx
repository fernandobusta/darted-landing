import Map from './MapEmbed';

export default function Product() {
    return (
        <div className=''>
            <div className='flex flex-col justify-center items-center h-screen'>
               <h1 className='text-6xl font-bold text-gray-300'>Product</h1>
                <br></br>
                <br></br>
                <div className='grid grid-cols-2 mt-8 gap-5'>
                    <div className=' text-left px-12'>
                        <h1 className='text-3xl font-bold text-white'>Search your business</h1>
                        <br></br>
                        <p className='font-semibold text-white'>Search your business and see how it compares to others in your area.</p>
                        <br></br>
                        <h1 className='text-3xl font-bold text-white'>See Real Time data</h1>
                        <br></br>

                        <p className='font-semibold text-white'>Check customers sentiment score</p>
                    </div>
                    <div className='w-full h-full rounded-md p-4 px-12'>
                        <Map />
                    </div>
                </div>

            </div>
        </div>
    )
}