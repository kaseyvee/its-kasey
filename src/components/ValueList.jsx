import PropTypes from "prop-types";

ValueList.propTypes = {
  values: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }))
}

function ValueList(props) {

  const valueList = props.values.map(value => {
    return (
      <div key={value.id} className="value-list_item">
        <header>
          <p className="numbers" aria-hidden="true">{value.number}</p>
          <h3>{value.title}</h3>
        </header>
        <p className="value-list_item_description">{value.description}</p>
      </div>
    )
  })

  return (
    <div className="value-list">
      {valueList}
    </div>
  );
}

export default ValueList;