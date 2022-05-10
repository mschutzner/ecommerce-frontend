import { useState, useEffect, useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan} from "@fortawesome/free-solid-svg-icons";

export default function CartItem({ item, updateSubtotal }){
    const { cart, setCart } = useContext(CartContext);

    const [count, setCount] = useState(item.count);

    const updateCount = (newCount) => {
        setCount(newCount);
        cart.map((cartItem) => {
            if(cartItem.id == item.id){
                cartItem.count = newCount;
            }
        })
        setCart(cart);
        updateSubtotal();
    };

    const removeFromCart = () => {
        setCart(cart.filter((cartItem) => cartItem.id !== item.id));
    };

    return (
        <div className="cart-item">
            <div className="cart-image-wrapper">
                <img className="cart-item-image" src={item.image} />
            </div>
            <div className="cart-item-title">{item.title}</div>
            <div className="cart-item-filler"></div>
            <div className="cart-item-price">${item.price*item.count}</div>
            <input type="number" className="cart-item-count" value={count} min="1" onChange={(e) => updateCount(parseInt(e.target.value))}/>
            <FontAwesomeIcon icon={faTrashCan} size="lg" className="cart-item-remove" onClick={removeFromCart} />
        </div>
    )
}