import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import { Productitem } from './Productitem';


export const BestSeller = () => {
    const {products} = useContext(ShopContext);
    const [bestSeller,setBestSeller] = useState([]);

    useEffect(() => {
        const bestProduct = products.filter((curItem) => curItem.bestseller === true);
        setBestSeller(bestProduct.slice(0, 10));
    },[])

  return (
    <div className='my-10 rounded-3xl shadow-[#414141] shadow-2xl '>
        <div className="text-center rounded-3xl py-8 text-3xl">
            <Title text1={'BEST'} text2={'SELLER'} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sit, eius eveniet enim voluptas, quisquam obcaecati officia amet eaque a illo nesciunt omnis totam provident! Perspiciatis quas soluta perferendis illo.</p>
            <div className='p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    bestSeller.map((curItem,index) => {
                        return <Productitem key={index} id={curItem._id} image={curItem.image} name={curItem.name} price={curItem.price} />
                    })
                }
            </div>
        </div>
    </div>
  )
}
