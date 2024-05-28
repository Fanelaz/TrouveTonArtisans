import React from "react";
import { Link } from "react-router-dom";
import "../assets/style/home.scss";
import artisans from '../datas.json';
import { BiSolidCategory } from "react-icons/bi";
import { IoMan } from "react-icons/io5";
import { FaWpforms } from "react-icons/fa";
import { MdOutlineQuestionAnswer } from "react-icons/md";


const Home = () =>{

    let topArtisans = artisans.filter(artisan => artisan.top);

    return(
        <div>
        <section className="container card-tuto" >
            <h1>Comment trouver mon artisan ?</h1>
            
            <div class="row" id="tuto">
                <div class="col text-center">
                    <BiSolidCategory size={30} color="white"/>
                    <h3 >1</h3> 
                    <p >Choisissez votre catégorie</p>
                    
                </div>
                <div class="col text-center">
                    <IoMan size={30}/>
                    <h3 >2</h3> 
                    <p >Choisissez un artisan</p>
                </div>
                <div class="col text-center">
                    <FaWpforms size={30}/>
                    <h3 >3</h3> 
                    <p > Contactez-le via le formulaire dédié</p>
                </div>
                <div class="col text-center">
                    <MdOutlineQuestionAnswer size={30}/>
                    <h3 >4</h3> 
                    <p >Une réponse vous sera apportée sous 48h</p>
                </div>

           
        </div>
        </section>
        <section className="container contArtisans ">
            <h1>Les artisans du mois</h1>
            <div className="topArtisans">
            {topArtisans.map(artisan =>(
                <Link key={artisan.id} to={`/artisan/${artisan.id}`} className="link">
                <div key={artisan.id}>
                    <div className="card topCard">
                        <div className="card-header">
                            <h2>{artisan.name}</h2>
                        </div>
                        <div className="card-body">
                            <p>Note : {artisan.note} {Array.from({ length: Math.round(parseFloat(artisan.note)) }, (_, index) => <span key={index}>&#9733;</span>)}</p>
                            <p>Spécialité : {artisan.specialty}</p>
                            <p>Localisation : {artisan.location}</p>
                        </div>
                    </div>
                </div>
                </Link>
            ))}
            </div>
        </section>
        </div>


    )
}

export default Home;