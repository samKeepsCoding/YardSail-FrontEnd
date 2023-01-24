import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';

// Components
import ShoppingCartCard from '../components/ShoppingCartCard';

// Redux
import {useSelector, useDispatch } from 'react-redux';
import { 
    incrementQuantity,
    decrementQuantity,
    removeFromCart 

} from '../lib/Redux/cart.slice';


const shoppingCart = () => {

    const cart = useSelector((state) => state.cart);


    console.log(cart)


  return (
    <>
        <div className='w-full flex justify-center flex-col items-center'>
            <div className='w-full py-10 text-center text-[#666666] bg-[#F5F5F5]'>
                <Link href={'/'} className='cursor-pointer'>
                    Home
                </Link>
            </div>

            <div className=' flex flex-col md:flex-row p-4'>
                {/* Left Side */}
                <div className='flex flex-col justify-start items-start space-y-8'>
                    <h3 className='font-extrabold text-[#343434]'>SHOPPING CART</h3>
                    {cart.length === 0 ? (
                        <>
                            <p className='font-bold text-[#343434]'>There are no items in your cart...</p>
                        </>
                    ): cart.map(item => (
                        <>
                            <ShoppingCartCard item={item}/>
                        </>
                    ))}
                    <Link
                        href={"/"}
                        className="px-4 py-2 bg-[#222222] text-[#FFFFFF] rounded-2xl"
                    >
                        CONTINUE SHOPPING
                    </Link>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default shoppingCart