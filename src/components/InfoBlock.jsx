import PropTypes from "prop-types";
import { motion } from "framer-motion";

InfoBlock.propTypes = {
  hero: PropTypes.bool,
  header: PropTypes.string.isRequired,
  blurb: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired
}

function InfoBlock(props) {

  const variants = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      y: [100, 0],
      transition: {
        duration: 0.75,
        type: "spring",
        delay: 0.5
      }
    }
  }

  return (
    <motion.div
      className="info-block"
      viewport={{ once: true }}
      variants={variants}
      initial="hidden"
      whileInView="show"
    >
      {props.hero ?
        <h1>{props.header}</h1>
      :
        <h2>{props.header}</h2>
      }

      <p>{props.blurb}</p>

      {!props.hero &&
        <div className="contacts">
          <a href="mailto:kaseyvaldez98@gmail.com">kaseyvaldez98@gmail.com</a>
          <a href="tel:778-320-0241">778.320.0241</a>
          <a href="https://www.linkedin.com/in/kasey-valdez/" target="_blank" rel="noopener noreferrer">linkedin.com/in/kasey-valdez/</a>
        </div>
      }
      
      <a
        href={props.href}
        target={props.hero ? "" : "_blank"}
        rel={props.hero ? "" : "noopener noreferrer"}
        className="button"
       
      >
        {props.buttonText}
      </a>
    </motion.div>
  );
}

export default InfoBlock;