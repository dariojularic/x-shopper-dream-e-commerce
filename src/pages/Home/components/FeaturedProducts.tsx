import { useEffect, useState } from "react";
import ProductCard from "../../Products/components/ProductCard";
import  "./FeaturedProducts.css"
import Button from "../../../components/Button";
// import { Product, ProductCardProps } from "../../../types/types";
import { useNavigate } from "react-router-dom";
// type pisem u komponentu

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

function FeaturedProducts() {
  const navigate = useNavigate();

  const [products, setProducts] = useState<Product[]>([]);

  const url = "https://www.course-api.com/react-store-products";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Product[] = await response.json();
        console.log(data.slice(1, 4));
        setProducts(data.slice(1, 4));
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);
  return (
    <section className="section featured-products-section">
      <div className="container">
        <div className="featured-headings-container">
          <h3 className="section-heading-intro">FEATURED PRODUCTS</h3>
          <h2 className="section-subheading">
            The art of modern living unlocked.
          </h2>
        </div>

        <div className="featured-products-container">
          <ul className="featured-products-list">
            {products.map((product) => (
              // console.log(products)
              <li key={product.id}>
                <ProductCard {...product} />
              </li>
            ))}
          </ul>
          <Button
            value="All Products"
            type="action1"
            handleClick={() => {
              navigate("/products");
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
