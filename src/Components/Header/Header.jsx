import { Link } from "react-router-dom"
import logo from "../../assets/images/logo-header.svg"
import "./Header.scss"

function Header() {
  return (
    <header role="banner">
      <h1 className="visually-hidden">Kasa, location immobilière entre particuliers</h1>
      <img src={logo} alt="Logo de Kasa" title="Logo de Kasa" />
      <nav role="navigation" aria-label="main navigation">
        <ul>
          <li><Link className="a-nav" to="/home">Accueil</Link></li>
          <li><Link className="a-nav" to="/about">À Propos</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header