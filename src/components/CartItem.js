import { useState, useEffect, useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan} from "@fortawesome/free-solid-svg-icons";

export default function CartItem({ item }){
    const { cart, setCart } = useContext(CartContext);

    const [count, setCount] = useState(item.count);

    const updateCart = (newCount) => {
        setCount(newCount);
        cart.map((cartItem) => {
            if(cartItem.id == item.id){
                cartItem.count = newCount;
            }
        })
    };

    const removeFromCart = () => {
        let newCart = []
        cart.map((cartItem) => {
            if(cartItem.id != item.id){
                newCart.push(cartItem);
            }
        })
        setCart(newCart);
    };

    return (
        <div className="cart-item">
            <div className="cart-image-wrapper">
                <img className="cart-image" src={item.image} />
            </div>
            <div className="cart-title">{item.title}</div>
            <div className="cart-filler"></div>
            <div className="cart-price">${item.price}</div>
            <input type="number" className="cart-count" value={count} min="1" onChange={(e) => updateCart(parseInt(e.target.value))}/>
            <FontAwesomeIcon icon={faTrashCan} size="lg" className="cart-remove" onClick={removeFromCart} />
        </div>
    )
}