import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "./Contact.css";
import { contact } from "../features/UserSlice";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (nom && email && password) {
      dispatch(
        contact({
          nom,
          email,
          password,
        })
      );
      navigate("/décontact");
    }
  };

  return (
    <header>
      <h1 className="about-title1">Connectez-vous maintenant </h1>
      <div className="Contact">
        <form className="Contact-form" onSubmit={(e) => handleSubmit(e)}>
          <h1>Entrez vos informations</h1>
          <input
            type="nom et prénom"
            placeholder="Tapez votre nom et Prénom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />

          <input
            type="email"
            placeholder="Tapez votre Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Tapez votre mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="submit">
            Se connecter
          </button>
        </form>
      </div>
    </header>
  );
};
export default Contact;
