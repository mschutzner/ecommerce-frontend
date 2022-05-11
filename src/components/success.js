import { useState, useEffect, useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export default function Success(){  
    const { cart, setCart } = useContext(CartContext);
    
    useEffect(() => {
        setCart([]);
    }, []);

    return (
        <div className="success-wrapper">
            <h1 className="success-header">Payment Successful!</h1>
            <p className="success-text">
                Thank you for your purchase!
            </p>
        </div>
    )
}