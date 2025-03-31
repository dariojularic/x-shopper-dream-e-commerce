import "./Sidebar.css"

function Sidebar() {
  return (
    <aside>
      <input type="text" placeholder="Search" />
      <h3>Category</h3>
      <ul>
        <li>All</li>
        <li>Living Room</li>
        <li>Bedroom</li>
        <li>Office</li>
        <li>Kids</li>
        <li>Dining</li>
        <li>Kitchen</li>
      </ul>

      <h3>Manufacturer</h3>
      <select>
        <option value="">Liddy</option>
        <option value="">Marcos</option>
        <option value="">Caresa</option>
        <option value="">Ikea</option>
      </select>

      <h3>Color</h3>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <h3>Price</h3>
      <div>
        <span></span>
        <input type="range" />
      </div>

      <div>
        <h3>Free Shipping</h3>
        <input type="checkbox" />
      </div>

      <button>Clear filters</button>

    </aside>
  )
}

export default Sidebar;
