import React from 'react'
import { useRouter } from 'next/router'
import { client } from '../../lib/client'
// import { getStaticPaths, getServerSideProps } from 'next'


// Components
import BlogSideBar from '../../components/BlogSideBar'
import BlogArticleCard from '../../components/BlogArticleCard'


// export async function getStaticPaths() {
//     const posts = await client.fetch(`*[_type == "post"]`)
//     const paths = posts.map(post => ({
//         params: { id: post._id },
//     }))

//     return {
//         paths,
//         fallback: false,
//     }
// }

export async function getServerSideProps({ params }) {
    const postId = params.id;
    const selectedPost = await client.fetch(`*[_id == "${postId}"]`)
    const posts = await client.fetch(`*[_type == "post"]`)
    const res = await fetch('https://fakestoreapi.com/products/categories/')
    const categories = await res.json()
    
    return {
        props: { 
            selectedPost,
            posts,
            categories
        }
    }
}

const blogPost = ({selectedPost, posts, categories}) => {
    
    // const { selectedPost, posts, categories } = props;
    

  return (
   <>
        <div className='flex w-full justify-center'>
        <div className='w-[72rem] flex flex-col-reverse md:flex-row'>
            <BlogSideBar posts={posts} categories={categories}/>
            <BlogArticleCard post={selectedPost[0]}/>
        </div>

        </div>
   </>
  )
}

export default blogPost


// export const getStaticPaths = async () => {
//     const posts = await client.fetch(`*[_type == "post"]`)

//     const paths = posts.map(post => {
//         return {
//             params: { id: post._id.toString() }
//         }
//     })

//     return {
//         paths,
//         fallback: false
//     }
// }

// export const getStaticProps = async (context) => {
//     const id = context.params.id
// }