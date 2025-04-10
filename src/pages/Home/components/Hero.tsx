import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { pageContext } from "../../../PageContext";

function Hero() {
  const navigate = useNavigate();

  const context = useContext(pageContext);

  if (!context) {
    throw new Error("Navbar must be used within a PageContext.Provider");
  }

  const { setActivePage } = context;

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-header-container">
          <h1 className="home-h1">Furniture design to make you feel at home</h1>
          <h2 className="home-h2">
            Create your perfect space with our designs.
          </h2>
          <div className="home-buttons-container">
            <Button
              value="Explore products"
              type="action1"
              handleClick={() => {
                setActivePage("Products");
                navigate("/products");
              }}
            />
            <Button
              value="Learn more"
              type="action2"
              handleClick={() =>
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: "smooth",
                })
              }
            />
          </div>
        </div>
        <div className="home-image">
          <img src="src/assets/home1.png" alt="" className="home1-img" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
