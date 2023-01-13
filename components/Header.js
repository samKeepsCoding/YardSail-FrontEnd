import React from 'react'
import Image from 'next/image'
import earbuds from '../assets/earbuds.jpg'
import electronics from '../assets/Electronics.png'
import clothes from '../assets/folded-shirts.jpg'

const Header = () => {
  return (
    <>
        <div className='flex flex-col lg:flex-row justify-center items-center drop-shadow-lg h-full px-3'>
            <Image className='rounded-md lg:h-[70vh]' src={earbuds} width={700} alt='Earbuds Picture'/>
            <div className='hidden md:flex justify-center space-x-3 lg:space-x-0 mt-3 lg:mt-0 lg:flex-col lg:ml-4 '>
                <Image className='rounded-md w-1/2 lg:w-full  lg:h-[34vh]' src={electronics} width={330} alt='electronic picture'/>
                <Image className='rounded-md lg:w-full lg:mt-4 lg:h-[34vh]' src={clothes} width={330} alt='clothes picture'/>
            </div>
        </div>
    </>
  )
}

export default Header