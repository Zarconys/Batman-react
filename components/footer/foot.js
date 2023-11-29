import React from "react";
import Logo from "../../assets/dourado.jpg";
import { Link } from "react-router-dom";
import "./foot.css";

function Footer() {
  return (
    <footer>
      <img id="footer-logo" src={Logo}></img>

      <nav className="footer-navigation">
        <ul>
          <Link style={{ textDecoration: "none" }} to={"/"}>
            <li>Home</li>
          </Link>
          <Link style={{ textDecoration: "none" }} to={"/contato"}>
            <li>Contato</li>
          </Link>
          <Link style={{ textDecoration: "none" }} to={"/fotos"}>
            <li>Fotos</li>
          </Link>
          <Link style={{ textDecoration: "none" }} to={"Comentarios"}>
            <li>Comentários</li>
          </Link>
        </ul>
      </nav>
      <span>Todos os direitos reservados ©</span>
      <span>Desenvolvido por Rubens Morais</span>
    </footer>
  );
}

export default Footer;
