import React from 'react'
import android from '../assets/android.svg';
const Mobile = () => {
  return (
    <section id='Mobile'>
         <div className="relative pt-32 bg-gray-900">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
        <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-0 lg:max-w-none lg:mx-0 lg:px-0">
          <div>
            <div className="mt-6">
              <h2 className="text-3xl font-extrabold tracking-tight text-white">Mobile</h2>
              <p className="mt-4 text-lg text-gray-500">
                Take your password manager on the go with mobile apps for your phone, tablet, or wearable.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-0">
          <div className="p-4 max-w-xl mx-auto lg:px-0 lg:m-0 lg:relative lg:h-full">
            <div className="w-full rounded-xl lg:left-0 lg:h-full lg:max-w-none">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-1">
                <div className="relative flex items-center space-x-3 rounded-lg border border-gray-700 bg-gray-800 px-6 py-5 shadow-xs hover:bg-gray-800">
                  <div className="flex-shrink-0">
                    <img className="h-40 w-40 rounded-md" src={android} alt="Android" />
                  </div>
                  <div className="w-full flex-1">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.rabbitcompany.passky"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus:outline-none"
                    >
                      <p className="text-lg font-medium text-indigo-400">Android</p>
                      <p className=" text-md text-gray-500">Support for Android 12+</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Mobile