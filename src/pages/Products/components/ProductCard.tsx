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

function capitalizeFirstLetter(str: string): string {
  if (!str) {
    return str; // Return empty string or null if input is empty or null
  }
  // return str.charAt(0).toUpperCase() + str.slice(1);

  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function ProductCard(product: Product) {
  return (
    <div className="product-card-container">
      <img
        className="product-card-image"
        src={product.image}
        alt={product.name}
      />
      <div className="product-name-price-container">
        <p className="product-name">{capitalizeFirstLetter(product.name)}</p>
        <span className="product-price">{product.price} €</span>
      </div>
    </div>
  );
}

export default ProductCard;
