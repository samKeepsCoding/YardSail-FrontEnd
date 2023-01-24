import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'

import { useSelector } from 'react-redux'

// Components
import CategoryModal from './CategoryModal'
import ShoppingCartSideBar from './ShoppingCartSideBar.js'
import SideMenu from './SideMenu'

// Iconcs
import logo from '../assets/logo-black.png'
import { MdOutlineSearch } from 'react-icons/md'
import { AiFillShopping, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {

    const [modal, setModal] = useState(false);
    const [showCart, setShowCart] = useState(false); 
    const [showSideMenu, setShowSideMenu] = useState(false)
    const cart = useSelector((state) => state.cart);

  return (
    <>
        <div className='flex flex-row items-center justify-center px-8 w-full z-10'>
            <div className=' flex flex-row items-center justify-between space-x-6 w-[1200px] '>
                <button type="button"
                    onClick={() => setShowSideMenu(true)}
                    className='flex md:hidden'
                >
                    <AiOutlineMenu size={25} />
                </button>
                <div className='mr-auto'>
                    <Image
                        src={logo}
                        width={150}
                        alt='logo'
                    />
                </div>

                <ul className='md:flex flex-row items-center justify-center space-x-8 text-[15px] hidden '>
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

                
                
                <div className='flex flex-row items-end space-x-3 justify-center ml-auto'>
                    <div className='flex flex-col '>
                        <div className=' flex items-center justify-center rounded-full border bg-gray-100'>
                            <p className='font-thin text-xs text-black'>{cart.length}</p>
                        </div>
                        {/* <Link href='/shoppingCart'>
                            <AiFillShopping size={20}/>
                        </Link> */}
                        <button 
                            type="button"
                            onClick={() => setShowCart(true)}
                        >
                            <AiFillShopping size={20}/>
                        </button>
                        
                    </div>
                </div>
            </div>
        </div >
        {modal ? (<CategoryModal handleModal={value => setModal(value)}/>): null}
        <AnimatePresence>
            {/* Shopping Cart Menu */}
            {showCart ? ( <ShoppingCartSideBar handleModal={value => setShowCart(value)} /> ): null}
            {/* Side NavBar Menu */}
            {showSideMenu ? (<SideMenu  handleModal={value => setShowSideMenu(value)}/>): null}
        </AnimatePresence>
    </>
  )
}

export default Navbar