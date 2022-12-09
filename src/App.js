import React from "react";
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Accuil from './components/Accuil';
import About from './components/About';
import Contact from "./components/Contact";
import Destination from "./components/Destination";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";
import { selectUser } from "./features/UserSlice";
import Décontact from "./components/Décontact";


export default function App(){
  const user = useSelector(selectUser)
  return(
      <>
        <Header/>
        <Routes>
          <Route path="/" element={<Accuil />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/décontact" element={<Décontact />} />
        </Routes>
        <Footer />
        
      </>  
    )
}

