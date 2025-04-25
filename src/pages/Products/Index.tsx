import "./Index.css";
import Sidebar from "./components/Sidebar";

function Products() {
  return (
    <section className="section products-section">
      <div className="container products-container">
        <h1>Products</h1>
        <Sidebar />

        <div className="">
          <div className="product-filter-div">
            <p className="products-found-paragraph">products found</p>
            <div className="break-line-container">
              <hr className="break-line" />
            </div>
            <div className="sort-by-container">
              <label className="sort-by-label" htmlFor="sort">Sort by:</label>
              <select className="sort-by-select" name="sort" id="sort">
                <option value="">Price (Lowest)</option>
                <option value="">Price (Highest)</option>
                <option value="">Name (A-Z)</option>
                <option value="">Name (Z-A)</option>
              </select>
            </div>
          </div>

          <div className="products-grid">
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
