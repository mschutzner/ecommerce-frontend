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
        navigate("/success");
      }

    if(cart.length == 0){
        return (
            <div className="cart-wrapper">
                <h1>Checkout</h1>
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
                <form onSubmit={handleSubmit}>
                    <div clasName="checkout-form-text-wrapper">
                        <label clasName="checkout-form-label">Name:</label><input type="text" clasName="checkout-form-name"/>
                    </div>
                    <div clasName="checkout-form-text-wrapper">
                        <label clasName="checkout-form-label">Shipping Address:</label><input type="text" clasName="checkout-form-shipping"/>
                    </div>
                    <div clasName="checkout-form-text-wrapper">
                        <label clasName="checkout-form-label">Billing Address:</label><input type="text" clasName="checkout-form-billing" />
                    </div>
                    <div clasName="checkout-form-text-wrapper">
                      <label clasName="checkout-form-label">Card Number:</label><input type="text" clasName="checkout-form-card" />
                    </div>
                    <div clasName="checkout-form-number-wrapper">
                        <label clasName="checkout-form-label">Experation Month:</label><input type="number" clasName="checkout-form-month" />
                        <label clasName="checkout-form-label">Experation Year:</label><input type="number" clasName="checkout-form-year" />
                        <label clasName="checkout-form-label">Pin</label><input type="text" /><input type="text" clasName="checkout-form-pin" />
                    </div>
                </form>
            </div>
        );
    }
}