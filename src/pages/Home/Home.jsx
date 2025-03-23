import "./Home.css";

function Home() {
  return (
    <main>
      <section className="first-section">
        <div className="home-header">
          <h1 className="home-h1">Furniture design to make you feel at home</h1>
          <h2 className="home-h2">Create your perfect space with our designs.</h2>
          <div className="home-buttons-container">
            <button>Explore products</button>
            <button>Learn more</button>
          </div>
        </div>
        <div className="home-image">
          <img src="src/assets/home1.png" alt="" className="home1-img"/>
        </div>
      </section>
    </main>
  )
}

export default Home;
