import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import { Productitem } from "./Productitem";
import { products } from "../assets/assets";
// import { products } from "../assets/assets";

export const LatestCollection = () => {
  const { products }  = useContext(ShopContext);
  const [latestCollection, setLatestCollection] = useState([]);

  useEffect(() => {
    setLatestCollection(products.slice(0, 12));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={'LATEST'} text2={'COLLECTION'} />
        <p className="W-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum tempore in voluptatibus ex autem illum dolorem numquam dicta magnam nemo! Nisi expedita ipsam neque quaerat, dolores officiis repellat enim unde.
        </p>
    </div>
    {/* render product item */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {
            latestCollection.map((curItem,index) => {
                return <Productitem key={index} id={curItem._id} image={curItem.image} name={curItem.name} price={curItem.price} />
            })
        }
    </div>
  </div>);
};
