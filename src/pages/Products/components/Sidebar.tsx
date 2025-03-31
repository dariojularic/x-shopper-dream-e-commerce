import "./Sidebar.css"

function Sidebar() {
  return (
    <aside>
      <input type="text" placeholder="Search" className="product-search-input"/>
      <h3>Category</h3>
      <ul className="category-list">
        <li>All</li>
        <li>Living Room</li>
        <li>Bedroom</li>
        <li>Office</li>
        <li>Kids</li>
        <li>Dining</li>
        <li>Kitchen</li>
      </ul>

      <h3>Manufacturer</h3>
      <select className="manufacturer-select">
        <option value="">Liddy</option>
        <option value="">Marcos</option>
        <option value="">Caresa</option>
        <option value="">Ikea</option>
      </select>

      <h3>Color</h3>
      <ul className="color-list">
        <li className="color-black"></li>
        <li className="color-green"></li>
        <li className="color-yellow"></li>
        <li className="color-blue"></li>
        <li className="color-red"></li>
      </ul>

      <h3>Price</h3>
      <span></span>
      <input type="range" className="range-input" />

      <div className="sidebar-checkbox-container">
        <h3>Free Shipping</h3>
        <input type="checkbox" />
      </div>

      <button className="clear-filters-btn">Clear filters</button>

    </aside>
  )
}

export default Sidebar;
