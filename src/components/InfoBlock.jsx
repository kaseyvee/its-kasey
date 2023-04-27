import PropTypes from "prop-types";

InfoBlock.propTypes = {
  hero: PropTypes.bool,
  header: PropTypes.string,
  blurb: PropTypes.string,
  href: PropTypes.string,
  buttonText: PropTypes.string
}

function InfoBlock(props) {
  return (
    <div className="info-block">
      {props.hero && <h1>{props.header}</h1>}
      {!props.hero && <h2>{props.header}</h2>}

      <p>{props.blurb}</p>
      {!props.hero && <div className="contacts">
        <a href="mailto:kaseyvaldez98@gmail.com">kaseyvaldez98@gmail.com</a>
        <a href="tel:778-320-0241">778.320.0241</a>
        <a href="https://www.linkedin.com/in/kasey-valdez/" target="_blank" rel="noopener noreferrer">linkedin.com/in/kasey-valdez/</a>
      </div>}
      <a href={props.href} target={props.hero ? "" : "_blank"} rel={props.hero ? "" : "noopener noreferrer"} className="button">{props.buttonText}</a>
    </div>
  );
}

export default InfoBlock;