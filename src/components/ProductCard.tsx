import "./ProductCard.css"
import { ProductCardProps } from "../types/types";

function ProductCard({id, image, name, price, description}: ProductCardProps) {
  return (
    <div className="product-card-container">
      <img src={image} alt={name} />
      <div className="product-name-price-container">
        <p className="product-name">{name}</p>
        <span className="product-price">{price}</span>
      </div>
    </div>
  )
}

export default ProductCard;
