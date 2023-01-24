import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import { useDispatch } from 'react-redux'
import { addToCart } from '../lib/Redux/cart.slice'
import { ToastContainer, toast } from 'react-toastify'



// Icons
import { AiOutlineHeart, AiFillShopping, AiFillStar } from 'react-icons/ai'
import { MdOutlineSearch } from 'react-icons/md' 



const Card = ({item}) => {

    const [isOpen, setIsOpen] = useState(false)
    const variants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: "25%" },
      }
      
    const dispatch = useDispatch()

    
  return (
    <>

        
        <div className='relative h-full ml-2 inline-block cursor-pointer  hover:scale-105 ease-in-out duration-300'>
            <div 
                className='flex flex-col justify-center items-center space-y-3 m-4 space-x-3  max-w-sm '
                
            >
                <div className='relative '>
                    <Image 
                        src={item.image} 
                        alt='Product Thumbnail'
                        width={270} 
                        height={400} 
                        className='cursor-pointer rounded-lg h-[250px]'
                        
                    />
                    
                            <div 
                                className='flex flex-row items-end justify-center space-x-3 absolute top-0 h-full w-full pb-4'
                                onMouseEnter={() => setIsOpen(isOpen => !isOpen)}
                                onMouseLeave={() => setIsOpen(isOpen => !isOpen)}
                            >         

                                <motion.button 
                                    className=' flex items-center justify-center rounded-full border bg-gray-100 p-2 cursor-pointer hover:scale-125 ease-in-out duration-100'
                                    animate={isOpen ? "open" : "closed"}
                                    variants={variants}
                                    transition={{
                                        duration: 0.2,
                                    }}
                                    onClick={() => dispatch(addToCart(item))}
                                >
                                    <AiFillShopping size={18}/>
                                </motion.button>

                                {/* <motion.div 
                                    className=' flex items-center justify-center rounded-full border bg-gray-100 p-2 cursor-pointer hover:scale-125 ease-in-out duration-100'
                                    animate={isOpen ? "open" : "closed"}
                                    variants={variants}
                                    transition={{
                                        duration: 0.2,
                                        delay: 0.1
                                    }}
                                >
                                    <AiOutlineHeart size={18}/>
                                </motion.div> */}

                                <motion.div 
                                    className=' flex items-center justify-center rounded-full border bg-gray-100 p-2 cursor-pointer hover:scale-125 ease-in-out duration-100'
                                    animate={isOpen ? "open" : "closed"}
                                    variants={variants}
                                    transition={{
                                        duration: 0.2,
                                        delay: 0.2
                                    }}
                                >
                                    <Link href={'/products/' + item.id}>
                                        <MdOutlineSearch size={18} className='z-40'/>
                                    </Link>
                                </motion.div>   
                            </div>

                        
                </div>
                    <div className='flex flex-row items-center w-sm'>
                        <Link href={`/products/${item.id}`}>
                            <h4 className='text-xs font-medium text-[#bbb] cursor-pointer flex-wrap text-center m-0'>{item.title}</h4>
                        </Link>
                    </div>
                        
                        <div className='text-center bg-[#444] rounded-sm items-center justify-center px-2 py-1'>
                            <Link legacyBehavior href={'/products/category/' + item.category}>
                                <a className='text-[0.6rem]  text-white z-40'> {item.category}</a> 
                            
                            </Link>
                        </div>
                    <div className='flex flex-row justify-center items-center'>
                        <AiFillStar size={15} className='fill-yellow-500'/>
                        <p  className='text-xs font-thin '> - {item.rating.rate}</p>
                        
                    </div>
                    <p>${item.price}</p>
            </div>
        </div>

        
    </>
  )
}

export default Card