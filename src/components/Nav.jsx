import { useState } from "react";

import { ReactComponent as GitHubIcon } from "../assets/icon-github.svg";
import { ReactComponent as LinkedInIcon}  from "../assets/icon-linkedin.svg";
import { ReactComponent as MobileNavOpen } from "../assets/mobile-nav-open.svg";
import { ReactComponent as MobileNavClose } from "../assets/mobile-nav-close.svg";

import { useMediaQuery } from "react-responsive";

import company from "../data";

function Nav() {
  const [navOpen, setNavOpen] = useState(false);
  const isDesktop = useMediaQuery({ query: "(min-width: 768px) and (min-height: 550px)"});
  
  function handleToggleNav() {
    setNavOpen(!navOpen);
  }

  return (
    <nav className="nav" style={navOpen ? { width: "100%" } : {}}>
      {(navOpen || isDesktop) &&
        <div className="nav_wrapper">
          <ul className="nav_wrapper_items">
            <li><a href="#about">About me</a></li>
            <li><a href="#company">Why {company}?</a></li>
            <li><a href="#me">Why me?</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Toolkit</a></li>
            <li><a href="#contacts">Contacts</a></li>
          </ul>

          <ul className="nav_wrapper_socials">
            <li>
              <a href="https://github.com/kaseyvee" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GitHubIcon />
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/kasey-valdez/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
            </li>
          </ul>
        </div>
      }
      {!isDesktop &&
        <button
          aria-expanded={navOpen ? "true" : "false"}
          aria-label="mobile nav menu"
          onClick={handleToggleNav}
          className="nav_mobile-menu"
        >
          {navOpen ? <MobileNavClose /> : <MobileNavOpen />}
        </button>
      }
    </nav>
  );
}

export default Nav;