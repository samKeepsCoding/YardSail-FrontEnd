import React from 'react'
import { useState } from 'react'

const ShoppingCartSideBar = () => {

    const [cart, setCart] = useState([])

  return (
    <>
        <div>
            <h2>SHOPPING CART</h2>
            <ul>
                {cart.map(item => (
                    <li>
                        {item.title} - {item.price}
                    </li>
                ))}
            </ul>
            <p>Total: {cart.reduce((total, item) => total + item.price)}</p>
        </div>
    </>
  )
}

export default ShoppingCartSideBar