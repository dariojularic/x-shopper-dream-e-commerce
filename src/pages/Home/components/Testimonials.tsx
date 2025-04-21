import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <div className="featured-headings-container">
          <h3 className="section-heading-intro">TESTIMONIALS</h3>
          <h2 className="section-subheading">
            Discover the stories of our delighted customers - thousands and
            counting!
          </h2>
        </div>

        <div className="testimonials-container">
          <div className="arrow-container">
            <img
              className="slider-arrow"
              src="src/assets/left-arrow.png"
              alt="left-arrow"
            />
          </div>
          <div className="testimonial">
            <h3 className="testimonial-header">Can't believe I have been missing on this!</h3>
            <p className="testimonial-paragraph">
              I cannot speak highly enough of the quality of the products I
              received from this company. The attention to detail and
              craftsmanship is unparalleled. I am so grateful to have found such
              a reliable and professional source for my furniture needs.
            </p>
            <div className="testimonial-user">
              <img src="" alt="" />
              <p className="testimonial-username"> </p>
              <p className="testimonial-address"> </p>
            </div>
          </div>
          <div className="arrow-container">
            <img
              className="slider-arrow"
              src="src/assets/right-arrow.png"
              alt="right-arrow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
