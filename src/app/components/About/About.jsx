import "./About.css";
import MainTitle from "../mainTitle/mainTitle";

export default function About() {
  return (
    <>
      <section>
        <div className="container">
          <MainTitle title="Why Us" subtitle="Get to know us better" />
          <div className="about-content">
            <div className="about-content-info">
              <div className="description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse dolor in
                  reprehenderit in voluptate
                </p>
              </div>
              <div>
                <h3>Mission</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
              </div>
              <div>
                <h3>Vision</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="about-content-steps">
              <h2>How to create a free website.</h2>
              <div className="steps">
                <div>
                  <span>01</span>
                  <p>
                    Start creating your free site or store by picking a
                    template.
                  </p>
                </div>
                <div>
                  <span>02</span>
                  <p>
                    Add your content, products and business info to make it
                    yours.
                  </p>
                </div>
                <div>
                  <span>03</span>
                  <p>
                    Use built-in marketing to let people know you're open for
                    business.
                  </p>
                </div>
                <div>
                  <span className="step-b">04</span>
                  <p>
                    Manage everything — reviews, orders, social — from 1
                    dashboard, on any device.
                  </p>
                </div>
                <div>
                  <span className="step-b">05</span>
                  <p>
                    Buy premium features — store add-ons, SEO, appointments — as
                    you need 'em.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
