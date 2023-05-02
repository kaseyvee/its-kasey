import PropTypes from "prop-types";
import { motion } from "framer-motion";

import staggeredContainer from "../helpers/animations";

InfoBlock.propTypes = {
  hero: PropTypes.bool,
  header: PropTypes.string.isRequired,
  blurb: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired
}

function InfoBlock(props) {

  const infoItems = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      y: [100, 0],
      transition: {
        type: "spring",
        duration: 1
      }
    }
  }

  return (
    <motion.div
      className="info-block"
      variants={staggeredContainer}
      viewport={{ once: true }}
      initial="hidden"
      whileInView="show"
    >
      {props.hero ?
        <motion.h1 variants={infoItems}>{props.header}</motion.h1>
      :
        <motion.h2 variants={infoItems}>{props.header}</motion.h2>
      }

      <motion.p variants={infoItems}>{props.blurb}</motion.p>

      {!props.hero &&
        <motion.div className="contacts" variants={infoItems}>
          <a href="mailto:kaseyvaldez98@gmail.com">kaseyvaldez98@gmail.com</a>
          <a href="tel:778-320-0241">778.320.0241</a>
          <a href="https://www.linkedin.com/in/kasey-valdez/" target="_blank" rel="noopener noreferrer">linkedin.com/in/kasey-valdez/</a>
        </motion.div>
      }
      
      <motion.a
        href={props.href}
        target={props.hero ? "" : "_blank"}
        rel={props.hero ? "" : "noopener noreferrer"}
        className="button"
        variants={infoItems}
      >
        {props.buttonText}
      </motion.a>
    </motion.div>
  );
}

export default InfoBlock;