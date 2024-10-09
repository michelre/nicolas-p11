import { Link } from 'react-router-dom';
import './card.scss'

const Card = ({id, title, cover}) => {
    return <Link style={{backgroundImage: `url(${cover})`}} className="card" to={`logements/${id}`}>
        <h3>{title}</h3>
        <div className="background"></div>
    </Link>
}

export default Card;