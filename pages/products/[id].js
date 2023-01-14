import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../lib/Redux/cart.slice";

// Components
import ProductDescription from "../../components/ProductDescription";
import ProductDetail from "../../components/ProductDetail";
import ReviewForm from "../../components/ReviewForm";
import  CategorySection from "../../components/CategorySection";

// Icons
import { AiFillShopping, AiFillHeart, AiOutlineShareAlt, AiFillPrinter, AiFillStar, AiOutlineExpandAlt } from 'react-icons/ai'
import { RiFileEditLine } from 'react-icons/ri'
import ZoomImage from "../../components/ZoomImage";




export const getStaticPaths = async () => {
    const res = await fetch('https://fakestoreapi.com/products/');
    const data = await res.json();
  
    // map data to an array of path objects with params (id)
    const paths = data.map(product => {
      return {
        params: { id: product.id.toString() }
      }
    })
  
    return {
      paths,
      fallback: false
    }
  }
  
  export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://fakestoreapi.com/products/' + id);
    const data = await res.json();
  
    return {
      props: { product: data }
    }
  }
  
  const Details = ({ product }) => {

    const [mainPic, setMainPic] = useState(product.image)
    const [qty, setQty] = useState(1)
    const [toggle, setToggle] = useState('description')
    const [showReviewForm, setShowReviewForm] = useState(false)
    const [showZoomImage, setShowZoomImage] = useState(false)

    const dispatch = useDispatch();


    const increaseQty = () => {
        setQty(qty + 1)
    }

    const decreaseQty = () => {
        if (qty != 0) {
            setQty(qty - 1)
        }
    }

    return (
     <>
        <div className="flex justify-center">
            
            <div className="flex flex-col md:flex-row justify-center items-start max-w-5xl mt-4 " > 
                <div className="relative flex flex-col justify-center mb-8 md:mb-0 items-center  md:mr-4 border rounded-md w-full md:w-1/2">
                        <Image
                            src={product.image}
                            width={300}
                            height={600}
                            className='mt-4 rounded-sm'
                        />
                        <button type="button" onClick={() => setShowZoomImage(true)}>
                            <AiOutlineExpandAlt className="absolute bottom-3 right-3 cursor-pointer" size={30} />
                        </button>
                </div>

                

                <div className="md:w-1/2 text-center md:text-start flex flex-col justify-center md:justify-start items-start px-5 text-[#666666]">
                    <h1 className="text-center md:text-start font-bold text-2xl text-[#444444]">{product.title}</h1>
                    <h2 className="font-bold text-2xl text-[#343434] mt-8">${product.price}</h2>
                    <p className="mt-3 text-[#666666] text-xs">- {product.description}</p>
                    <p className="text-[#666666] text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

                    <div className="border-dashed w-full border-t-[2px] mt-6"></div>

                    <div className="flex flex-row justify-start items-center mt-5 space-x-3">
                        <p className="">QTY:</p>

                        <input 
                            type='text'
                            className="border rounded-sm text-center w-11 py-2"
                            value={qty}
                        />

                        <div className="flex flex-col">
                            <button type="button" onClick={increaseQty}>+</button>
                            <button type="button" onClick={decreaseQty}>-</button>
                        </div>
                        <button 
                            type="submit" 
                            className="rounded-full py-3 px-4 bg-[#c4c3c3] text-white flex flex-row items-center  hover:bg-[#878787] duration-100 ease-in-out cursor-not-allowed"
                            onClick={() => dispatch(addToCart(product))}
                        > 
                            <AiFillShopping size={22}/>
                            <p className="ml-2">ADD TO CART</p>
                        </button>

                        <button className="rounded-full p-4 bg-[#c4c3c3] hover:bg-[#878787]">
                            <AiFillHeart size={15} className='fill-white '/>
                        </button>
                    </div>

                    <div className="border-dashed w-full border-t-[2px] mt-7"></div>

                    <div className="flex flex-row mt-5">
                        <button className="flex flex-row items-center justify-center ring-0">
                            <AiOutlineShareAlt size={14} className='fill-[#444444]'/>
                            <p className="text-[10px] ml-1 font-semibold">SHARE</p>
                        </button>
                        <button className="flex flex-row items-center justify-center ml-7 ring-0" onClick={() => window.print()}>
                            <AiFillPrinter size={14} className='fill-[#444444]'/>
                            <p className="text-[10px] ml-1 font-semibold" >PRINT</p>
                        </button>
                    </div>

                    <div className="border-dashed w-full border-t-[2px] mt-5"></div>

                    <div className="flex flex-row items-center text-xs mt-5 text-[10px] font-semibold ">
                        <p>REVIEW: </p>
                        <p className="ml-2">{product.rating.rate}</p>
                        <AiFillStar className= "fill-yellow-500 ml-1" />
                        <p>'s</p>
                        <button type="button" className="items-center flex flex-row ml-6" onClick={() => setShowReviewForm(true)}>
                            <RiFileEditLine/>
                            <p className="ml-1">WRITE YOUR REVIEW</p>
                        </button>
                    </div>

                    <div className="border-dashed w-full border-t-[2px] mt-5"></div>

                    <div className="text-[10px] font-semibold flex flex-col mt-5">
                        <p>SKU: DEMO_{product.id}</p>
                        <p className="mt-6 text-black">CATEGORIES: {product.category.toUpperCase()}</p>
                    </div>

                </div>
            </div>

        </div>

        {showZoomImage ? (
            <ZoomImage product={product} handleZoomImage={value => setShowZoomImage(value)}/>
        ): null}
        
        {showReviewForm ? (
            <ReviewForm product={product} handleReviewForm={value => setShowReviewForm(value)}/> 
            ): null}
        <CategorySection product={product}/>
    </>

    );
  }
  
  export default Details;