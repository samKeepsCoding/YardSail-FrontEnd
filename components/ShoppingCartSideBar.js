import React, { useEffect } from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion'

// Redux Imports
import { useSelector, useDispatch} from 'react-redux';
import { calculateTotal } from '../lib/Redux/cart.slice';

// Component Imports
import ShoppingCartSideCard from './ShoppingCartSideCard';

// Icon Import 
import { RiCloseFill } from 'react-icons/ri'

const ShoppingCartSideBar = ({handleModal}) => {

  const cart = useSelector((state) => state.cart);
  const total = useSelector(state => state.cart.reduce((acc,val) => acc + val.price * val.quantity,0))
  const dispatch = useDispatch()
  

  console.log(cart)
  
  return (
    <>
        <motion.div 
          className='fixed bg-gradient-to-r from-gray-300 to-transparent left-0 right-0 top-0 bottom-0 z-10'
          onClick={() => handleModal(false)}
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{duration: 0.2}}
          exit={{opacity: 0, transition: {duration: 0.3}}}
        >
          <motion.div 
            className='fixed flex flex-col space-y-7 items-center xl:items-center justify-start border right-0 w-[26rem] lg:w-2/5 h-screen z-20 bg-white pt-32 px-4'
            initial={{ x:100 }}
            animate={{ x:0 }}
            transition={{ type: "spring", stiffness: 100, duration: 0.2}}
            exit={{ x: '100%', transition: { duration: 0.3 } }}
          >
            <button type="button" onClick={() => handleModal(false)}>
              <RiCloseFill size={30}/>
            </button>
            {cart.length === 0 ? (
                <>
                    <p className='font-bold text-[#343434]'>There are no items in your cart...</p>
                </>
            ): cart.map(item => (
                <>
                    <ShoppingCartSideCard item={item}/>
                    <div className='flex w-full flex-col justify-start xl:justify-center xl:items-center items-start'>
                      <div className='flex flex-row justify-start text-start items-center'>
                          <h3> 
                            Subtotal:
                          </h3>
                          <div className='border-t-[0.1px] w-[200px] xl:w-[450px] ml-6'></div>
                      </div>
                      <p className='font-bold text-lg '>${total}</p>
                      <div className='flex flex-row justify-start text-start items-center'>
                          <h3> 
                            Shipping:
                          </h3>
                          <div className='border-t-[0.1px] w-[200px] xl:w-[450px] ml-6'></div>
                      </div>
                      <p className='font-bold text-lg '>$7.00 </p>
                      <div className='flex flex-row justify-start text-start items-center'>
                          <h3> 
                            Total:
                          </h3>
                          <div className='border-t-[0.1px] w-[200px] xl:w-[450px] ml-6'></div>
                      </div>
                      <p className='font-bold text-lg '>${Number(total + 7).toFixed(2)} </p>
                    </div>
                    <div className='flex flex-row jusity-center items-center space-x-4'>
                      <Link href={'/shoppingCart'}>
                        <button type="button" 
                          className="rounded-full py-3 px-4 bg-[#222222] text-white flex flex-row items-center  hover:bg-[#878787] duration-100 ease-in-out cursor-pointer"
                          onClick={() => handleModal(false)}
                        >
                          View Cart
                        </button>
                      </Link>
                    </div>
                </>
            ))}

          </motion.div>
        </motion.div>
    </>
  )
}

export default ShoppingCartSideBar