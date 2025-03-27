import "./Navbar.css";
import { Link } from "react-router-dom";
// import { useState } from "react";
import { useContext } from "react";
import { pageContext } from "../../PageContext";

function Navbar() {
  // const [activePage, setActivePage] = useState<string>("Home")

  const context = useContext(pageContext)

  if (!context) {
    throw new Error("Navbar must be used within a PageContext.Provider");
  }

  const {activePage, setActivePage} = context

  function handleClick(page: string): void {
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
          <Link className="navbar-link" to="/" onClick={() => handleClick("Home")}>
            <p className={activePage === "Home" ? "active" : ""} >Home</p>
          </Link>
          <Link className="navbar-link" to="/products" onClick={() => handleClick("Products")}>
            <p className={activePage === "Products" ? "active" : ""} >Products</p>
          </Link>
        </div>

        <div className="cart-navbar-container">
          <Link className="navbar-link" to="/cart" onClick={() => handleClick("Cart")}>
            <p className={activePage === "Cart" ? "active" : ""} >Cart</p>
            <img className="bag-icon" src="src/assets/bag.svg" />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
