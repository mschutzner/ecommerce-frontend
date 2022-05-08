export default function ProductCard({product}){
    return (
        <div className="product-card-wrapper">
            <img className="product-card-image" src={product.image} />
            <div className="product-card-title">{product.title}</div>
            <div className="products-card-filler"></div>
            <div className="products-card-price">${product.price}</div>
        </div>
    )
}