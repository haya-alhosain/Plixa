import Navbar from "../Navbar/Navbar";
import "./Header.css";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <header>
        <Navbar />
        <section className="hero">
          <div className="header-content">
            <h1>Plixa</h1>
            <p>
              The leading platform to Create your website for free with the help
              of AI in the Middle East
            </p>
            <button className="hero-btn btn-primary">Try it for free</button>
          </div>
          <div className="hero-img">
            <Image
              src="/hero-img.svg"
              alt="Next.js"
              width={319}
              height={315}
              priority
            />
          </div>
        </section>
      </header>
    </>
  );
}
