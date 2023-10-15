import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

const Cart = () => { 

  const {cart} = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

   useEffect(() => {
    setTotalAmount(
      cart.reduce((acc, curr) => acc + (Number(curr.price) || 0), 0).toFixed(2)
    );
  }, [cart]);
  
  return (
    <div> 
      { 
         cart.length > 0 ?
         (<div className='flex flex-col  items-center justify-between m-auto p-5'>
            <div className='m-auto w-[90%] border-[3px] border-gray-200'>
               {
                cart.map( (item, index) => {
                  return <CartItem key={item.id} item={item} itemIndex={index} />
                })
               }
            </div>
           <div className='flex flex-col w-[90%] p-5 border-[3px] text-center border-gray-200'>
            <div className='mb-28 p-5'>
                <div className='text-xl text-blue-700 font-medium'>Your Cart</div>
                <div className='text-4xl text-blue-700 font-semibold '>Summary</div>
                <p className='font-medium'>
                  <span>Total Items: {cart.length}</span>
                </p>
              </div>

              <div className='w-full'>
                <p>Total Amount: <b className='text-blue-700 pl-4 font-bold'>${totalAmount}</b></p>
                <Link to="/Checkout">
                <button className='bg-blue-700 border-2 border-blue-700 rounded-2xl font-semibold text-sm text-white w-[30%] p-2 mt-5 hover:bg-blue-800'>
                  Pay Now</button>
                </Link>
              </div>
           </div>
         </div>):
         (<div className='text-center items-center my-52'> 
          <h1 className='font-semibold text-3xl font-chakra-petch m-7'>Wishlist Empty</h1>
          <Link to="/Shop">
              <button 
              className='bg-blue-700 border-2 border-blue-700 rounded-lg text-md text-white py-2 px-2 font-chakra-petch font-extralight hover:bg-blue-800'>
                Shop Now
              </button>
          </Link>
        </div>)
      }
    </div>
  )
}

export default Cart;