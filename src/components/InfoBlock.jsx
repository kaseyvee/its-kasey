import PropTypes from "prop-types";

InfoBlock.propTypes = {
  id: PropTypes.string,
  hero: PropTypes.boolean,
  header: PropTypes.string,
  blurb: PropTypes.string,
  buttonText: PropTypes.string
}

function InfoBlock(props) {
  return (
    <div id={`${props.id}`} className="info-block">
      {props.hero && <h1>{props.header}</h1>}
      {!props.hero && <h2>{props.header}</h2>}

      <p>{props.blurb}</p>
      <button className="button">{props.buttonText}</button>
    </div>
  );
}

export default InfoBlock;