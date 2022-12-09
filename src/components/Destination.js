import React from "react";
import "./Destination.css";
import data from './DestinationData';

const  Destination = () =>{
    const donnee = data;
    return(
        <div className="Destination">
            <h1 className="about-title1">Destinations favorites</h1>
            <p>Vous trouverez ici les plus belles destinations où il est recommandé de voyager</p>
            <div className="Destination-card">
                {
                    donnee.map(data => {
                        return(
                            <div className="cards">
                                <div className="d-images">
                                <img src={data.dataImg} alt="d-image"/>
                                </div>
                                <h4>{data.dataTitle}</h4>
                                <p>{data.dataPara}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
export default Destination;