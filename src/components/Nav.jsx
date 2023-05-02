import { useState } from "react";
import { motion } from "framer-motion";

import { ReactComponent as GitHubIcon } from "../assets/icon-github.svg";
import { ReactComponent as LinkedInIcon}  from "../assets/icon-linkedin.svg";

import { useMediaQuery } from "react-responsive";

import company from "../helpers/data";
import MobileMenuButton from "./MobileMenuButton";

function Nav() {
  const [navOpen, setNavOpen] = useState(false);
  const isDesktop = useMediaQuery({ query: "(min-width: 768px) and (min-height: 550px)" });
  
  function handleToggleNav() {
    setNavOpen(!navOpen);
  }

  const listItemMotion = {
    mobile: { opacity: [0, 1], x: [100, 0] },
    desktop: { opacity: [0, 1], y: [-100, 0] }
  }

  return (
    <nav className="nav" style={navOpen ? { width: "100%" } : {}}>
      {!isDesktop &&
        <button
          aria-expanded={navOpen ? "true" : "false"}
          aria-label="mobile nav menu"
          onClick={handleToggleNav}
          className="nav_mobile-menu"
        >
          <MobileMenuButton navOpen={navOpen} />
        </button>
      }

      {(navOpen || isDesktop) &&
        <motion.div
          className="nav_wrapper"
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <motion.ul
            className="nav_wrapper_items"
            animate={isDesktop ? "desktop" : "mobile"}
            transition={{ staggerChildren: 0.05, duration: 0.5 }}
          >
            <motion.li variants={listItemMotion}><a href="#about">About me</a></motion.li>
            <motion.li variants={listItemMotion}><a href="#company">Why {company}?</a></motion.li>
            <motion.li variants={listItemMotion}><a href="#me">Why me?</a></motion.li>
            <motion.li variants={listItemMotion}><a href="#projects">Projects</a></motion.li>
            <motion.li variants={listItemMotion}><a href="#skills">Toolkit</a></motion.li>
            <motion.li variants={listItemMotion}><a href="#contacts">Contacts</a></motion.li>
          </motion.ul>

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
        </motion.div>
      }
    </nav>
  );
}

export default Nav;