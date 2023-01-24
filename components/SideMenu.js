import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

// Icon Imports
import {RiCloseFill } from 'react-icons/ri'

const SideMenu = ({handleModal}) => {
  return (
    <>
        <motion.div
            className='fixed md:hidden bg-gradient-to-l from-gray-300 to-transparent left-0 right-0 top-0 bottom-0 z-10'
            onClick={() => handleModal(false)}
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{duration: 0.2}}
            exit={{opacity: 0, transition: {duration: 0.3}}}
        >
            <motion.div
                className='fixed flex flex-col space-y-7 items-center xl:items-center justify-start border left-0 w-[26rem] h-screen z-20 bg-white pt-32 px-4'
                initial={{ x:-100 }}
                animate={{ x:0 }}
                transition={{ type: "spring", stiffness: 50, duration: 0.2}}
                exit={{ x: '-100%', transition: { duration: 0.3 } }}
            >
                <button type="button" onClick={() => handleModal(false)}>
                <RiCloseFill size={30}/>
                </button>
                <ul className='w-full flex-col items-start text-start space-y-8 text-[15px] font-Poppins'>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/'>Category</Link>
                    </li>
                    <li>
                        <Link href='/blog'>Blog</Link>
                    </li>
                    <li>
                        <Link href='/contact'>Contact Us</Link>
                    </li>
                </ul>
            </motion.div>

        </motion.div>
    </>
  )
}

export default SideMenu