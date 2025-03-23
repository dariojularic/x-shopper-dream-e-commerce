import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="logo-container">
        <Link className="navbar-link" to="/">
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
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
