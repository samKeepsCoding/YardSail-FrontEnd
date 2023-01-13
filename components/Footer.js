import React from 'react'
import Link from 'next/link'
import { TbTruckDelivery } from 'react-icons/tb'
import { GiWallet } from 'react-icons/gi'
import { BsCheckSquare } from 'react-icons/bs'
import Image from 'next/image'

const Footer = () => {

    const banks = 'http://demo.bestprestashoptheme.com/cariana/modules/novthemeconfig/images/payment-1.png'
  return (
    <>
        <div className='w-full relative flex flex-col md:flex-row p-8 justify-center items-center space-y-8 md:space-y-0 md:space-x-8 border-t-2'>
                <div className='flex flex-row '>
                   <TbTruckDelivery size={45} classname=''/> 
                   <div className='flex flex-col text-start ml-2'>
                    <h3 className='font-medium text-base'>FREE DELIVERY FROM $250</h3>
                    <p className='font-thin text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                   </div>
                </div>
                <div className='flex flex-row space-x-3 '>
                   <GiWallet size={40}/> 
                   <div className='flex flex-col text-start'>
                    <h3 className='font-medium text-base'>MONEY BACK GUARANTEED</h3>
                    <p className='font-thin text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                   </div>
                </div>
                <div className='flex flex-row space-x-3 '>
                   <BsCheckSquare size={35}/> 
                   <div className='flex flex-col text-start'>
                    <h3 className='font-medium text-base'>AUTHENTICITY 100% GUARANTEED</h3>
                    <p className='font-thin text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                   </div>
                </div>
               
        </div>

        <div className='w-full flex flex-row p-4 text-white bg-[#0d0d0d] text-xs justify-around items-start'>
            <div className='flex flex-col text-start space-y-2 font-thin'>
                <h4 className='font-bold mt-3'>OPENING HOURS</h4>
                <p>Monday To Friday - 8:00 AM to 8:00 PM</p>
                <p>Saturday - 7:30 AM to 9:30 PM</p>
                <p>Sunday - 7:00 AM to 10:00 PM</p>
            </div>
            <div className='flex flex-col text-start space-y-2 font-thin'>
                <h4 className='font-bold mt-3'>CORPORATE INFO</h4>
                <Link href='/'>
                    <p>Who We Are?</p>
                </Link>
                <Link href='/'>
                    <p>Sitemap</p>
                </Link>
                <Link href='/'>
                    <p>California Laws</p>
                </Link>
            </div>
            <div className='flex flex-col text-start space-y-2 font-thin'>
                <h4 className='font-bold mt-3'>CONTACT US</h4>
                <p>145 Something Dr, </p>
                <p>388 Building</p>
                <p>Atlanta, Ga</p>
                <p>333-909-9443</p>
                <p>somethingelse@gmail.com</p>
            </div>
        </div>

        <div className='w-full max-h-[100px] flex flex-col md:flex-row p-8 justify-between items-center space-y-8 md:space-y-0 '>
            <p className='font-light text-sm'>COPYRIGHT © 2018 YARDSAIL. ALL RIGHTS RESERVED.</p>

            
        </div>
    </>
  )
}

export default Footer