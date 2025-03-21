import React from 'react'

const Pricing = () => {
  return (
    <div>
         <div className="bg-gray-800">
      <div className="pt-12 px-4 sm:px-6 lg:px-8 lg:pt-20">
        <div className="text-center">
          <h2 className="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">
            Pricing
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            The right price for you, whoever you are
          </p>
          <p className="mt-3 max-w-4xl mx-auto text-xl text-gray-300 sm:mt-5 sm:text-2xl">
            Using Passky doesn’t require an upfront cost or monthly subscription. It’s completely
            free to download and can be hosted by anyone who has the space to do so.
          </p>
        </div>
      </div>
      </div>
      <div className="bg-gray-800 mt-16 pb-12 lg:mt-20 lg:pb-20">
        <div className="relative z-0">
          <div className="absolute inset-0 h-5/6 bg-gray-800 lg:h-2/3"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative lg:grid lg:grid-cols-7">
            <div class="mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3">
    <div class="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg">
        <div class="flex-1 flex flex-col">
            <div class="bg-gray-900 px-6 py-10">
                <div>
                    <h3 class="text-center text-2xl font-medium text-gray-500" id="tier-hobby">Premium</h3>
                    <div class="mt-4 flex items-center justify-center">
                        <span class="px-3 flex items-start text-6xl tracking-tight text-gray-500">
                            <span class="mt-2 mr-2 text-4xl font-medium">$</span>
                            <span class="font-extrabold">2</span>
                        </span>
                        <span class="text-xl font-medium text-gray-500"> per month</span>
                    </div>
                    <h4 class="text-center mt-2 font-medium text-sm text-gray-500">$24 billed annually</h4>
                </div>
            </div>
            <div class="flex-1 flex flex-col justify-between border-t-2 border-gray-800 p-6 bg-gray-900 sm:p-10 lg:p-6 xl:p-10">
                <ul role="list" class="space-y-4">
                    <li class="flex items-start">
                        <div class="flex-shrink-0">
                            <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <p class="ml-3 text-base font-medium text-gray-500">Everything in Free</p>
                    </li>
                    <li class="flex items-start">
                        <div class="flex-shrink-0">
                            <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <p class="ml-3 text-base font-medium text-gray-500">Unlimited passwords</p>
                    </li>
                    <li class="flex items-start">
                        <div class="flex-shrink-0">
                            <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <p class="ml-3 text-base font-medium text-gray-500">Self-host Option</p>
                    </li>
                </ul>
                <div class="mt-8">
                    <div class="rounded-lg shadow-md">
                        <button data-billgang-product-path="passky-annual-license-key" data-billgang-domain="rabbitcompany.bgng.io" 
                            class="cursor-pointer block w-full text-center rounded-lg border border-transparent bg-gray-800 px-6 py-3 text-base font-medium text-white hover:bg-gray-700">
                            Purchase
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4">
    <div class="relative z-10 rounded-lg shadow-xl">
        <div class="pointer-events-none absolute inset-0 rounded-lg border-2 border-indigo-600" aria-hidden="true"></div>
        <div class="absolute inset-x-0 top-0 transform translate-y-px">
            <div class="flex justify-center transform -translate-y-1/2">
                <span class="inline-flex rounded-full bg-indigo-600 px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white">Most popular</span>
            </div>
        </div>
        <div class="bg-gray-900 rounded-t-lg px-6 pt-12 pb-10">
            <div>
                <h3 class="text-center text-3xl font-semibold text-gray-400 sm:-mx-6" id="tier-growth">Free</h3>
                <div class="mt-4 flex items-center justify-center">
                    <span class="px-3 flex items-start text-6xl tracking-tight text-gray-400 sm:text-6xl">
                        <span class="mt-2 mr-2 text-4xl font-medium">$</span>
                        <span class="font-extrabold">0</span>
                    </span>
                    <span class="text-2xl font-medium text-gray-400"> per month</span>
                </div>
            </div>
        </div>
        <div class="border-t-2 border-gray-800 rounded-b-lg pt-10 pb-8 px-6 bg-gray-900 sm:px-10 sm:py-10">
            <ul role="list" class="space-y-4">
                <li class="flex items-start">
                    <div class="flex-shrink-0">
                        <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                    <p class="ml-3 text-base font-medium text-gray-500">Passky Core Features</p>
                </li>
                <li class="flex items-start">
                    <div class="flex-shrink-0">
                        <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                    <p class="ml-3 text-base font-medium text-gray-500">Store up to 100 passwords</p>
                </li>
                <li class="flex items-start">
                    <div class="flex-shrink-0">
                        <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                    <p class="ml-3 text-base font-medium text-gray-500">Software 2FA (Aegis, Google Auth, Authy...)</p>
                </li>
                <li class="flex items-start">
                    <div class="flex-shrink-0">
                        <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                    <p class="ml-3 text-base font-medium text-gray-500">Hardware 2FA (Yubikey)</p>
                </li>
                <li class="flex items-start">
                    <div class="flex-shrink-0">
                        <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                    <p class="ml-3 text-base font-medium text-gray-500">Self-host Option</p>
                </li>
            </ul>
            <div class="mt-10">
                <div class="rounded-lg shadow-md">
                    <a href="download.html" class="block w-full text-center rounded-lg border border-transparent bg-indigo-600 px-6 py-4 text-xl leading-6 font-medium text-white hover:bg-indigo-700" aria-describedby="tier-growth">
                        Download
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3">
    <div class="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-r-lg">
        <div class="flex-1 flex flex-col">
            <div class="bg-gray-900 px-6 py-10">
                <div>
                    <h3 class="text-center text-2xl font-medium text-gray-500" id="tier-scale">Bulk</h3>
                    <div class="mt-4 flex items-center justify-center">
                        <span class="px-3 flex items-start text-6xl tracking-tight text-gray-500">
                            <span class="mt-2 mr-2 text-4xl font-medium">$</span>
                            <span class="font-extrabold">1.6</span>
                        </span>
                        <span class="text-xl font-medium text-gray-500"> per month</span>
                    </div>
                    <h4 class="text-center mt-2 font-medium text-sm text-gray-500">Buy in bulk get 20% off</h4>
                </div>
            </div>
            <div class="flex-1 flex flex-col justify-between border-t-2 border-gray-800 p-6 bg-gray-900 sm:p-10 lg:p-6 xl:p-10">
                <ul role="list" class="space-y-4">
                    <li class="flex items-start">
                        <div class="flex-shrink-0">
                            <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <p class="ml-3 text-base font-medium text-gray-500">Everything in Premium</p>
                    </li>
                    <li class="flex items-start">
                        <div class="flex-shrink-0">
                            <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <p class="ml-3 text-base font-medium text-gray-500">Buy at least 5 license keys</p>
                    </li>
                    <li class="flex items-start">
                        <div class="flex-shrink-0">
                            <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <p class="ml-3 text-base font-medium text-gray-500">Self-host Option</p>
                    </li>
                </ul>
                <div class="mt-8">
                    <div class="rounded-lg shadow-md">
                        <button data-billgang-product-path="passky-annual-license-key" data-billgang-domain="rabbitcompany.bgng.io" 
                            class="cursor-pointer block w-full text-center rounded-lg border border-transparent bg-gray-800 px-6 py-3 text-base font-medium text-white hover:bg-gray-700">
                            Purchase
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

            </div>
          </div>
        </div>
      </div>
    </div>

    
  )
}

export default Pricing