import React from "react";
import logo from "./img/bon.jpg";
import "./Footer.css"
import { BsFacebook } from 'react-icons/bs';
import {FaPinterest} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import { Link } from 'react-router-dom';


const  Footer = () =>{
    return(
        <div className="Footer">
            <div className="containere">
                  {/*colum1*/}
                  <div>
                  <img src={logo} className="logoFooter"/>
                  <p className="P-Footer"> Bon Voyage vous propose une gamme de promotions, de réductions 
                    et d'offres rien que pour vous </p>
                  </div>
                   {/*colum2*/}
                 <div className="col2">
                 <h4>PAGES</h4>
                    <ul className="list">
                         <Link className='tag' to="/"><li>Accuil</li></Link>
                         <Link className='tag'  to="/about"><li>About</li></Link>
                         <Link className='tag' to="/destination"><li>Destination</li></Link>
                         <Link className='tag' to="/contact"><li>Contact</li></Link>
                    </ul>
                 </div>
                    {/*colum3*/}
                 <div>
                    <h4>RESAUX SOCIAUX</h4>
                    <ul className="list">
                        <div className="icons">
                            <BsFacebook color="blue" fontSize={"25px"}/>
                        <li>facebook</li>
                        </div>
                        <div className="icons">
                            <FaPinterest color="red" fontSize={"25px"}/>
                        <li>pinterest</li>
                        </div>
                        <div className="icons">
                            <BsInstagram color="#ff0066"  fontSize={"25px"}/>
                        <li>instagram</li>
                        </div>
                        <div className="icons">
                            <BsTwitter color="#0073e6"  fontSize={"25px"}/>
                        <li>twitter</li>
                        </div>
                    </ul>
                </div>
        </div>
     </div>
    );
}
export default Footer;