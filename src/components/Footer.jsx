import React from 'react'

const Footer = () => {
  return (
     <footer className="bg-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto overflow-hidden">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2" aria-label="Footer">
          {[
            { name: "Terms of Service", link: "ToS.pdf" },
            { name: "Privacy Policy", link: "PrivacyPolicy.pdf" },
            { name: "GDPR", link: "GDPR.pdf" },
            { name: "Cookie Policy", link: "CookiePolicy.pdf" },
            { name: "Data Processing Addendum", link: "DataProcessingAddendum.pdf" },
          ].map((item, index) => (
            <div key={index} className="px-5 py-2">
              <a href={item.link} target="_blank" className="text-base text-gray-300 hover:text-gray-500">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        
        <div className="mt-8 flex justify-center space-x-6">
          {[
            { name: "Discord", link: "https://discord.rabbit-company.com", icon: ".5 17c0 1 1.5 3 2 3c1.5 0 2.833-1.667 3.5-3c.667-1.667 .5-5.833-1.5-11.5" },
            { name: "GitHub", link: "https://github.com/Rabbit-Company", icon: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504" },
            { name: "Twitter", link: "https://twitter.com/RabbitCompany66", icon: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675" },
          ].map((item, index) => (
            <a key={index} href={item.link} target="_blank" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">{item.name}</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d={item.icon} />
              </svg>
            </a>
          ))}
        </div>

        <p className="mt-8 text-center text-base text-gray-400">
          © 2024 , All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer


