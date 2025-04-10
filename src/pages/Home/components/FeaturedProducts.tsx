import { useEffect, useState } from "react";

function FeaturedProducts() {
  const [products, setProducts] = useState([]);

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
      <div className="container featured-products-container">
        <h3 className="section-heading-intro">FEATURED PRODUCTS</h3>
        <h2 className="section-subheading">
          The art of modern living unlocked.
        </h2>
      </div>
    </section>
  );
}

export default FeaturedProducts;
