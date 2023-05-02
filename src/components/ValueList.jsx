import PropTypes from "prop-types";
import { motion } from "framer-motion";
import staggeredContainer from "../helpers/animations";

ValueList.propTypes = {
  values: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }))
}

function ValueList(props) {

  const valueItems = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      x: [100, 0],
      transition: {
        type: "spring",
        duration: 1
      }
    }
  }

  const valueList = props.values.map(value => {
    return (
      <motion.div
        key={value.id}
        className="value-list_item"
        variants={valueItems}
      >
        <header>
          <p className="numbers" aria-hidden="true">{value.number}</p>
          <h3>{value.title}</h3>
        </header>
        <p className="value-list_item_description">{value.description}</p>
      </motion.div>
    )
  })

  return (
    <motion.div
      className="value-list"
      variants={staggeredContainer}
      viewport={{ once: true }}
      initial="hidden"
      whileInView="show"
    >
      {valueList}
    </motion.div>
  );
}

export default ValueList;