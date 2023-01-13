import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import logo from '../assets/logo-black.png'
import { MdOutlineSearch } from 'react-icons/md'
import { AiFillShopping } from 'react-icons/ai'
import CategoryModal from './CategoryModal'

const Navbar = () => {

    const [modal, setModal] = useState(false)


  return (
    <>
        <div className='flex flex-row items-center justify-center px-8 w-full'>
            <div className=' flex flex-row items-center justify-between space-x-6 w-[1200px]'>
                
                <div className=''>
                    <Image
                        src={logo}
                        width={150}
                        alt='logo'
                    />
                </div>

                <ul className='md:flex flex-row items-center space-x-8 text-[15px] font-Poppins hidden '>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li onMouseOver={() => setModal(true)}  >
                        <Link href='/'>Category</Link>
                    </li>
                    <li>
                        <Link href='/blog'>Blog</Link>
                    </li>
                    <li>
                        <Link href='/contact'>Contact Us</Link>
                    </li>
                </ul>

                
                
                <div className='flex flex-row items-end space-x-3 justify-center '>
                    <div className='flex flex-col '>
                        <div className=' flex items-center justify-center rounded-full border bg-gray-100'>
                            <p className='font-thin text-xs text-black'>1</p>
                        </div>
                        <AiFillShopping size={20}/>
                        
                    </div>
                    <MdOutlineSearch size={20} />
                </div>
            </div>
        </div >
        {modal ? (<CategoryModal handleModal={value => setModal(value)}/>): null}
    </>
  )
}

export default Navbar