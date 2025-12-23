import React from 'react'

function Cta() {
  return (
    <section id="cta" className='bg-brightRed'>
      {/* Flex Container */}
      <div className="container flex flex-col items-center justify-between px-16 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
        {/* Heading */}
        <div className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
            Simplify how your team work today.
        </div>
        {/* Button */}
        <a href="#" className='p-3 px-6 pt-2 text-brightRed  bg-white rounded-full shadow-2xl baseline hover:bg-gray-900/70'>Get Started</a>
      </div>
    </section>
  )
}

export default Cta