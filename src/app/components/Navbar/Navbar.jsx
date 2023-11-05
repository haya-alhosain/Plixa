import "./Navbar.css";
import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
// import { AiOutlineClose } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
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
export default function Navbar() {
  return (
    <>
      <nav>
        <div className="container">
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

            <button className="btn-primary">Log in</button>
          </ul>
          <div className="nav-mobile-items">
            <div className="select-menu-hide">
              <div className="select-menu">
                <div className="select-btn">
                  <span className="sBtn-text">Ar</span>
                  <BiChevronDown style={{ fontSize: "11px" }} />
                </div>
                {/* <ul
                className="options"
                style={{ display: toggleOptions ? "block" : "none" }}
              >
                <li className="option en" style={{ top: "10px" }}>
                  en
                </li>
                <li className="option ar" style={{ top: "28px" }}>
                  ar
                </li>
              </ul> */}
              </div>
            </div>
            <FaBars className="toggleIcon" />
          </div>
        </div>
      </nav>
    </>
  );
}
