import MainTitle from "../mainTitle/MainTitle";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <MainTitle
            title="Get In Touch"
            subtitle="To know more about our services, please fill out the form and a member of our team will be in touch with you soon."
          />
          <div className="form-container">
            <div className="contact-info">
              <div className="email">
                <p>Email: info@pioneers.network</p>
              </div>
              <div className="number">
                <p>Number: +966 55 216 7445</p>
              </div>
            </div>
            <form>
              <div className="inputs">
                <div>
                  <input type="text" placeholder="Name" />
                </div>
                <div>
                  <input type="email" placeholder="Email" />
                </div>
              </div>
              <div>
                <textarea placeholder="Message" />
              </div>
              <button type="submit" className="send-btn btn-primary">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
