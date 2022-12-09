import React, { Fragment } from "react";
import "./Accuil.css";
import backgroundIMG from "./img/home1.png";


const  Accuil = () =>{
    return(
        <header>
             <div className="container text">
                <div className="col-md-6 ">
                  <h1 className="title">Voyage autour <br/>du monde</h1>
                  <p className="paragraph">Envie de vivre vos vacances de rêve ?
                   <br/>Réservez votre vol dès maintenant sur "Bon voyage"<br/>
                   et Préparez-vous pour une expérience inoubliable.</p>
                  <div className="btns">

                  <button className="button1">Reserve maintrnant</button>
                  <button className="button2">Connecter vous</button>
                  </div>
                </div>
                <img src={backgroundIMG} className="backgroundIMG"/>
            </div>
        </header>     
    );
}
export default Accuil;