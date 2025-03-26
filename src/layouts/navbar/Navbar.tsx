import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [activePage, setActivePage] = useState<string>("Home")

  function handleClick(page: string) {
    setActivePage(page)
  }

  return (
    <header>
      <nav>
        <div className="logo-container">
          <Link className="navbar-link" to="/">
            {/* <svg></svg> */}
            <img className="bag-icon" src="src/assets/bag.svg" alt="" />
            <p>X Shoppers Dream</p>
          </Link>
        </div>

        <div className="link-container">
          <Link className="navbar-link" to="/">
            <p className={activePage === "Home" ? "active" : ""} onClick={() => handleClick("Home")}>Home</p>
          </Link>
          <Link className="navbar-link" to="/products">
            <p className={activePage === "Products" ? "active" : ""} onClick={() => handleClick("Products")}>Products</p>
          </Link>
        </div>

        <div className="cart-navbar-container">
          <Link className="navbar-link" to="/cart">
            <p className={activePage === "Cart" ? "active" : ""} onClick={() => handleClick("Cart")}>Cart</p>
            <img className="bag-icon" src="src/assets/bag.svg" alt="" />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
