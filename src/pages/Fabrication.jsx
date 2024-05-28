import React from "react";
import artisans from '../datas.json';
import { Link } from "react-router-dom";

const Fabrication= () => {

    let fabArtisans = artisans.filter(artisan => artisan.category === "Fabrication");

    return(
        <div className="container batiment">
            <h1>Les spécialistes de la fabrication</h1>
            <section className="artisanBat">
                {fabArtisans.map(artisan =>(
                    <Link key={artisan.id} to={`/artisan/${artisan.id}`} className="link">
                    <div key={artisan.id} className="card batCard">
                        <div className="card-header artisanName">
                            <h2>{artisan.name}</h2>
                        </div>
                        <div className="card-body artisanSpec">
                            <p>Note: {artisan.note} {Array.from({ length: Math.round(parseFloat(artisan.note)) }, (_, index) => <span key={index}>&#9733;</span>)}</p>
                            <p>Spécialité: {artisan.specialty} </p>
                            <p>Localisation: {artisan.location} </p>
                        </div>
                    </div>
                    </Link>
                ))}
            </section>
        </div>
    )
}

export default Fabrication;