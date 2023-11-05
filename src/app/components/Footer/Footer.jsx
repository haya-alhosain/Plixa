import "./Footer.css";
import Link from "next/link";
import Image from "next/image";
const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "Services",
    url: "/services",
  },
  {
    id: 4,
    title: "Contact",
    url: "/contact",
  },
];
export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row-one">
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <Image
                  className="img-logo"
                  src="/logo.svg"
                  alt="Next.js Logo"
                  width={180}
                  height={37}
                  priority
                />
              </div>
            </a>
            <ul className="nav-items">
              {links.map((link) => (
                <li>
                  <Link key={link.id} href={link.url} className="link">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="icons-social-media">
              <div>
                <a
                  href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="img-icon"
                    src="/facebook.svg"
                    alt="Next.js Logo"
                    width={20}
                    height={20}
                    priority
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="img-icon"
                    src="/whatsapp.svg"
                    alt="Next.js Logo"
                    width={20}
                    height={20}
                    priority
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="img-icon"
                    src="/linkedin.svg"
                    alt="Next.js Logo"
                    width={20}
                    height={20}
                    priority
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="row-two">
            <p>COPYRIGHT © 2023 Plixa, ALL RIGHTS RESERVED.</p>
            <div className="privacy-links">
              <a href="#">Privacy Policy</a> .{" "}
              <a href="#">Terms & Conditions</a> . <a href="#">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
