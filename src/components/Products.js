import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Products(){
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        async function handleFetch(){
            const url = "https://fakestoreapi.com/products/";
            const response = await fetch(url);
            const data = await response.json();
            setProducts(data);
            setIsLoading(false);
        }
        handleFetch();
    }, []);

    if(isLoading){
        return (
            <div className="loading-spinner-wrapper">
                <FontAwesomeIcon icon={faSpinner} size="3x" className="fa-pulse"/>
            </div>
        );
    } else {
        if(products) return (
            <>
                {products.map((product) => (
                    <ProductCard product={product} />
                ))}
            </>
        );
    }
}