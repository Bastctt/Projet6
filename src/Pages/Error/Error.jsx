import { Link } from "react-router-dom"
import "./Error.css"

function Error() {
  return (
    <main role="main" className="main-error">
      <h2 className="error">404</h2>
      <div className="text-error">Oups ! La page que vous demandez n'existe pas.</div>
      <Link className="link-error" to="/">Retourner sur la page d'accueil</Link>
    </main>
  )
}

export default Error