import Link from 'next/link'
import React from 'react'

// components
import ContactForm from '../components/ContactForm'

// icons
import { AiOutlineMail,AiOutlinePhone } from 'react-icons/ai'
import { IoLocationOutline } from 'react-icons/io5'

const contact = () => {

    

  return (
    <>
        <div className='w-full flex flex-col justify-center '>

            <div className='w-full flex flex-col justify-center items-center bg-[#F5F5F5] py-11'>
                <h1 className='font-semibold text-lg'>CONTACT US</h1>
                <div className='flex flex-row justify-center items-center space-x-2 mt-3'>
                    <p className='text-xs'>◆</p>
                    <Link className='text-xs text-[#666666] font-medium' href='/'>
                        Home
                    </Link>
                    <p className='text-xs'>◆</p>
                </div>
            </div>


            <div className='flex justify-center items-center w-full'>
                <div className='flex flex-col md:flex-row justify-start md:justify-center items-start md:items-center py-9 space-x-0 md:space-x-6 space-y-4 md:space-y-0 max-w-6xl text-xs lg:text-md '>
                    <div className='flex flex-row items-center justify-center px-5'>
                        <div className='flex justify-center items-center bg-[#909090] p-1 rounded-md'>
                            <AiOutlineMail size={20} className='text-white'/>
                        </div>
                        <div className='flex flex-row items-center text-[#666666]  '>
                            <h3 className='font-bold  ml-3'>Email:</h3>
                            <p className='text-light ml-1 '>somethingelse@gmail.com</p>
                        </div>
                    </div>
                    
                    <div className='flex flex-row items-center justify-center px-5'>
                        <div className='flex justify-center items-center bg-[#909090] p-1 rounded-md'>
                            <IoLocationOutline size={20} className='text-white'/>
                        </div>
                        <div className='flex flex-row items-center text-[#666666]  '>
                            <h3 className='font-bold  ml-3'>Address:</h3>
                            <p className='text-light ml-1 '>145 Something Dr Atl, Ga</p>
                        </div>
                    </div>
                    
                    <div className='flex flex-row items-center justify-center px-5'>
                        <div className='flex justify-center items-center bg-[#909090] p-1 rounded-md'>
                            <AiOutlinePhone size={20} className='text-white'/>
                        </div>
                        <div className='flex flex-row items-center text-[#666666]  '>
                            <h3 className='font-bold  ml-3'>Hotline:</h3>
                            <p className='text-light ml-1 '>333-909-9443</p>
                        </div>
                    </div>
                </div>
            </div>

            <ContactForm/>
        </div>

        
        
    </>
  )
}

export default contact