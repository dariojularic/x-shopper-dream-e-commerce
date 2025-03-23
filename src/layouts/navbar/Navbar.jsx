import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="logo-container">
        <Link className="navbar-link" to="/">
          {/* <svg></svg> */}
          <img className="bag-icon" src="src/assets/bag.svg" alt="" />
          <p>X Shoppers Dream</p>
        </Link>
      </div>

      <div className="links-container">
        <Link className="navbar-link" to="/">
          <p>Home</p>
        </Link>
        <Link className="navbar-link" to="/products">
          <p>Products</p>
        </Link>
      </div>

      <div className="cart-navbar-container">
        <Link className="navbar-link" to="/cart">
          <p>Cart</p>
          <img className="bag-icon" src="src/assets/bag.svg" alt="" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
