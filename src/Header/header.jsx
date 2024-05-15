import React from "react";
import './Header.css';
import { FiMenu } from "react-icons/fi";


function Header(){
    return(
        <header>
            <div className="Menu_icon">
            <h2 className="Header_logo">Isadora Chrinpim</h2>
            {/*<div clasName="MenuIcon"><FiMenu/></div>*/}
            
            </div>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;