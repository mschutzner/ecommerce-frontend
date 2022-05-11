import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

export default function Search(){
    let params = useParams();

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        async function handleFetch(){
            const url = "https://fakestoreapi.com/products/";
            const response = await fetch(url);
            const data = await response.json();
            const filteredData = data.filter((item) => {
                const filterTitle = item.title.toLowerCase().includes(params.search.toLowerCase());
                const filterCategory = item.category.toLowerCase() === params.search.toLowerCase();
                return (filterTitle || filterCategory);
            });
            setProducts(filteredData);
            setIsLoading(false);
        }
        handleFetch();
    }, [params.search]);
    
    if(isLoading){
        return (
            <div className="loading-spinner-wrapper">
                <FontAwesomeIcon icon={faSpinner} size="3x" className="fa-pulse"/>
            </div>
        );
    } else {
        if(products.length === 0) {
            return (
                <p className="search-no-products">No products found.</p>
            );
        } else {
            return (
                <>
                    {products.map((product) => (
                        <ProductCard product={product} />
                    ))}
                </>
            );
        }
    }
}