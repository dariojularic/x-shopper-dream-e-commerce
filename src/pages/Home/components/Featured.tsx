function Featured() {
  return (
    <section className="section second-section">
        <div className="container featured-section-container">
          <h2 className="companies-header">AS FEATURED IN</h2>
          <ul className="companies-list">
            <li>
              <img src="src/assets/usaToday.png" className="company-img" />
            </li>
            <li>
              <img src="src/assets/techCrunch.png" className="company-img" />
            </li>
            <li>
              <img src="src/assets/forbes.png" className="company-img" />
            </li>
          </ul>
        </div>
      </section>
  )
}

export default Featured;
