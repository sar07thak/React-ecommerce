import { createContext } from "react";
import { assets, products } from "../assets/assets";

export const ShopContext = createContext() ;

export const ShopContextProvider = (props) => {

    const currency = '$';
    const delivery_fee = 10 ;

    const value ={
        products,
        currency,
        delivery_fee    
    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}