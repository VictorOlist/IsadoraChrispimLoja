import React from "react";
import './ProductList.css'
import { PiCakeFill } from "react-icons/pi";
import { TbCandy } from "react-icons/tb";
import { BsBasket } from "react-icons/bs";
import { TbBrandCakephp } from "react-icons/tb";

function PdList (){
    return (

    <div className="BgColor">
        <div className="container">
            <div className="IconStyle1"><PiCakeFill/></div>
            <h2 className="TextS1">Bolos</h2>

            <div className="IconStyle2"><TbCandy/></div> 
            <h2 className="TextS2">Brigadeiros</h2>

            <div className="IconStyle3"><BsBasket/></div>
            <h2 className="TextS3">Cesta de doces</h2>

            <div className="IconStyle4"><TbBrandCakephp/></div>
            <h2 className="TextS4">Empadões</h2>
        </div>
    </div>
        
    )
}

export default PdList;