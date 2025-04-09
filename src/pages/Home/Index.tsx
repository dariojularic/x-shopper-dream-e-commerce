import "./Index.css";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { pageContext } from "../../PageContext";


// pogledat malo organizaciju foldera

// napravit reusable klase - section, section-heading-intro, section-subheading
// svaka sekcija neka ima container
// popravit css
// napravit fetch request za featured products sekciju
// random odabrat 3 proizvoda i prikazat ih

function Home() {
  const navigate = useNavigate();

  const context = useContext(pageContext)

  if (!context) {
    throw new Error("Navbar must be used within a PageContext.Provider");
  }

  const { setActivePage } = context

  return (
    <>
      <section className="first-section">
        <div className="home-header-container">
          <h1 className="home-h1">Furniture design to make you feel at home</h1>
          <h2 className="home-h2">Create your perfect space with our designs.</h2>
          <div className="home-buttons-container">
            <Button value="Explore products" type="action1" handleClick={() => {
              setActivePage("Products")
              navigate("/products")
            }} />
            <Button value="Learn more" type="action2" handleClick={() => window.scrollTo({
              top: document.body.scrollHeight,
              behavior: 'smooth'
            })} />
          </div>
        </div>
        <div className="home-image">
          <img src="src/assets/home1.png" alt="" className="home1-img"/>
        </div>
      </section>

      <section className="second-section">
        <h2 className="companies-header">AS FEATURED IN</h2>
        <ul className="companies-list">
          <li><img src="src/assets/techCrunch.png" className="company-img" /></li>
          {/* <li><img src="src/assets/businessInsider.png" className="company-img" /></li> */}
          {/* <li><img src="src/assets/newYorkTimes.png" className="company-img" /></li> */}
          <li><img src="src/assets/forbes.png" className="company-img" /></li>
          <li><img src="src/assets/usaToday.png" className="company-img" /></li>
        </ul>
      </section>

      <section className="third-section">
        <h3 className="third-section-h3">FEATURED PRODUCTS</h3>
        <h2 className="third-section-h2">The art of modern living unlocked.</h2>
      </section>
    </>
  )
}

export default Home;
