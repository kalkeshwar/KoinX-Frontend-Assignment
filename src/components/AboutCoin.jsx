import React from 'react'

const AboutCoin = (props) => {
  const data = props.data
  return (
    <div className='w-full flex flex-col bg-white p-5 rounded-xl gap-5'>
        <div className='font-bold text-xl'>About {props.name}</div>
        <div className='font-semibold'>what is {props.name}</div>
        <div className="flex flex-row" dangerouslySetInnerHTML={{ __html: data}}></div>
        <div className="w-full h-1 top-0 relative left-0 bg-gray-200 rounded-xl"></div>
        <div className='font-semibold text-xl'>Already Have a {props.name}</div>
        <div className='w-full flex md:flex-row gap-10 vsm:flex-col'>
          <div className='flex flex-row  md:w-[40%] vsm:w-full h-[10rem] gap-5 p-1 bg-gradient-to-r to-[#60efff] from-[#00ff87] items-center rounded xl'> 
            <img src="/phone.avif" alt="" className='w-[40%] h-full rounded-xl' />
            <div className='flex flex-col gap-10'>
              <div className='font-semibold flex text-xl text-white'> Calculate your profits.</div>
              <div className='bg-white text-black p-1 rounded-md w-[8rem] cursor-pointer'>Check Now</div>
            </div>
          </div>
          <div className='flex flex-row md:w-[40%] vsm:w-full h-[10rem] gap-5 p-1 bg-gradient-to-r to-[#efc074] from-[#983f26] items-center rounded xl'> 
            <img src="/phone.avif" alt="" className='w-[40%] h-full' />
            <div className='flex flex-col gap-10'>
              <div className='font-semibold flex text-white text-xl'> Calculate your Tax Liabilities.</div>
              <div className='bg-white text-black p-1 rounded-md  w-[8rem] cursor-pointer'>Check Now</div>
            </div>
          </div>
        </div>
        <div className="w-full h-1 top-0 relative left-0 bg-gray-200 rounded-xl"></div>
    </div>
  )
}

export default AboutCoin