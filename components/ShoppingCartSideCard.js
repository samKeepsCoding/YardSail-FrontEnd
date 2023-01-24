import React from 'react';
import Image from 'next/image';

// Redux Imports
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../lib/Redux/cart.slice';

// Icon Imports
import { BsTrash } from 'react-icons/bs';

const ShoppingCartSideCard = ({item}) => {

    const dispatch = useDispatch();

  return (
    <>
        <div className='w-full flex flex-row xl:flex-col justify-start xl:justify-center items-center text-start text-sm space-x-3'>
            <Image
                src={item.image}
                width={70}
                height={50}
                alt={'Item Image'}
            />
            <div className='flex flex-col items-start xl:items-center justify-start space-y-3'>
                <p>{item.title}</p>
                <p>{item.price} x <span>{item.quantity}</span></p>
                <button onClick={() => dispatch(removeFromCart(item))}>
                    <BsTrash size={20}/>
                </button>
            </div>
        </div>
    </>
  )
}

export default ShoppingCartSideCard