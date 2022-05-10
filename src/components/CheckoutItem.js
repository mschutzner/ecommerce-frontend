import { useState, useEffect, useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export default function CheckoutItem({ item, updateSubtotal }){
    const [count, setCount] = useState(item.count);

    return (
        <div className="checkout-item">
            <div className="checkout-item-title">{item.title}</div>
            <div className="checkout-item-filler"></div>
            <div className="checkout-item-count">{item.count}</div>
            <div className="checkout-item-price">${item.price*item.count}</div>
        </div>
    )
}