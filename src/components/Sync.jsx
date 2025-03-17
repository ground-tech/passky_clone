import React from 'react'
import Banner from "../assets/connected_world.svg"

const Sync = () => {
  return (
    
    <section id='Sync'>
    <div className='pt-10 bg-gray-800 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden '>
    <div className='mx-auto max-w-7xl lg:px-8'>
    <div className='lg:grid lg:grid-cols-2 lg:gap-8'>
    <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center'>
      <div className='lg:py-24'>
        <h1 className='mt-4 text-2xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-4xl lg:mt-4 xl:text-4xl'>Install and Sync All of Your Devices</h1>
        <p className='mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>Secure cloud synchronization allows you to retrieve
         your confidential data from any location and on any device.
		</p>
        </div>
        </div>
     <div className='mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative'>
     <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0'>
      <img src={Banner} alt="Connected World" className="rounded-lg w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none" />
     </div>
     </div>
        </div>
    </div>
    
    </div>
    </section>
  )
}

export default Sync