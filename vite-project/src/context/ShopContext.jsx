import { createContext, useEffect, useState } from "react";
import { assets, products } from "../assets/assets";

export const ShopContext = createContext() ;

export const ShopContextProvider = (props) => {

    const currency = '$';
    const delivery_fee = 10 ;
    const [cartItems ,setCartItems] = useState({});
    const addToCart = async(itemId,size) => {
        let cartdata = structuredClone(cartItems);

        if (cartdata[itemId]) {
            if (cartdata[itemId][size]) {
                cartdata[itemId][size] += 1 ;
            }
            else{
                cartdata[itemId][size] = 1 ;
            }  
        }else{
            cartdata[itemId] = {};
            cartdata[itemId][size] = 1 ;
        }
        setCartItems[cartdata]
    }
    const value ={
        products,
        currency,
        delivery_fee ,
        cartItems ,
        addToCart   
    }

    useEffect(()=>{
        console.log(cartItems);
    },[])
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}