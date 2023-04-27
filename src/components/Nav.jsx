import { useState } from "react";

import { ReactComponent as GitHubIcon } from "../assets/icon-github.svg";
import { ReactComponent as LinkedInIcon}  from "../assets/icon-linkedin.svg";
import { ReactComponent as MobileNavOpen } from "../assets/mobile-nav-open.svg";
import { ReactComponent as MobileNavClose } from "../assets/mobile-nav-close.svg";

import NavItems from "./NavItems";
import { useMediaQuery } from "react-responsive";

function Nav() {
  const [navOpen, setNavOpen] = useState(false);
  const isDesktop = useMediaQuery({ query: "(min-width: 768px) and (min-height: 550px)"});
  
  function handleToggleNav() {
    setNavOpen(!navOpen);
  }

  return (
    <nav className="nav">
      {(navOpen || isDesktop) &&
        <div className="nav_wrapper">
          <NavItems />

          <ul className="nav_wrapper_socials">
            <li>
              <a href="https://github.com/kaseyvee" aria-label="GitHub">
                <GitHubIcon />
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/kasey-valdez/" aria-label="LinkedIn">
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