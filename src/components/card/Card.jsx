import { Link } from "react-router-dom";
import "./card.scss";
import PropTypes from "prop-types";

const Card = ({ id, title, cover }) => {
  return (
    <Link
      style={{ backgroundImage: `url(${cover})` }}
      className="card"
      to={`logements/${id}`}
    >
      <h3>{title}</h3>
      <div className="background"></div>
    </Link>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default Card;