import React from "react";
import './Footer.css';
import LogoBd from '../Images/Logo_Build.png'

function Footer(){
    return(
        <div className="Manipulate">
            <div className="teste">BuildUpgrade</div>
            <img className="LogoMlp" src={LogoBd} alt="logobuild" title="LogoBuild"/>
        </div>
        
    )
}

export default Footer;