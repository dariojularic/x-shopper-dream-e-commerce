import "./Index.css"
import Sidebar from "./components/Sidebar";

function Products() {
  return (
    <div>
      <h1>Products</h1>
      <Sidebar />

      <div className="products-container">
        <div className="product-filter-div">
          <p>products found</p>
          {/* <div> */}
            <hr />
          {/* </div> */}
          <div>
            <label htmlFor="sort">Sort by:</label>
            <select name="sort" id="sort">
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
  )
}

export default Products;
