import React from 'react'
import { useState } from 'react'
import logo from '../assets/img/logo.svg'

function Navbar() {
  const [buttonIsCliked, setButtonIsCliked] = useState(false)

  function handleClick() {
    setButtonIsCliked(!buttonIsCliked)
  }

  return (
    <div >
      {/*  Navbar */}
      <nav className="relative container mx-auto p-6">
        {/* Flex container */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="pt-2">
            <img src={logo} alt="" />
          </div>
          {/* Menu Items  */}
          <div className=" hidden md:flex space-x-6">
            <a href="#" className='hover:text-darkGrayishBlue'>Pricing</a>
            <a href="#" className='hover:text-darkGrayishBlue'>Product</a>
            <a href="#" className='hover:text-darkGrayishBlue'>About Us</a>
            <a href="#" className='hover:text-darkGrayishBlue'>Careers</a>
            <a href="#" className='hover:text-darkGrayishBlue'>Community</a>
          </div>
          {/* Button */}
          <a href="#" className='hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight'>Get Started</a>

          {/* Hamburger Icon */}
          <button onClick={handleClick} className={`block hamburger md:hidden focus:outline-none z-30 ${buttonIsCliked ? 'open' : ''}`} id="menu-btn">
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <div className={`absolute flex flex-col items-center ${buttonIsCliked ? 'flex' : 'hidden'} self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md z-20`}>
            <a href="">Pricing</a>
            <a href="">Product</a>
            <a href="">About Us</a>
            <a href="">Careers</a>
            <a href="">Community</a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar