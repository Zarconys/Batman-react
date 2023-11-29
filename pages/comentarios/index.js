import React from "react";
import "./coment.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/foot";

function Coment() {
  return (
    <>
      <Header />
      <h1>Comentários</h1>

      <div className="coment-container">
        <div className="heroi1">Superman</div>
        <span>
          Um dos melhores filmes do Batman . Surpreendente!
          <br />
          Mais poderia ter me chamado para ajudar!
        </span>

        <div className="heroi2">Mulher Maravilha</div>
        <span>
          Esse Robert Pattinson deu totalmente a volta por cima!
          <br />
          De Vampiro do Crepúsculo para BATMAN. Ele se saiu muito bem!
        </span>

        <div className="heroi3">Flash</div>
        <span>
          Assisti hj confesso que não acredito que seria essa minha opinião!
          <br />
          Só que sinceramente como fã do morcego esse é o melhor filme dele
          sensacional.
        </span>

        <div className="heroi4">Aquaman</div>
        <span>
          Tentam achar defeitos! E tem como qualquer outro filme.
          <br />
          Mas esse Batman é sem dúvidas um filme incrível!
        </span>

        <div className="heroi5">Rubens Morais</div>
        <span>
          Muito bom!
          <br />
          talvez o melhor filme do batman que ja fizeram.
        </span>
      </div>

      <Footer />
    </>
  );
}

export default Coment;
