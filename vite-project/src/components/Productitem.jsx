import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import { Header } from './Header';


export const Productitem = ({id,image,name,price}) => { 
    const {currency} = useContext(ShopContext);
  return (
    <>
   {/* <Header />  */}
   <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
    <div className='overflow-hidden '>
        <img src={image[0]} className='hover:scale-110 transition ease-in-out' alt="" srcset="" />
    </div>
   <p className='text-sm pt-3 pb-1'>{name}</p>
   <p className='text-sm font-medium'>{currency}{price}</p>
   </Link>
    </>
  )
}
