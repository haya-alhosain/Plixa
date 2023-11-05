import "./About.css";
import MainTitle from "../mainTitle/mainTitle";
import Image from "next/image";
export default function About() {
  return (
    <>
      <section className="about">
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
            <div className="about-content-about">
              <div>
                <div>
                  <Image
                    className="img-logo"
                    src="/Icon-1.svg"
                    alt="Next.js Logo"
                    width={77}
                    height={70}
                    priority
                  />
                </div>
                <div>
                  <h4>Ai assistant</h4>
                  <p>Lorem ipsum dolor sit amet, sectetur adipiscing elit,</p>
                </div>
              </div>
              <div>
                <div>
                  <Image
                    className="img-logo"
                    src="/Icon-1.svg"
                    alt="Next.js Logo"
                    width={77}
                    height={70}
                    priority
                  />
                </div>
                <div>
                  <h4>Ai assistant</h4>
                  <p>Lorem ipsum dolor sit amet, sectetur adipiscing elit,</p>
                </div>
              </div>
              <div>
                <div>
                  <Image
                    className="img-logo"
                    src="/Icon-1.svg"
                    alt="Next.js Logo"
                    width={77}
                    height={70}
                    priority
                  />
                </div>
                <div>
                  <h4>Ai assistant</h4>
                  <p>Lorem ipsum dolor sit amet, sectetur adipiscing elit,</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
