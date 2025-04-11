import "./ProductCard.css"
import { ProductCardProps } from "../types/types";

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="product-card-container">
      <img src={product.image} alt={product.name} />
      <div className="product-name-price-container">
        <p className="product-name">{product.name}</p>
        <span className="product-price">{product.price}</span>
      </div>
    </div>
  )
}

export default ProductCard;
