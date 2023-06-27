import "./Card.scss"
import { Link } from "react-router-dom"

function Card({ id, cover, title }) {
    return (
        <article>
            <Link to={`/Hébergements/${id}`}>
                <img src={cover} alt={title} title={title} />
                <h3>{title}</h3>
            </Link>
        </article>
    )
}

export default Card;