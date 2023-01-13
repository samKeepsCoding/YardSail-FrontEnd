import React from 'react'
import Link from 'next/link'
import moment from 'moment'
import { urlFor } from '../lib/client'

const BlogArticleCard = ({ post }) => {

    // console.log(post)

    const isoDate = post._createdAt
    const formattedDate = moment(isoDate).format('MMMM Do YYYY')

  return (
    <>
    <div className='w-full flex flex-col justify-start items-start p-4'>
        <img
            src={urlFor(post.mainImage)}
            width={700}
            height={500}
            alt='Blog Post Poster'
            className='rounded-sm'
        />
        <div className='max-w-[45rem] flex flex-col justify-start items-start mt-3 '>
            
            <h2 className='text-[#444444] text-start text-md font-medium'>{post.title}</h2>
            
            {post && post.body.map((block) => {

                switch (block._type) {
                    case 'block' :
                        return <p className='text-sm text-[#666666] mt-2' key={block._id}>{block.children[0].text}</p>
                    default:
                        return <p>Did not render</p>
                }
            })}
            <div className='flex flex-row space-x-2 text-xs font-light items-center text-[#666666] mt-3'>
                <p>{formattedDate}</p>
                <div className='border-[0.7px] text-black h-5'></div>
                <Link href='/blog'>News Blog</Link>
                <div className='border-[0.7px] text-black h-5'></div>
                <Link href='/blog'>0 Comments</Link>
                <div className='border-[0.7px] text-black h-5'></div>
                <p>Demo Demo</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default BlogArticleCard