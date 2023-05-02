import PropTypes from "prop-types";
import { motion } from "framer-motion";

MobileMenuButton.propTypes = {
  navOpen: PropTypes.bool.isRequired
}

function MobileMenuButton(props) {
  
  return (
    <motion.span
      whileTap={{ scaleY: [1, 0, 1] }}
      transition={{ duration: 0.3 }}
    >
      {props.navOpen ?
      <svg width="46" height="46" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="7.07108" width="10" height="46" rx="5" transform="rotate(-45 0 7.07108)" fill="current"/>
        <rect width="10" height="46" rx="5" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 39.598 7.07108)" fill="current"/>
      </svg>
      :
      <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="5" cy="23" r="5" fill="current"/>
        <circle cx="23" cy="23" r="5" fill="current"/>
        <circle cx="41" cy="23" r="5" fill="current"/>
      </svg>
      }
    </motion.span>
  );
}

export default MobileMenuButton;