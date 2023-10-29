import Navbar from "../Navbar/Navbar";
import "./Header.css";

export default function Header() {
  return (
    <>
      <header>
        <Navbar />
        <div className="header-content">
          <div className="container">
            <h1>Plixa</h1>
            <p>
              The leading platform to Create your website for free with the help
              of AI in the Middle East
            </p>
            <button className="hero-btn btn-primary">Try it for free</button>
          </div>
        </div>
      </header>
    </>
  );
}
