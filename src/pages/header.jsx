import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../assets/style/Header.scss";
import artisans from "../datas.json";

import { FaRegBuilding } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";
import { FaBowlFood } from "react-icons/fa6";

const Header = () => {

    let [recherche, setRecherche] = useState('');
    let [filtreArtisans, setFiltreArtisans] = useState([]);

    let handleRecherche = (event) => {

      event.preventDefault();      

      setRecherche(event.target.value);
      let filtre = artisans.filter(artisan =>
        artisan.name.toLowerCase().includes(event.target.value) ||
        artisan.specialty.toLowerCase().includes(event.target.value) ||
        artisan.location.toLowerCase().includes(event.target.value)
      );
      setFiltreArtisans(filtre);
    };

    return(
    <div>
    <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><img className="logo" src="../img/logo.png" alt="Trouve ton artisant"/></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse headBar" id="navbarSupportedContent">
            <div className="navigation">
              <Link className="nav-link" aria-current="page" to="/batiment"><FaRegBuilding  size={20}/> Bâtiment</Link>                 
              <Link className="nav-link " aria-current="page" to="/service"><GrServices size={20}/> Services</Link>      
              <Link className="nav-link " aria-current="page" to="/fabrication"><MdOutlinePrecisionManufacturing size={20}/> Fabrication</Link>
              <Link className="nav-link " aria-current="page" to="/alimentation"><FaBowlFood size={20}/> Alimentation</Link>
            </div>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Rechercher" aria-label="Search" onChange={handleRecherche}/>
              <button type="submit" className="searchButton">Rechercher</button>
            </form>
          </div>
        </div>
      </nav>
      {filtreArtisans.length > 0 && (
          <div className="container ">
            <section className="searchContainer">
            <h2>Résultat de la recherche:</h2>
            <div className="search">
              {filtreArtisans.map(artisan =>(
                <Link key={artisan.id} to={`/artisan/${artisan.id}`} className="link">
                <div key={artisan.id} >
                  <div className="card result">
                    <div className="card-header">
                      <h2> {artisan.name} </h2>
                    </div>
                    <div className="card-body">
                      <p>Spécialité: {artisan.specialty} </p>
                      <p>Localisation: {artisan.location} </p>
                    </div>
                  </div>
                </div>
                </Link>
              ))}
            </div>
            </section>
          </div>
        )}
      </div>
    )
}

export default Header;



