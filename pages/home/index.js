import React from "react";
import Header from "../../components/header/header";
import "./styles.css";
import Video from "../home/ff.mp4";
import Cards from "../../components/cards/index";
import Footer from "../../components/footer/foot";

function Home() {
  return (
    <React.Fragment>
      <Header />

      <div id="banner"></div>
      <div id="trailer-container">
        <div className="content">
          <video controls className="trailer">
            <source src={Video} type="video/mp4" />
            Seu navegador não possui suporte para video
          </video>
          <div id="sinopse">
            <p className="description">
              Após dois anos espreitando as ruas como Batman, Bruce Wayne se
              encontra nas profundezas mais sombrias de Gotham City. Com poucos
              aliados confiáveis, o vigilante solitário se estabelece como a
              personificação da vingança para a população.
            </p>
            <button className="button">Comprar ingresso</button>
          </div>
        </div>
      </div>
      <Cards />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
