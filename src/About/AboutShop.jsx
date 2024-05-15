import React from "react";
import './AboutShop.css';
import Logo from '../Images/isa_logo.jpg'

function AbountDesc(){
    return(
        <div className="Presentation">
            
            <div className="ContainerElements">
                <h1>Quem sou?</h1>
                <p>Sou Isadora Chripim, trabalho com a confecção e produção de bolos, doces e salgados para festas</p>
                
            </div>
            <img className="StLogo" src={Logo} alt="Logo" title="Logo" />
            
        </div>
    )

}

export default AbountDesc;