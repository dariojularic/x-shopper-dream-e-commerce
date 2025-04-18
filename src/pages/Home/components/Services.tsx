import "./Services.css";
import Button from "../../../components/Button";

function handleClick() {}

function Services() {
  return (
    <section className="section services-section">
      <div className="container">
        <div className="featured-headings-container">
          <h3 className="section-heading-intro">OPERATIONS</h3>
          <h2 className="section-subheading">
            Where simplicity meets efficiency to bring your home to life
          </h2>
        </div>

        <div className="services-container">
          <Button
            value="Swift Delivery"
            type="action1"
            handleClick={handleClick}
          />
          <Button
            value="Stellar Support"
            type="action2"
            handleClick={handleClick}
          />
          <Button
            value="Fresh Finds"
            type="action2"
            handleClick={handleClick}
          />
          <Button
            value="Easy Returns"
            type="action2"
            handleClick={handleClick}
          />
        </div>

        <article>
          <div className="service-details">
            <div className="service-icon-container">
              <img src="src/assets/eye1.png" alt="" />
            </div>

            <div className="service-heading-paragraph">
              <h3 className="service-heading">Get your home furnishings in a flash with rapid delivery.</h3>
              <p className="service-paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                accusamus architecto minus sint, perspiciatis blanditiis iusto
                dolor, temporibus aperiam explicabo est ex harum eligendi quia
                ipsa fugit. Explicabo, voluptatibus officia.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Services;
