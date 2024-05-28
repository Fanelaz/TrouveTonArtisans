import React from "react";
import artisans from '../datas.json';
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/style/artisan.scss";
import emailjs from '@emailjs/browser';

const Artisan = () => {


    let { id } = useParams();
    let artisan = artisans.find(artisan => artisan.id === id);
    

    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        const content = {
            to_name: 'Artisan',
            from_name: name,
            from_subject: subject,
            from_message: message,
        }

        emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

        const serviceID = process.env.REACT_APP_EMAILJS_SERVICEID;
        const templateID = process.env.REACT_APP_EMAILJS_TEMPLATEID;

        emailjs.send(serviceID, templateID, content)
        .then((response)=>{
            alert('Email envoyé avec succès');
            setName('');
            setSubject('');
            setMessage('');
        })
        .catch((error) =>{
            console.error ('Erreur lors de l\'envoi de l\'email:', error);
            alert('Erreur lors de l\'envoi de l\'email:');
        })
    }


    return(  
        <div className="ficheArtisan"> 
            <section className="container page">
                <h1>{artisan.name}</h1>
                <div className="infoArtisan">
                        <h2>{artisan.note} {Array.from({ length: Math.round(parseFloat(artisan.note)) }, (_, index) => <span key={index}>&#9733;</span>)}</h2>
                        <h2>Localisation: {artisan.location}</h2>
                        <h2>Spécialité: {artisan.specialty}</h2>
                </div>
                <div className="aboutDiv">
                    <div className="card about">
                        <div className="card-header">
                            à propos
                        </div>
                        <div className="card-body">
                            {artisan.about}
                        </div>
                        <div className="card-footer">
                            <h3>Site web: <Link to={artisan.website} target="_blank">{artisan.website}</Link></h3>
                        </div>
                    </div>
                    <div className="contact">
                        <form onSubmit={handleSubmit}>
                            <h2>Contacter {artisan.name} </h2>
                        <section className="container required">
                            <label For="name"></label>
                            <input className="inputContact" type="text" name="name" placeholder="Votre Nom" value={name} onChange={(e) => setName(e.target.value)} required />
                            <label For="subject"></label>
                            <input className="inputContact" type="text" name="subject" placeholder="Objet de votre message" value={subject} onChange={(e) => setSubject(e.target.value)} required />
                            <label For="message"></label>
                            <textarea name="message" placeholder="Votre message" rows="4" value={message} onChange={(e) => setMessage(e.target.value)} required/>
                            <div>
                                <button type="submit" className="btn">Envoyer</button>
                            </div>
                        </section>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Artisan;