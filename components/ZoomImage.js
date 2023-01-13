import Image from 'next/image'
import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'

const ZoomImage = ({product, handleZoomImage}) => {
  return (
    <>
        {product ? (

        <div className='fixed w-full h-screen top-0 bottom-0 z-40 flex justify-center items-center bg-[#666666] bg-opacity-50 '>
            <div className='relative flex flex-col bg-white p-8 max-w-lg  rounded-md z-100'>
                <Image
                    src={product.image}
                    width={500}
                    height={500}
                    alt='main image'
                />
            <button type="button" className='absolute top-1 right-1 ' onClick={() => handleZoomImage(false)}>
                <AiFillCloseCircle size={20} className='z-300'/>
            </button>
            </div>
        </div>
        ): <h1>Loading...</h1>}
    </>
  )
}

export default ZoomImage