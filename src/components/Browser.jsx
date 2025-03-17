import React from 'react'
import chrome from '../assets/chrome.svg';
import Firefox from '../assets/Firefox.svg';
import Vivaldi from '../assets/Vivaldi.svg';
import Opera from '../assets/Opera.svg';
import Brave from '../assets/Brave.svg';
import Edge from '../assets/Edge.svg';
import Tor from '../assets/Tor.svg';
const Browser = () => {
  return (
    <section id='Browser'>
        <div className="relative bg-gray-900">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
        <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-0 lg:max-w-none lg:mx-0 lg:px-0">
          <div className="mt-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-white">Web Browser</h2>
            <p className="mt-4 text-lg text-gray-500">
              Integrate Passky directly into your favorite browser with browser extensions for a seamless browsing experience.
            </p>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-0">
          <div className="p-4 max-w-xl mx-auto lg:px-0 lg:m-0 lg:relative lg:h-full">
            <div className="w-full rounded-xl lg:left-0 lg:h-full lg:max-w-none">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
               
                  <div className="relative flex items-center space-x-3 rounded-lg border border-gray-700 bg-gray-800 px-6 py-5 shadow-xs hover:bg-gray-800">
                    <div className="flex-shrink-0">
                      <img className="h-20 w-20" src={chrome} alt="chrome" />
                    </div>
                    <div className="w-full flex-1">
                      <a href="" target="_blank" rel="noopener noreferrer" className="focus:outline-none">
                        <p className="text-lg font-medium text-indigo-400">Chrome</p>
                      </a>
                    </div>
                  </div>

                  <div className="relative flex items-center space-x-3 rounded-lg border border-gray-700 bg-gray-800 px-6 py-5 shadow-xs hover:bg-gray-800">
                    <div className="flex-shrink-0">
                      <img className="h-20 w-20" src={Firefox} alt="Firefox" />
                    </div>
                    <div className="w-full flex-1">
                      <a href="" target="_blank" rel="noopener noreferrer" className="focus:outline-none">
                        <p className="text-lg font-medium text-indigo-400">Firefox</p>
                      </a>
                    </div>
                  </div>

                  <div className="relative flex items-center space-x-3 rounded-lg border border-gray-700 bg-gray-800 px-6 py-5 shadow-xs hover:bg-gray-800">
                    <div className="flex-shrink-0">
                      <img className="h-20 w-20" src={Vivaldi} alt="Vivaldi" />
                    </div>
                    <div className="w-full flex-1">
                      <a href="" target="_blank" rel="noopener noreferrer" className="focus:outline-none">
                        <p className="text-lg font-medium text-indigo-400">Vivaldi</p>
                      </a>
                    </div>
                  </div>

                  <div className="relative flex items-center space-x-3 rounded-lg border border-gray-700 bg-gray-800 px-6 py-5 shadow-xs hover:bg-gray-800">
                    <div className="flex-shrink-0">
                      <img className="h-20 w-20" src={Opera} alt="Opera" />
                    </div>
                    <div className="w-full flex-1">
                      <a href="" target="_blank" rel="noopener noreferrer" className="focus:outline-none">
                        <p className="text-lg font-medium text-indigo-400">Opera</p>
                      </a>
                    </div>
                  </div>

                  <div className="relative flex items-center space-x-3 rounded-lg border border-gray-700 bg-gray-800 px-6 py-5 shadow-xs hover:bg-gray-800">
                    <div className="flex-shrink-0">
                      <img className="h-20 w-20" src={Brave} alt="Brave" />
                    </div>
                    <div className="w-full flex-1">
                      <a href="" target="_blank" rel="noopener noreferrer" className="focus:outline-none">
                        <p className="text-lg font-medium text-indigo-400">Brave</p>
                      </a>
                    </div>
                  </div>

                  <div className="relative flex items-center space-x-3 rounded-lg border border-gray-700 bg-gray-800 px-6 py-5 shadow-xs hover:bg-gray-800">
                    <div className="flex-shrink-0">
                      <img className="h-20 w-20" src={Edge} alt="Edge" />
                    </div>
                    <div className="w-full flex-1">
                      <a href="" target="_blank" rel="noopener noreferrer" className="focus:outline-none">
                        <p className="text-lg font-medium text-indigo-400">Edge</p>
                      </a>
                    </div>
                  </div>

                  <div className="relative flex items-center space-x-3 rounded-lg border border-gray-700 bg-gray-800 px-6 py-5 shadow-xs hover:bg-gray-800">
                    <div className="flex-shrink-0">
                      <img className="h-20 w-20" src={Tor} alt="Tor" />
                    </div>
                    <div className="w-full flex-1">
                      <a href="" target="_blank" rel="noopener noreferrer" className="focus:outline-none">
                        <p className="text-lg font-medium text-indigo-400">Tor</p>
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

export default Browser