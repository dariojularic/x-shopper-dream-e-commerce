import "./Home.css";
import Button from "../../components/Button";

function Home() {
  return (
    <>
      <section className="first-section">
        <div className="home-header-container">
          <h1 className="home-h1">Furniture design to make you feel at home</h1>
          <h2 className="home-h2">Create your perfect space with our designs.</h2>
          <div className="home-buttons-container">
            <Button value="Explore products" type="action1" />
            <Button value="Learn more" type="action2" />
          </div>
        </div>
        <div className="home-image">
          <img src="src/assets/home1.png" alt="" className="home1-img"/>
        </div>
      </section>

      <section className="second-section">
        <h2>AS FEATURED IN</h2>
        <ul className="companies-list">
          <li><img src="src/assets/techCrunch.png" className="company-img" /></li>
          <li><img src="src/assets/businessInsider.png" className="company-img" /></li>
          <li><img src="src/assets/newYorkTimes.png" className="company-img" /></li>
          <li><img src="src/assets/forbes.png" className="company-img" /></li>
          <li><img src="src/assets/usaToday.png" className="company-img" /></li>
        </ul>
      </section>
    </>
  )
}

export default Home;
