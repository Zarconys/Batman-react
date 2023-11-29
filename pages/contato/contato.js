import React from "react";
import "./contato.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/foot";

function Contato() {
  return (
    <React.Fragment>
      <Header />
      <div id="contato-banner"></div>
      <section id="sect">
        <form action="formulario" id="formul">
          <div id="space">
            <label className="nome" for="text">
              Nome
            </label>
            <input
              type="text"
              placeholder="Digite seu nome"
              name="nome"
              required
            ></input>
          </div>
          <div id="space">
            <label className="e-mail">E-mail</label>
            <input
              id="e-mail"
              type="email"
              placeholder="Digite um e-mail válido"
              name="e-mail"
              required
            ></input>
          </div>
          <div id="space">
            <label className="tel">Telefone</label>
            <input
              id="number"
              type="number"
              name="number"
              placeholder="Telefone com DDD"
            ></input>
          </div>
          <div className="area" id="space">
            <label className="message">Mensagem</label>
            <textarea
              name="mensagem"
              id="mensagem"
              cols={"40"}
              rows={"5"}
              placeholder="Envie uma mensagem com o mínimo de 100 carcteres"
            ></textarea>
          </div>
          <button className="bot">Enviar</button>
        </form>
      </section>
      <Footer />
    </React.Fragment>
  );
}

export default Contato;
