import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router";
import { assets } from "../assets/assets";

export const Product = () => {
  const { products, currency , addToCart } = useContext(ShopContext);
  const { productId } = useParams();
  // console.log(productId);
  const [productData, setproductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setsize] = useState("");

  useEffect(() => {
    products.map((item) => {
      if (item._id === productId) {
        // console.log("hi");
        // console.log(item.image);
        setproductData(item);
        setImage(item.image[0]);
      }
    });
  }, [productId]);

  // const productimg = productData.image ;

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* ---------productdata------------ */}
      <div className="flex  gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* ----------product image--------------- */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((curImg, index) => (
              <img
                onClick={() => setImage(curImg)}
                alt=""
                src={curImg}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" srcset="" />
          </div>
        </div>
        
        {/* -----------product info--------------- */}
        <div className="flex-1">
          <p className="font-medium text-2xl">{productData.name}</p>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} className="w-3 " alt="" />
            <img src={assets.star_icon} className="w-3 " alt="" />
            <img src={assets.star_icon} className="w-3 " alt="" />
            <img src={assets.star_icon} className="w-3 " alt="" />
            <img src={assets.star_dull_icon} className="w-3 " alt="" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select size</p>
            <div className="flex gap-2">
              {productData.sizes.map((curSize, index) => (
                <button
                  onClick={() => setsize(curSize)}
                  className={`border-2 py-2 px-4 bg-gray-100 ${
                    curSize === size ? "border-orange-500" : ""
                  }`}
                  key={index}
                >
                  {curSize}
                </button>
              ))}
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id,size)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">ADD TO CART</button>
          <hr className='mt-8 sm-w-4/5' />
        <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
               <p>100% Original product</p>
               <p>Cash on delivery is available on this product</p>
               <p>Easy return and exchange policy within 7 days</p>
        </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="flex">
          <p className="border border-black px-5 py-5 mr-2  text-sm">Description</p>
          <p className='border border-black px-5 py-5 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
                <p>An e-commerce website is an online platform that facilitates the buying and selling service of products or services over the internet.Most of us have shopped online for something at some point, which means we've taken part in e-commerce. So it goes without saying that e-commerce is everywhere.</p>
                <p>An effective e-commerce product description serves as a compelling narrative that highlights the unique features and benefits of a product, addressing potential customers' needs and desires. By clearly articulating what the product is, who it's for, and how it can enhance the buyer's life, a well-crafted description not only informs but also persuades, ultimately driving sales and fostering customer trust.  </p>
               </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};
