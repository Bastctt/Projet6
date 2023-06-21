import "./Card.css"
import { Link } from "react-router-dom"

function Card({ id, cover, title }) {
    return (
        <article className="article-card">
            <Link to={`/Hébergements/${id}`}>
                <img className="img-card" src={cover} alt={title} title={title} />
                <h3 className="title-card">{title}</h3>
            </Link>
        </article>
    )
}

export default Card