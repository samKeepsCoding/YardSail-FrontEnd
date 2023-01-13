import React from 'react'
import {useState} from 'react'
import Image from 'next/image'

// Components
import ReviewForm from './ReviewForm'

// Icons
import { AiFillStar,AiFillShopping, AiOutlineHeart } from 'react-icons/ai'
import { MdOutlineSearch } from 'react-icons/md'
import { RiFileEditLine } from 'react-icons/ri'

const RowCard = ({item}) => {
    
    const [showReviewForm, setShowReviewForm] = useState(false)
  return (
    <>
        <div className='w-full flex flex-row items-start p-8 pl-[4rem] '>
            <Image
                src={item.image}
                alt='Product Image'
                width={250}
                height={250}
            />
            <div className='flex flex-col ml-8'>
                <p className='text-xs md:text-sm lg:text-base text-[#666666] font-bold ease-in duration-75'>
                    {item.title}
                </p>
                <p className='mt-3'>
                    ${item.price}
                </p>
                <div className="flex flex-row items-center text-xs mt-5 text-[10px] font-semibold ">
                    <p>REVIEW: </p>
                    <p className="ml-2">{item.rating.rate}</p>
                    <AiFillStar className= "fill-yellow-500 ml-1" />
                    <p>'s</p>
                    <button type="button" className="items-center hidden md:flex flex-row ml-6" onClick={() => setShowReviewForm(true)}>
                        <RiFileEditLine size={15}/>
                        <p className="ml-1 hidden md:block">WRITE YOUR REVIEW</p>
                    </button>
                </div>
                <p className="hidden md:block mt-3 text-[#666666] text-xs">- {item.description}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className='flex flex-row space-x-3 mt-4'>
                    <button type="button" className='flex items-center justify-center rounded-full border bg-[#636363] p-2 cursor-pointer hover:scale-125 hover:bg-[#292b2c] ease-in-out duration-100'>
                        <AiFillShopping size={24} className='text-[#fff]'/>
                    </button>
                    <button type="button" className='flex items-center justify-center rounded-full border bg-[#636363] p-2 cursor-pointer hover:scale-125 hover:bg-[#292b2c] ease-in-out duration-100'>
                        <AiOutlineHeart size={24} className='text-[#fff]'/>
                    </button>
                    <button type="button" className='hidden md:flex items-center justify-center rounded-full border bg-[#636363] p-2 cursor-pointer hover:scale-125 hover:bg-[#292b2c] ease-in-out duration-100'>
                        <MdOutlineSearch size={24} className='text-[#fff]'/>
                    </button>
                </div>
                

            </div>
        </div>

        {showReviewForm ? (
            <ReviewForm product={item} handleReviewForm={value => setShowReviewForm(value)}/> 
            ): null}
    </>
  )
}

export default RowCard