import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../features/UserSlice";
import "./Décontact.css";
import { useNavigate } from "react-router-dom";

const Décontact = () => {
  const navigate = useNavigate();

  const user = useSelector(selectUser);
  const handleDécontact = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="Décontact">
      <h1>
        Bonjour<span className="user">{user.nom}</span>
      </h1>
      <button className="Décontact-btn" onClick={(e) => handleDécontact(e)}>
        Se déconnecter
      </button>
    </div>
  );
};

export default Décontact;
