import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import CartItem from "./CartItem";

export default function Cart(){
    const { cart, setCart } = useContext(CartContext);
    
    const [subtotal, setSubtotal] = useState(0);
    
    const updateSubtotal = () => {
        let curSubtotal = 0;
        cart.map((item) => {
            curSubtotal += item.price * item.count;
        })
        setSubtotal(curSubtotal);
    };

    useEffect(() => {
        updateSubtotal();
    }, []);

    if(cart.length == 0){
        return (
            <div className="cart-wrapper">
                <h1 className="cart-header">Cart</h1>
                <div className="cart-empty-text">
                    You have no items in your cart.
                </div>
            </div>
        );
    } else {
        return (
            <div className="cart-wrapper">
                <h1 className="cart-header">Cart</h1>
                {cart.map((item) => (
                    <CartItem item={item} updateSubtotal={updateSubtotal}/>
                ))}
                <div className="cart-bottom">
                    <div className="cart-bottom-filler"></div>
                    <div className="cart-subtotal">Subtotal: ${subtotal}</div>
                    <Link to="/checkout" className="cart-checkout-button">CHECKOUT</Link>
                </div>
            </div>
        );
    }
}