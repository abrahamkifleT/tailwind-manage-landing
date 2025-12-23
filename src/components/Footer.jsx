import React from 'react'
import logo from '../assets/img/logo-white.svg'
import facebook from '../assets/img/icon-facebook.svg'
import twitter from '../assets/img/icon-twitter.svg'
import instagram from '../assets/img/icon-instagram.svg'
import youtube from '../assets/img/icon-youtube.svg'
import pinterest from '../assets/img/icon-pinterest.svg'

function Footer() {
    return (
        <div className="footer bg-veryDarkBlue">
            {/* Flex Container */}

            <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-6 md:flex-row md:space-y-0">

                <div className="mx-auto my-6 text-center text-white md:hidden">
                    Copyright 2020 Manage. All rights reserved.
                </div>

                {/* Logo and Social Links container */}
                <div className="flex flex-col-reverse items-center justify-between  space-y-6 md:flex-col md:space-y-0 md:items-start">
                    {/* Logo */}
                    <div>
                        <img src={logo} alt="" className='h-8' />
                    </div>
                    {/* Social Links */}
                    <div className="flex justify-center space-x-4 my-6">
                        {/* Link 1 */}
                        <a href="">
                            <img src={facebook} alt="" className="h-8" />
                        </a>
                        {/* Link 2 */}
                        <a href="">
                            <img src={youtube} alt="" className="h-8" />
                        </a>
                        {/* Link 3 */}
                        <a href="">
                            <img src={twitter} alt="" className="h-8" />
                        </a>
                        {/* Link 4 */}
                        <a href="">
                            <img src={pinterest} alt="" className="h-8" />
                        </a>
                        {/* Link 5 */}
                        <a href="">
                            <img src={instagram} alt="" className="h-8" />
                        </a>
                    </div>
                </div>
                {/* List Container */}
                <div className="flex justify-around space-x-32">
                    <div className="flex flex-col space-y-3 text-white">
                        <a href="#" className="hover:text-brightRed">
                            Home
                        </a>
                        <a href="#" className="hover:text-brightRed">
                            Pricing
                        </a>
                        <a href="#" className="hover:text-brightRed">
                            Product
                        </a>
                        <a href="#" className="hover:text-brightRed">
                            About
                        </a>
                    </div>

                    <div className="flex flex-col space-y-3 text-white">
                        <a href="#" className="hover:text-brightRed">
                            Careers
                        </a>
                        <a href="#" className="hover:text-brightRed">
                            Community
                        </a>
                        <a href="#" className="hover:text-brightRed">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                {/* Input Container */}

                <div className="flex flex-col justify-between my-6">
                    <form >
                        <div className="flex space-x-3">
                            <input type='text'
                             className="flex-1 px-4 rounded-full focus:outline-none bg-white"
                             placeholder='Update in your inbox' />

                             <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedHover focus:outline-none cursor-pointer">Go</button>
                        </div>
                    </form>
                    <div className="hidden text-white md:block">Copyright 2020 Manage. All rights reserved.</div>
                </div>
            </div>
        </div>
    )
}

export default Footer