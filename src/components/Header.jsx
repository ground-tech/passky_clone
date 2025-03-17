import React, { useState } from 'react'
import logo from "../assets/logo.webp"
import { Link, useLocation } from 'react-router';
export const Header = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
   
    <header className='max-w-7xl mx-auto px-4 text-white sm:py-6 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
       
            <div className='flex space-x-4 items-center'>
            <div className='flex-shrink-0'>
            <img src={logo} alt="Logo" className="block h-8 w-auto" />
            </div>
            <div className='hidden sm:block sm:ml-6'>
            <div className='flex space-x-4'>
              <Link className={`leading-none py-2 px-3 text-base font-medium rounded-md text-white ${isActive("/") ? "bg-gray-900" : "bg-gray-800 hover:bg-gray-700"}`} to='/'>Home</Link>
              <Link className={`leading-none py-2 px-3 text-base font-medium rounded-md text-white ${isActive("/about") ? "bg-gray-900" : "bg-gray-800 hover:bg-gray-700"}`} to='/about'>About</Link>
              <Link className={`leading-none py-2 px-3 text-base font-medium rounded-md text-white ${isActive("/pricing") ? "bg-gray-900" : "bg-gray-800 hover:bg-gray-700"}`} to='/pricing'>Pricing</Link>
              <Link className={`leading-none py-2 px-3 text-base font-medium rounded-md text-white ${isActive("/servers") ? "bg-gray-900" : "bg-gray-800 hover:bg-gray-700"}`} to='/servers'>Servers</Link>
              <Link className={`leading-none py-2 px-3 text-base font-medium rounded-md text-white ${isActive("/donation") ? "bg-gray-900" : "bg-gray-800 hover:bg-gray-700"}`} to='/donation'>Donation</Link>
              <Link className={`leading-none py-2 px-3 text-base font-medium rounded-md text-white ${isActive("/affiliates") ? "bg-gray-900" : "bg-gray-800 hover:bg-gray-700"}`} to='/affiliates'>Affiliates</Link>
              <Link className={`leading-none py-2 px-3 text-base font-medium rounded-md text-white ${isActive("/contact") ? "bg-gray-900" : "bg-gray-800 hover:bg-gray-700"}`} to='/contact'>Contact</Link>
                </div>
                </div>
            </div>
            <div className='hidden md:flex space-x-4 items-center justify-end md:flex-1 lg:w-0'>
            <Link className={`leading-none py-2 px-3 text-base font-medium rounded-md text-white ${isActive("/status") ? "bg-gray-900" : "bg-gray-800 hover:bg-gray-700"}`} to='/status'>Status</Link>
            <Link className={`leading-none py-2 px-3 text-base font-medium rounded-md text-white ${isActive("/log-in") ? "bg-gray-900" : "bg-gray-800 hover:bg-gray-700"}`} to='/log-in'>Log in</Link>
            <Link className={`leading-none py-2 px-3 text-base font-medium rounded-md text-white ${isActive("/sign-up") ? "bg-indigo-900" : "bg-indigo-600 hover:bg-indigo-700"}`} to='/sign-up'>Sign up</Link>


            </div>
            <div className="-mr-2 flex sm:hidden">
            <nav className="mobile-nav">
      {/* Hamburger button */}
      <button 
        className={`hamburger  ${isOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <span className="bar bg-gray-400"></span>
        <span className="bar bg-gray-400"></span>
        <span className="bar bg-gray-400"></span>
      </button>

      {/* Menu overlay */}
      <div className={`menu-overlay bg-gray-800 ${isOpen ? 'active' : ''}`}>
      <button 
          className="close-button text-gray-400" 
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          &times;
        </button>
        <div className="menu-items text-white">
        <Link className='text-base font-medium block py-2' to='/' onClick={() => setIsOpen(false)}>Home</Link>
        <Link className='text-base font-medium block py-2' to='/about' onClick={() => setIsOpen(false)}>About</Link>
        <Link className='text-base font-medium block py-2' to='/pricing' onClick={() => setIsOpen(false)}>Pricing</Link>
        <Link className='text-base font-medium block py-2' to='/servers' onClick={() => setIsOpen(false)}>Servers</Link>
        <Link className='text-base font-medium block py-2' to='/donation' onClick={() => setIsOpen(false)}>Donation</Link>
        <Link className='text-base font-medium block py-2' to='/affiliates' onClick={() => setIsOpen(false)}>Affiliates</Link>
        <Link className='text-base font-medium block py-2' to='/contact' onClick={() => setIsOpen(false)}>Contact</Link>
        <Link className='text-base font-medium block py-2' to='/status' onClick={() => setIsOpen(false)}>Status</Link>
        <Link className='text-base font-medium block py-2' to='/log-in' onClick={() => setIsOpen(false)}>Log in</Link>
        <Link className='text-base font-medium block py-2' to='/sign-up' onClick={() => setIsOpen(false)}>Sign up</Link>
        </div>
      </div>
    </nav>
    </div>
        </div>

       
    </header>
  )
}

export default Header
