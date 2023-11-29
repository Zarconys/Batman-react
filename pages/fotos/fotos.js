import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/foot";
import "./fotos.css";

function Fotos() {
  return (
    <React.Fragment>
      <Header />
      <h1 id="titulo">Fotos</h1>
      <section id="pai" className="pai">
        <div id="mae" className="mae">
          <div id="fot" className="filho1"></div>
          <div id="fot" className="filho2"></div>
          <div id="fot" className="filho3"></div>
          <div id="fot" className="filho4"></div>
          <div id="fot" className="filho5"></div>
          <div id="fot" className="filho6"></div>
        </div>
        <div className="mae2">
          <div id="fot" className="filho7"></div>
          <div id="fot" className="filho8"></div>
          <div id="fot" className="filho9"></div>
          <div id="fot" className="filho10"></div>
          <div id="fot" className="filho11"></div>
          <div id="fot" className="filho12"></div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
}

export default Fotos;
