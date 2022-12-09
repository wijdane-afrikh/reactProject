import React from "react";
import "./About.css";
import aboutIMG1 from "./img/about1.jpg";
import aboutIMG2 from "./img/about2.PNG";
import { BsHeadset } from "react-icons/bs";
import { FaHotel } from "react-icons/fa";
import { ImAirplane } from "react-icons/im";
import { MdMargin, MdToday } from "react-icons/md";

const About = () => {
  return (
    <header>
      <h1 className="about-title1">Pourquoi nous choisir ?</h1>
      <div className="right-cont text">
        <div className="col-md-6 ">
          <h1 className="about-title2">"Bon voyage" facilite votre vacances :</h1>
          <p className="about-paragraph3">Voici quelques-unes de nos services :</p>
          <ul className="ul2">
            <BsHeadset color="#990033" fontSize={"35px"} /> Équipe professionnelle<br />
            <FaHotel color="#990033" fontSize={"35px"} /> Chambres d'hôtel luxueuses<br />
            <ImAirplane color="#990033" fontSize={"35px"} /> Billets d'avion pour voyager <br />
            <MdToday color="#990033" fontSize={"35px"} /> Nous travaillons 24/7 <br />
          </ul>
        </div>
        <img src={aboutIMG1} className="aboutIMG1" />
      </div>
      <h1 className="about-title3">Nous nous occupons de votre voyage du début à la fin :</h1>
      <div className="right-cont">
        <img src={aboutIMG2} className="aboutIMG2" />
        <p className="about-paragraph4">
          Nous vous facilitons la réservation de vos vacances et vous aidons à
          ne pas perdre votre temps dans de nombreuses étapes fatigantes, vous
          pouvez simplement réserver via notre site Web, choisir votre
          destination et nous laisser le reste
        </p>
      </div>
    </header>
  );
};
export default About;
