import React from "react";
import './Contat.css';
import { FaWhatsapp } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";

function Contat(){
    return (
        <div className="ContainerFts">
            <div className="Formatation1">
                <h1>Contato</h1>
            </div>
            <div className="Formatation2">
                <div className="Icon1"><CiInstagram/></div>
                <p>isadorachrispim_doces</p>
                <div className="Icon2"><FaWhatsapp/></div>
                <p>(41) 99981-1366</p>
            </div>
            
        </div>
    )
}

export default Contat;