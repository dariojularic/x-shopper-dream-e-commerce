import "./ForthSection.css"

function ForthSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="featured-headings-container">
          <h3 className="section-heading-intro">CREEDS WE LIVE BY</h3>
          <h2 className="section-subheading">
            Elevate your home with our attitude of excellence and timeless
            style.
          </h2>
        </div>

        <div className="skills-container">
          <ul className="skills-list">
            <li className="skill-item">
              {/* <div className="skill-container"> */}
              <div className="skill-icon-container">
                <img className="skill-icon" src="src/assets/eye1.png" alt="" />
              </div>

              <div className="skill-container">
                <h3 className="skill-header">Radiance</h3>
                <p className="skill-detail">
                  Our commitment to providing sparkling solutions ensures every
                  customer enjoys a shining, glowing experience with unmatched
                  quality.
                </p>
              </div>
              {/* </div> */}
            </li>

            <li className="skill-item">
              {/* <div className="skill-container"> */}
              <div className="skill-icon-container">
                <img className="skill-icon" src="src/assets/eye1.png" alt="" />
              </div>

              <div className="skill-container">
                <h3 className="skill-header">Clarity</h3>
                <p className="skill-detail">
                  With clear vision and keen insight, we guide customers down
                  the path to lasting success with exceptional service and
                  anticipation.
                </p>
              </div>
              {/* </div> */}
            </li>

            <li className="skill-item">
              {/* <div className="skill-container"> */}
              <div className="skill-icon-container">
                <img className="skill-icon" src="src/assets/eye1.png" />
              </div>

              <div className="skill-container">
                <h3 className="skill-header">Heritage</h3>
                <p className="skill-detail">
                  As a trusted partner, we offer expert guidance, drawing on our
                  deep wisdom and wealth of experience to ensure satisfaction
                  and success.
                </p>
              </div>
              {/* </div> */}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ForthSection;
