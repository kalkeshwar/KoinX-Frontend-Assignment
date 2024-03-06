import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-white py-5 px-10 flex flex-row justify-between items-center'>
        <img src='/Koinxlogo.svg' className='h-[1.5rem]'/>
        <div className="flex flex-row items-center gap-10">
            <div className="text-[1.1rem] font-semibold cursor-pointer">Crypto Taxes</div>
            <div className="text-[1.1rem] font-semibold cursor-pointer">Free Tools</div>
            <div className="text-[1.1rem] font-semibold cursor-pointer">Resource Center</div>
            <div className='bg-blue-800 text-white font-semibold py-2 px-10 rounded-md cursor-pointer'>Get Started</div>
        </div>
    </div>
  )
}

export default Navbar