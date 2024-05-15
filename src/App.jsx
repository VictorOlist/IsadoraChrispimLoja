import React from "react"
import './App.css';
import './Header/header.jsx';
import "./SlideShow/SlideShow.jsx";
import Header from "./Header/header";
import SlideShow from "./SlideShow/SlideShow.jsx";
import PdList from "./ProductList/ProductList.jsx";
import AbountDesc from "./About/AboutShop.jsx";
import Contat from "./Contato/Contat.jsx";
import Footer from "./Footer/Footer.jsx";

function App() {

  return(
    <>
    <Header />
    <SlideShow />
    <PdList/>
    <AbountDesc/>
    <Contat/>
    <Footer/>
    </>
    
  ) 
}

export default App