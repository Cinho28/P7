import { NavLink } from "react-router-dom";
import "./error404.scss";
function Error404() {

    return (
           <main className="Error404">
            <div className="Error404__message">
            <h1 className="Error404__message--title">404</h1>
            <p className="Error404__message--text">Oups! La page que vous demandez n'existe pas.</p>
            </div>
            <NavLink className="Error404__link" to="/">Retourner sur la page d'accueil</NavLink>
           </main>

    );
}
export default Error404;
