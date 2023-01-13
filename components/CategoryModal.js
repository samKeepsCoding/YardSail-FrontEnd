import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import modalPic1 from '../assets/bn-8.jpeg'
import modalPic2 from '../assets/Electronics.png'
import modalPic3 from '../assets/jewelry.jpg'

const CategoryModal = ({handleModal}) => {
  return (
    <>
        <div className='absolute flex justify-center items-center w-full z-10' onMouseLeave={() => handleModal(false)}>
            <div className='border flex flex-row justify-center items-start mt-[-3.5rem] bg-white space-x-8 p-4 rounded-sm drop-shadow-2xl'>

                <div className='flex flex-col justify-center items-center text-start space-y-2'>

                    <h1 className='font-bold text-[15px] mb-2'>SHOP BY CATEGORY</h1>

                    <Link href={`/products/category/electronics`} onClick={() => handleModal(false)} className='text-sm font-light text-[#666666] cursor-pointer flex-wrap hover:text-[#999]'>Electronics</Link>
                    <Link href={`/products/category/jewelery`} onClick={() => handleModal(false)} className='text-sm font-light text-[#666666] cursor-pointer flex-wrap hover:text-[#999]'>Jewelery</Link>
                    <Link href={`/products/category/men's%20clothing`} onClick={() => handleModal(false)} className='text-sm font-light text-[#666666] cursor-pointer flex-wrap hover:text-[#999]' >Men's Clothing</Link>
                    <Link href={`/products/category/women's%20clothing`} onClick={() => handleModal(false)} className='text-sm font-light text-[#666666] cursor-pointer flex-wrap hover:text-[#999]'>Women's Clothing</Link>

                    <Image
                        src={modalPic1}
                        width={200}
                        height={200}
                        className='rounded-sm'
                    />
                </div>

                <div className='flex flex-col justify-start items-center text-start space-y-2'>

                    <h1 className='font-bold text-[15px] mb-2'>SHOP BRANDS</h1>

                    <Link href={`/products/category/electronics`} onClick={() => handleModal(false)} className='text-sm font-light text-[#666666] cursor-pointer flex-wrap hover:text-[#999]'>Hp</Link>
                    <Link href={`/products/category/jewelery`} onClick={() => handleModal(false)} className='text-sm font-light text-[#666666] cursor-pointer flex-wrap hover:text-[#999]'>Kay Jewlers</Link>
                    <Link href={`/products/category/men's%20clothing`} onClick={() => handleModal(false)} className='text-sm font-light text-[#666666] cursor-pointer flex-wrap hover:text-[#999]' >Nike</Link>
                    <Link href={`/products/category/women's%20clothing`} onClick={() => handleModal(false)} className='text-sm font-light text-[#666666] cursor-pointer flex-wrap hover:text-[#999]'>Shein</Link>

                    <Image
                        src={modalPic2}
                        width={220}
                        height={200}
                        className='rounded-sm'
                    />
                </div>

                <div className='flex flex-col justify-center items-center text-start space-y-2'>

                    <h1 className='font-bold text-[15px] mb-2'>COLLECTIONS</h1>

                    <Link href={`/products/category/electronics`} onClick={() => handleModal(false)} className='text-sm font-light text-[#666666] cursor-pointer flex-wrap hover:text-[#999]'>Electronics</Link>
                    <Link href={`/products/category/jewelery`} onClick={() => handleModal(false)} className='text-sm font-light text-[#666666] cursor-pointer flex-wrap hover:text-[#999]'>Jewelery</Link>
                    <Link href={`/products/category/men's%20clothing`} onClick={() => handleModal(false)} className='text-sm font-light text-[#666666] cursor-pointer flex-wrap hover:text-[#999]' >Men's Clothing</Link>
                    <Link href={`/products/category/women's%20clothing`} onClick={() => handleModal(false)} className='text-sm font-light text-[#666666] cursor-pointer flex-wrap hover:text-[#999]'>Women's Clothing</Link>

                    <Image
                        src={modalPic3}
                        width={220}
                        height={200}
                        className='rounded-sm'
                    />
                </div>


            </div>
        </div>
    </>
  )
}

export default CategoryModal