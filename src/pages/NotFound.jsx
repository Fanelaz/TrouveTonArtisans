import "../assets/style/NotFound.scss";
import { Link } from "react-router-dom";



const NotFound = () => {
    return (
        <main>
            <div className="Title">
                <div class="error">Erreur 404</div>

            </div>
            <div className="img404">
                <img src="../img/notfound.jpg" />
            </div>

            <button type="button" class="btn btn-dark">                 
            <Link className="boutton" to="/">Retour à l'acceuil</Link>
            </button>


        </main>
    )
}



export default NotFound;