import React,{useState} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { result, slice } from 'lodash'
import { motion } from 'framer-motion'
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

// Components
import Header from '../components/Header'
import Card from '../components/Card'

export const getStaticProps = async (context) => {

  const res = await fetch('https://fakestoreapi.com/products/');
  const data = await res.json()

  const results = await fetch('https://fakestoreapi.com/products/categories/');
  const categories = await results.json();

  return {
    props: { 
      products: data,
      categories,
      firstTen : data.slice(0,8)
     }
  }
}


const Home = ({ products, categories, firstTen }) => {
  
  
  const [index, setIndex] = useState(12)
  const [isCompleted, setIsCompleted] = useState(false)
  const initialProducts = slice(products , 0, index)

  const loadMore = () => {
    setIndex(index + 12)
    console.log(index)
    if (index >= products.length) {
      setIsCompleted(true)
    } else {
      setIsCompleted(false)
    }

  }

  return (


    <>
    <Header/>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    <div className='w-full flex flex-col justify-center items-center font-Poppins text-black mt-8 px-4 '>
        <div className='text-center flex flex-col justify-center items-center mt-6 max-w-7xl'>
            <h3 className='text-xs font-medium text-[#bbb]'>DISCOVER OUR NEW PRODUCTS</h3>
            <h2 className='text-3xl font-bold'>NEW ARRIVALS</h2>

            <div className='flex flex-row justify-center items-center flex-wrap space-x-4  mt-3'>

                <button className='p-0  cursor-pointer text-sm font-thin hover:font-normal mt-1 max-w-xl'>All Products</button>

                {categories.map((category) => {
                      return (
                      <>
                        <Link href={`/products/category/${category}`}>
                          <button className='p-0 border-0 cursor-pointer text-sm font-thin hover:font-normal mt-1' >{category.charAt(0).toUpperCase() + category.slice(1)}</button>
                        </Link>
                      </>
                      )
                  })}
            </div>
            <div className='flex flex-row justify-center flex-wrap w-4xl mt-8'>
              {initialProducts && initialProducts.map(item => (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -100
                  }}
                  animate={{
                    opacity: 1,
                    y: 0
                  }}
                  transition={{
                    duration: .5
                  }}
                >
                  <Card item={item} key={item.id}/>
                </motion.div>
                
              ))}
            </div>
            {isCompleted ? (
              null
            ) : (

              <button 
                className='p-2 text-center'
                onClick={loadMore} 
              >
                Load More
              </button>
            )}
        </div>
    </div>
</>
  )
}

export default Home
