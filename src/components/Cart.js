import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import CartItem from "./CartItem";

export default function Cart(){
    const { cart, setCart } = useContext(CartContext);
    
    if(cart.length == 0){
        return (
            <div className="cart-wrapper">
                You have no items in your cart.
            </div>
        );
    } else {
        return (
            <div className="cart-wrapper">
                {cart.map((item) => (
                    <CartItem item={item} />
                ))}
                <div className="cart-bottom">
                    <div className="cart-bottom-filler"></div>
                    <Link to="/checkout" className="cart-checkout-button">CHECKOUT</Link>
                </div>
            </div>
        );
    }
}