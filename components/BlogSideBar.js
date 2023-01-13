import React from 'react'
import Link from 'next/link'
import moment from 'moment'

const BlogSideBar = ({ posts, categories }) => {
    
    const recentPosts = posts.slice(0, 2)
    
  return (
    <>
        <div className=' flex flex-col justify-start items-start text-start px-8 md:w-2/6 w-full'>
            <h3 className='text-xl font-bold mt-6'>RECENT POSTS</h3>
            <div className='flex flex-col divide-y justify-center'>
                {posts && recentPosts.map((post) => (
                    <div className='space-y-2 mt-7 ' key={post._id}>
                        <h2 className='text-[#444444] text-md font-medium'>{post.title}</h2>
                        <p className='text-xs text-[#909090]'>{moment(post._createdAt).format('MMMM Do YYYY')}</p>
                        <p className='text-xs text-[#666666]'>{post.description}</p>
                    </div>
                ))}
            </div>

            <h3 className='text-xl font-bold mb-3 mt-7'>PRODUCT TAGS</h3>
            <div className='flex flex-row flex-wrap'>
                {categories && categories.map((category) => (
                    <Link href={`/products/category/${category}`} key={categories.indexOf(category)}>
                        <button className='border bg-[#F5F5F5] text-xs text-[#666666] font-light m-1 p-1 rounded-sm hover:bg-[#444444] hover:text-white'>{category}</button>
                    </Link>
                ))}
                
            </div>


        </div>
    </>
  )
}

export default BlogSideBar