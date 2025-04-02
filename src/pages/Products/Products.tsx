import "./Products.css"
import Sidebar from "./components/Sidebar";

function Products() {
  return (
    <div>
      <h1>Products</h1>
      <Sidebar />

      <div className="products-container">
        <p>products found</p>
        <hr />
        <div>
          <label htmlFor="sort">Sort by:</label>
          <select name="sort" id="sort">
            <option value="">Price (Lowest)</option>
            <option value="">Price (Highest)</option>
            <option value="">Name (A-Z)</option>
            <option value="">Name (Z-A)</option>
          </select>
        </div>

        <div className="products-grid">
          
        </div>
      </div>
    </div>
  )
}

export default Products;
