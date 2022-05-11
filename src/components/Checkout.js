import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import CheckoutItem from "./CheckoutItem";
import { useNavigate  } from "react-router-dom";

export default function Checkout(){
    let navigate = useNavigate();

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

    function handleSubmit(e) {
        e.preventDefault();
        setCart([]);
        navigate("/success");
      }

    if(cart.length == 0){
        return (
            <div className="cart-wrapper">
                <h1 className="checkout-header">Checkout</h1>
                <div className="cart-empty-text">
                    You have no items in your cart.
                </div>
            </div>
        );
    } else {
        return (
            <div className="checkout-wrapper">
                <h1 className="checkout-header">Checkout</h1>
                {cart.map((item) => (
                    <CheckoutItem item={item} />
                ))}
                <div className="checkout-bottom">
                    <div className="checkout-bottom-filler"></div>
                    <div className="checkout-subtotal">Subtotal: ${subtotal}</div>
                </div>
                <form onSubmit={handleSubmit} className="checkout-form">
                    <div className="checkout-form-text-wrapper">
                        <label className="checkout-form-label-text">Name:</label><input type="text" className="checkout-form-text-input"/>
                    </div>
                    <div className="checkout-form-text-wrapper">
                        <label className="checkout-form-label-text">Shipping Address:</label><input type="text" className="checkout-form-text-input"/>
                    </div>
                    <div className="checkout-form-text-wrapper">
                        <label className="checkout-form-label-text">Billing Address:</label><input type="text" className="checkout-form-text-input" />
                    </div>
                    <div className="checkout-form-text-wrapper">
                      <label className="checkout-form-label-text">Card Number:</label><input type="text" className="checkout-form-text-input" />
                    </div>
                    <div className="checkout-form-number-wrapper">
                        <label className="checkout-form-label-number expiration-month-label">Exp Month:</label><input type="number" min="1" max="12" className="checkout-form-number-input" />
                        <label className="checkout-form-label-number">Exp Year:</label><input type="number" className="checkout-form-number-input" />
                        <label className="checkout-form-label-number">Pin</label><input type="text" className="checkout-form-number-input" />
                    </div>
                    <div className="checkout-form-button-wrapper" >
                        <div className="checkout-form-button-filler"></div>
                        <button type="submit" className="checkout-form-button">CHECKOUT</button>
                    </div>
                </form>
            </div>
        );
    }
}