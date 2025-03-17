import 'react'
import logo from "../assets/passky.webp"
export const Feature = () => {
  return (
    <section id='features'>
    <div className='relative bg-gray-900 pt-16 pb-32 overflow-hidden'>
    <h2 className='text-5xl text-center tracking-tight font-extrabold text-white my-12 sm:text-6xl xl:text-6xl'>Feature</h2>
    <div className='relative'>
        <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
            <div className='px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0-'>
            <div>
									<div>
										<span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
											<svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
												<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
												<circle cx="12" cy="12" r="9"></circle>
												<line x1="9" y1="10" x2="9.01" y2="10"></line>
												<line x1="15" y1="10" x2="15.01" y2="10"></line>
												<path d="M9.5 15a3.5 3.5 0 0 0 5 0"></path>
												<path d="M12 3a2 2 0 0 0 0 4"></path>
											</svg>
										</span>
									</div>
									<div className="mt-6">
										<h2 className="text-3xl font-extrabold tracking-tight text-white">Ease of use</h2>
										<p className="mt-4 text-lg text-gray-500">
											Our main goal for Passky is to be the easiest password manager to use. On Passky's main page you can see all your saved passwords, can
											search for specific ones, edit them and copy information with just one click.
										</p>
										<div className="mt-6">
											<a href="download.html" className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-xs text-white bg-indigo-600 hover:bg-indigo-700">Get started</a>
										</div>
									</div>
								</div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
      <div className="max-w-xl p-4 mx-auto lg:px-0 lg:m-0 lg:relative lg:h-full">
        <video
          className="w-full rounded-xl ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
          autoPlay
          loop
          muted
        >
          <source src="https://cdn.passky.org/videos/passky-addPassword.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
        </div>
        
    </div>

    <div className="mt-24">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
        {/* Text Content */}
        <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
          <div>
            {/* Icon */}
            <div>
              <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
                <svg
                  className="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 16h-4l3.47 -4.66a2 2 0 1 0 -3.47 -1.54" />
                  <path d="M10 16v-8h4" />
                  <line x1="10" y1="12" x2="13" y2="12" />
                  <path d="M17 16v-6a2 2 0 0 1 4 0v6" />
                  <line x1="17" y1="13" x2="21" y2="13" />
                </svg>
              </span>
            </div>

            {/* Text Section */}
            <div className="mt-6">
              <h2 className="text-3xl font-extrabold tracking-tight text-white">
                Software &amp; Hardware 2FA
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Unlike some other password managers, we do care about security.
                That's why users can use both Software and Hardware two-factor
                authentication for completely free.
              </p>
              <div className="mt-6">
                <a
                  href="download.html"
                  className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-xs text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
          <div className="p-4 max-w-xl mx-auto lg:px-0 lg:m-0 lg:relative lg:h-full">
            <video
              className="w-full rounded-xl ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
              autoPlay
              loop
              muted
            >
              <source
                src="https://cdn.passky.org/videos/passky-hardware2fa.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
    <div className="relative mt-24">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
        {/* Text Content */}
        <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
          <div>
            {/* Icon */}
            <div>
              <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
                <svg
                  className="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                  <path d="M5 13v-8a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5.5m-9.5 -2h7m-3 -3l3 3l-3 3" />
                </svg>
              </span>
            </div>

            {/* Text Section */}
            <div className="mt-6">
              <h2 className="text-3xl font-extrabold tracking-tight text-white">
                Import &amp; Export
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Passky allows you to import passwords from all other major password managers in just a couple of seconds. 
                Not only that, but Passky can also export your passwords to different password managers, so you can switch 
                from Passky to any other password manager without any problems.
              </p>
              <div className="mt-6">
                <a
                  href="download.html"
                  className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-xs text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="mt-12 sm:mt-16 lg:mt-0">
          <div className="p-4 max-w-xl mx-auto lg:px-0 lg:m-0 lg:relative lg:h-full">
            <video
              className="w-full rounded-xl ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
              autoPlay
              loop
              muted
            >
              <source
                src="https://cdn.passky.org/videos/passky-import.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-24">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
        {/* Text Content */}
        <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
          <div>
            {/* Icon */}
            <div>
              <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
                <svg
                  className="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="12" cy="12" r="9" />
                  <line x1="3.6" y1="9" x2="20.4" y2="9" />
                  <line x1="3.6" y1="15" x2="20.4" y2="15" />
                  <path d="M11.5 3a17 17 0 0 0 0 18" />
                  <path d="M12.5 3a17 17 0 0 1 0 18" />
                </svg>
              </span>
            </div>

            {/* Text Section */}
            <div className="mt-6">
              <h2 className="text-3xl font-extrabold tracking-tight text-white">
                Multiple Languages
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                With help from our users, Passky now supports 25 languages! If
                your language is missing and you want to contribute to this
                project, you can easily translate it on{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://crowdin.com/project/passky"
                  className="text-blue-400"
                >
                  Crowdin
                </a>.
              </p>
              <div className="mt-6">
                <a
                  href="download.html"
                  className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-xs text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
          <div className="p-4 max-w-xl mx-auto lg:px-0 lg:m-0 lg:relative lg:h-full">
            <img
              className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
               src={logo}
              alt="Passky languages"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
    </section>
  )
}

export default Feature