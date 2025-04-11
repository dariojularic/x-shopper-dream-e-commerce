import { useEffect, useState } from "react";
import ProductCard from "../../Products/components/ProductCard";
import { Product, ProductCardProps } from "../../../types/types";

function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  const url = "https://www.course-api.com/react-store-products";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        // setProducts(data)
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
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <ProductCard {...product} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
