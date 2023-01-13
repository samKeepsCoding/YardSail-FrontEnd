import React from 'react'
import {useState, useEffect} from 'react'
import { slice } from 'lodash'
import { client } from '../../lib/client'


// Components
import BlogSideBar from '../../components/BlogSideBar'
import BlogCard from '../../components/BlogCard'
import post from '../../../backend/schemas/post'



export async function getStaticProps() {
    const posts = await client.fetch(`*[_type == "post"]`)

    const res = await fetch('https://fakestoreapi.com/products/categories/')
    const categories = await res.json()



    return {
        props: {
            posts,
            categories
        }
    }
}

const blog = ({ posts, categories }) => {
    
    const [index, setIndex] = useState(2)
    const initialPosts = slice(posts, 0, index)
    const [isCompleted, setIsCompleted] = useState(false)

    const loadMorePosts = () => {
        setIndex(index + 2)
        if (index >= posts.length) {
            setIsCompleted(true)
        } else {
            setIsCompleted(false)
        }
    }
  return (
    <>
        <div className='flex w-full justify-center'>
            <div className='w-[72rem] flex flex-col-reverse md:flex-row'>
                <BlogSideBar posts={posts} categories={categories}/>
                <div className='flex flex-col justify-start items-center w-full'>
                    {initialPosts.map((post) => (
                        <BlogCard post={post} key={post._id}/>
                    ))}                   
                </div>
            </div>

        </div>

        {!isCompleted ? (
            <button 
                type="button" 
                onClick={loadMorePosts}
                className='text-center w-full'
            >
                Load More...
            </button>
        ): (<p className='text-center w-full'>No More To Load</p>)}
            
    </>
  )
}

export default blog