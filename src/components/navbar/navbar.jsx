import { useState } from "react";
import "./navbar.css";

// Imported logo svg
import logo from "../../assets/logo.png";

// Imported icons
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  // Navbar state
  const [prevNavbar, setNavbar] = useState(false);

  // Navbar toggle function
  const toggleNavbar = () => {
    setNavbar(!prevNavbar);
    console.log(prevNavbar);
  };

  // Toggle navbar class function
  const classNavbar = prevNavbar ? "showNavbar" : "";

  // Make navbar blend when scrolling
  const [header, setHeader] = useState("header");
  const blendNavbar = () => {
    if (window.scrollY >= 20) {
      setHeader("header blendIn");
    } else setHeader("header");
  };

  window.addEventListener("scroll", blendNavbar);

  return (
    <div className={header}>
      <div className="logoDiv">
        <img src={logo} alt="Bayerische Motoren Werke Logo" className="logo" />
      </div>

      <div className={`navbar ${classNavbar}`}>
        <ul className="menu">
          <li className={`listItem`} onClick={toggleNavbar}>
            <a href="" className="link">
              About Us
            </a>
          </li>
          <li className={`listItem`} onClick={toggleNavbar}>
            <a href="" className="link">
              Browse Cars
            </a>
          </li>
          <li className={`listItem`} onClick={toggleNavbar}>
            <a href="" className="link">
              Sell Your Car
            </a>
          </li>
          <li className={`listItem`} onClick={toggleNavbar}>
            <a href="" className="link">
              Contact
            </a>
          </li>
        </ul>

        <IoIosCloseCircle className="icon closeIcon" onClick={toggleNavbar} />
      </div>

      <div className="signIn flex ">
        <div className="text">Sign In</div>
        <TbGridDots className="icon openIcon" onClick={toggleNavbar} />
      </div>
    </div>
  );
};

export default Navbar;
