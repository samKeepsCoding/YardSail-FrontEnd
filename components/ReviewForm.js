import Image from 'next/image'
import React, {useState} from 'react'
import { motion } from 'framer-motion'
import { AiFillCloseCircle, AiFillStar } from 'react-icons/ai'
import { RiFileEditLine } from 'react-icons/ri'

const ReviewForm = ({product, handleReviewForm}) => {

    const [title, setTitle] = useState(null)
    const [review, setReview] = useState(null)
    const [name, setName] = useState(null)
  return (
    <>
        <div className='w-full h-screen absolute top-0 bottom-0 z-40 flex justify-center items-center bg-[#666666] bg-opacity-50'>
            
            <motion.div 
                className='relative flex flex-col z-200 bg-white p-4 max-w-lg  rounded-md'
                initial={{
                    opacity:0,
                    y:-20
                }}
                animate={{
                    opacity:1,
                    y:0
                }}
                transition={{
                    duration: 0.7
                }}
            >
                <button type="button" className="items-center flex flex-row ml-6 text-[10px] mb-4">
                    <RiFileEditLine/>
                    <p className="ml-1">WRITE YOUR REVIEW</p>
                </button>

                <div className='flex flex-col md:flex-row space-x-4 '>
                    <Image
                        src={product.image}
                        width={150}
                        height={150}
                        alt='product image'
                    />
                    <div className='flex flex-col items-start justify-start text-start '>
                        <h1 className='text-sm font-bold'>{product.title}</h1>
                        <p className='text-[10px] mt-3'>{product.description}</p>
                    </div>

                </div>
                <div className='flex flex-row items-center mt-7'>
                    <p className='font-bold'>Quality :</p>
                    <AiFillStar size={15} className='fill-yellow-500 ml-5'/>
                    <AiFillStar size={15} className='fill-yellow-500'/>
                    <AiFillStar size={15} className='fill-yellow-500'/>
                    <AiFillStar size={15} className='fill-yellow-500'/>
                    <AiFillStar size={15} className='fill-yellow-500'/>
                </div>

                <div className='flex flex-col text-sm font-bold text-[#444444] mt-4'>
                    <label for="title">Title for your review <i className='text-red-500'>*</i></label>
                    <input type="text" name="title" value={title} required className='border hover:border-black rounded-sm font-medium px-3 py-1 mt-2 mb-2 focus:ring-0' />
                    <label for="title">Your review<i className='text-red-500'> *</i></label>
                    <textarea name="review" value={review} required rows="4" cols="50" className='border hover:border-black rounded-sm font-medium px-3 py-1 mt-2 focus:ring-0' />
                    <label for="title">Your Name <i className='text-red-500'>*</i></label>
                    <input type="text" name="name" value={name} required className='border hover:border-black rounded-sm font-medium px-3 py-1 mt-2 mb-2 focus:ring-0' />
                    
                    <div className='w-full flex flex-row items-center mt-4'>
                        <i className='text-red-500'>*</i>
                        <p className='ml-2 font-light text-[13px]'>Required Fields</p>
                        <button type="submit" className='rounded-xl px-4 py-1 bg-[#222222] hover:bg-[#484747] text-white font-medium ml-auto'>SEND</button>
                    </div>
                </div>
                <button type="button" className='absolute top-1 right-1 ' onClick={() => handleReviewForm(false)}>
                    <AiFillCloseCircle size={20} className='z-300'/>
                </button>
            </motion.div>
            
        </div>
    </>
  )
}

export default ReviewForm