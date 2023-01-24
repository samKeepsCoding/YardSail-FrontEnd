import React from "react";
import Image from "next/image";
import Link from "next/link";

// Redux
import {useSelector, useDispatch } from 'react-redux'
import { 
    incrementQuantity,
    decrementQuantity,
    removeFromCart 

} from '../lib/Redux/cart.slice'

// Icon Imports
import { BsTrash } from 'react-icons/bs'


const ShoppingCartCard = ({item}) => {

    const dispatch = useDispatch()
    const itemTotal = Number(item.price) * Number(item.quantity)

  return (
    <>
      <div className="w-full flex flex-col md:flex-row justify-center md:justify-between space-y-7 md:space-x-20 items-center md:items-start text-[#666666] p-4 bg-[#F5F5F5] rounded-sm">
        <Image
          src={item.image}
          width={100}
          height={100}
          className="rounded-md"
        />
        <div className="flex flex-col text-center md:text-start ml-6 max-w-sm">
          <p className="font-medium">{item.title}</p>
          <p className="font-bold">${item.price}</p>
        </div>
        <div className="flex flex-col justify-start items-center ">
          <p className="">QTY:</p>

          <input
            type="text"
            className="border rounded-sm text-center w-8 py-1"
            value={item.quantity}
          />

          <div className="flex flex-row space-x-3">
            <button type="button" onClick={() => dispatch(incrementQuantity(item.id))}>
              +
            </button>
            <button type="button" onClick={() => dispatch(decrementQuantity(item.id))}>
              -
            </button>
          </div>
        </div>
        <div className="flex flex-col text-center ">
          <p>Total:</p>
          <p>${itemTotal}</p>
        </div>
        <button onClick={() => dispatch(removeFromCart(item))}>
          <BsTrash size={20} className="mt-4" />
        </button>
      </div>

    </>
  );
};

export default ShoppingCartCard;
