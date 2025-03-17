import React from 'react'
import Windows from '../assets/windows.svg';
import linux from '../assets/linux.svg'
import apple from '../assets/apple.svg'
const Desktop = () => {
  return (
    <section id='Desktop'>
        <div className="relative bg-gray-900 pt-16 pb-32 overflow-hidden">
        <div className='relative'>
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
       
        <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-0 lg:max-w-none lg:mx-0 lg:px-0">
        <div className='mt-6'>
          <h2 className="text-3xl font-extrabold tracking-tight text-white">Desktop</h2>
          <p className="mt-4 text-lg text-gray-500">
            Access Passky on Windows, macOS, and Linux desktops.
          </p>
          </div>
        </div>
        <div className='mt-12 sm:mt-16 lg:mt-0'>
        <div className='p-4 max-w-xl mx-auto lg:px-0 lg:m-0 lg:relative lg:h-full'>
        <div className="grid gap-3 sm:grid-cols-1">
          
          <div className="flex items-center space-x-3 border border-gray-700 bg-gray-800 p-5 rounded-lg hover:bg-gray-700">
            <img className="h-20 w-20" src={Windows} alt="Windows" />
            <a
              href="https://github.com/Rabbit-Company/Passky-Desktop/releases/download/v8.1.2/Passky.8.1.2.exe"
              className="text-lg font-medium text-indigo-400"
            >
              Windows
            </a>
          </div>
          {/* macOS */}
          <div className="flex items-center space-x-3 border border-gray-700 bg-gray-800 p-5 rounded-lg hover:bg-gray-700">
            <img className="h-20 w-20" src={apple} alt="Apple" />
            <a
              href="https://github.com/Rabbit-Company/Passky-Desktop/releases/download/v8.1.2/Passky-8.1.2.dmg"
              className="text-lg font-medium text-indigo-400"
            >
              macOS
            </a>
          </div>
          {/* Linux */}
          <div className="flex items-center space-x-3 border border-gray-700 bg-gray-800 p-5 rounded-lg hover:bg-gray-700">
            <img className="h-20 w-20" src={linux} alt="Linux" />
            <a
              href="https://github.com/Rabbit-Company/Passky-Desktop/releases/download/v8.1.2/Passky-8.1.2.AppImage"
              className="text-lg font-medium text-indigo-400"
            >
              Linux
            </a>
          </div>
        </div>
        </div>
        </div>
      </div>
      </div>

      {/* Repeat similar sections for Web Browser, Mobile, and Web */}
    </div>
    </section>
  )
}

export default Desktop