import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { pageContext } from "../../PageContext";

function Navbar() {

  const context = useContext(pageContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (!context) {
    throw new Error("Navbar must be used within a PageContext.Provider");
  }

  const {activePage, setActivePage} = context

  function handleClick(page: string): void {
    setActivePage(page)
  }

  function handleBurgerClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header>
      <nav className={`${isMenuOpen ? "menu-open" : ""}`}>
        <div className="burger-btn-container">
          <img src="src/assets/burger-menu.png" className="burger-btn" onClick={handleBurgerClick} />
        </div>

        <div className="logo-container">
          <Link className="navbar-link" to="/" onClick={() => handleClick("Home")}>
            <img className="bag-icon" src="src/assets/bag.svg" />
            <p className="nav-link-p">X Shoppers Dream</p>
          </Link>
        </div>

        <div className="link-container">
          <Link className="navbar-link" to="/" onClick={() => {
            handleClick("Home")
            handleBurgerClick()
          }}>
            <p className={`nav-link-p ${activePage === "Home" ? "active" : ""}`} >Home</p>
          </Link>
          <Link className="navbar-link" to="/products" onClick={() => {
            handleClick("Products")
            handleBurgerClick()
          }}>
            <p className={`nav-link-p ${activePage === "Products" ? "active" : ""}`} >Products</p>
          </Link>
        </div>

        <div className="cart-navbar-container">
          <Link className="navbar-link" to="/cart" onClick={() => {
            handleClick("Cart")
            handleBurgerClick()
          }}>
            <p className={`nav-link-p ${activePage === "Cart" ? "active" : ""}`} >Cart</p>
            <img className="bag-icon" src="src/assets/bag.svg" />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
