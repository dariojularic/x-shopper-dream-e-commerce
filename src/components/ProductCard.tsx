import "./ProductCard.css";
// import { ProductCardProps } from "../types/types";

export type Product = {
  category: string;
  colors: string[];
  company: string;
  description: string;
  id: string;
  image: string;
  name: string;
  price: number;
  shipping: boolean;
};

type ProductProps = {
  product: Product;
};

function ProductCard({ product }: ProductProps) {
  return (
    <div className="product-card-container">
      <img src={product.image} alt={product.name} />
      <div className="product-name-price-container">
        <p className="product-name">{product.name}</p>
        <span className="product-price">{product.price}</span>
      </div>
    </div>
  );
}

export default ProductCard;
