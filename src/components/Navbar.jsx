import React,{useState} from 'react'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const handleOpenNav=()=>{
    setIsOpen((prev)=>!prev)
  }

  return (
    <div className='bg-white py-5 px-10 flex flex-row justify-between items-center relative'>
        <img src='/Koinxlogo.svg' className='h-[1.5rem]'/>
        <div className="md:flex vsm:hidden flex-row items-center gap-10">
            <div className="text-[1.1rem] font-semibold cursor-pointer">Crypto Taxes</div>
            <div className="text-[1.1rem] font-semibold cursor-pointer">Free Tools</div>
            <div className="text-[1.1rem] font-semibold cursor-pointer">Resource Center</div>
            <div className='bg-blue-800 text-white font-semibold py-2 px-10 rounded-md cursor-pointer'>Get Started</div>
        </div>
        {
          !isOpen?(
            <div className='md:hidden vsm:flex flex-col gap-1 relative' onClick={handleOpenNav}>
              <div className='w-8 h-1 bg-black'></div>
              <div className='w-8 h-1 bg-black'></div>
              <div className='w-8 h-1 bg-black'></div>
            </div>
          ):(
            <div className='relative top-0 w-8 h-1 md:hidden z-10' onClick={handleOpenNav}>
              <div className='w-8 h-1 bg-white rotate-45 absolute top-0 left-0'></div>
              <div className='w-8 h-1 bg-white -rotate-45 absolute top-0 right-0'></div>
            </div>
          )
        }
       {
        isOpen && (
          <div className='absolute w-[100vw] h-[100vh] bg-black text-white flex flex-col gap-10 py-[10rem] items-center top-0 left-0 z-1'>
            <div className="text-[1.1rem] font-semibold cursor-pointer">Crypto Taxes</div>
            <div className="text-[1.1rem] font-semibold cursor-pointer">Free Tools</div>
            <div className="text-[1.1rem] font-semibold cursor-pointer">Resource Center</div>
            <div className='bg-blue-800 text-white font-semibold py-2 px-10 rounded-md cursor-pointer'>Get Started</div>
        </div>
        )
       } 
    </div>
  )
}

export default Navbar