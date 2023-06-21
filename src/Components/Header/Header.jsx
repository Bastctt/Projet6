import { Link } from "react-router-dom"
import logo from "../../assets/images/logo-header.svg"
import "./Header.css"

function Header() {
  return (
    <header role="banner" className="header">
      <h1 className="visually-hidden">Kasa, location immobilière entre particuliers</h1>
      <img className="img-kasa" src={logo} alt="Logo de Kasa" title="Logo de Kasa" />
      <nav role="navigation" aria-label="main navigation">
        <ul className="ul-nav">
          <li className="li-nav"><Link className="a-nav" to="/">Accueil</Link></li>
          <li className="li-nav"><Link className="a-nav" to="/about">À Propos</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header