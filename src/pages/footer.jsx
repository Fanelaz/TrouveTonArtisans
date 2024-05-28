import React from "react";
import { Link } from "react-router-dom";
import "../assets/style/footer.scss";

const Footer =()=>{
    return(
        <footer>
            <article className="footer">
                <div className="legal">
                    <h2>Pages légales</h2>
                    <Link to='/mention'>Mentions légales</Link>
                    <Link to='/data'>Données personnelles</Link>
                    <Link to='/access'>Accessibilité</Link>
                    <Link to='/cookie'>Cookies</Link>
                </div>
                <div className="address">
                    <h2>Adresse</h2>
                    <address>
                        101 cours Charlemagne <br/>
                        CS 20033 <br />
                        69269 LYON CEDEX 2 <br />
                        France <br />
                        +33 4 26 73 40 00                    
                    </address>
                </div>
            </article>
        </footer>
    )
}

export default Footer;