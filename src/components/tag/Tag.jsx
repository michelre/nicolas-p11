import "./tag.scss";
import PropTypes from "prop-types";

const Tag = ({ name }) => {
  return <p>{name}</p>;
};

Tag.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Tag;
