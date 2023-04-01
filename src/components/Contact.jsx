import React from 'react'

const contacts = [
  {
    name: 'Darted',
    icon: 'https://www.flaticon.com/svg/static/icons/svg/25/25231.svg',
    link: 'https://www.darted.com',
  },
  {
    name: 'Email',
    icon: 'https://www.flaticon.com/svg/static/icons/svg/732/732200.svg',
    link: 'mailto:darted@gmail.com',
  },
  {
    name: 'Twitter',
    icon: 'https://www.flaticon.com/svg/static/icons/svg/733/733579.svg',
    link: 'https://twitter.com/darted',
  },
]

export default function Contact() {
  return (
    <div className=''>
      <div className='flex flex-col justify-center items-center h-screen'>
        <div>
          <h1 className='text-5xl font-bold text-white'>Contact</h1>
          <br />
          <h2 className='text-2xl font-bold text-white'>Contact us for more information</h2>
          <br />
          <div className=''>
            <form className='grid grid-cols-12 gap-4'>
              <div className='col-span-12 sm:col-span-6  '>
                <label htmlFor='name' className='text-white text-left font-bold flex items-start mb-2'>
                  Name
                </label>
                <input type='text' name='name' id='name' className='rounded-md p-2 mb-4 w-full' required placeholder='Name' />
              </div>
              <div className='col-span-12 sm:col-span-6'>
                <label htmlFor='email' className='text-white font-bold mb-2 flex items-start'>
                  Email
                </label>
                <input type='email' name='email' id='email' className='rounded-md p-2 mb-4 w-full' required placeholder='Email address' />
              </div>
              <div className='col-span-12'>
                <label htmlFor='message' className='text-white font-bold mb-2 flex items-start'>
                  Message
                </label>
                <textarea name='message' id='message' rows='5' className='rounded-md p-2 mb-4 w-full' required placeholder='Your message' />
              </div>
              <div className='col-span-12'>
                <button type='submit' className='bg-gray-300 text-black font-bold py-2 px-4 rounded-md'>
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
