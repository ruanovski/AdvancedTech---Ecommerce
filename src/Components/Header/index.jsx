import Logo from "../../Assets/Logo.svg";
import {AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";  

import { Container } from "./style.jsx";

function Header() {
  return (
    <Container>
        <header>
          <div id="header-container">
            <img id="Logo" src={Logo} alt="Tech Advanced" />
            <div id="seach-container">
              <input placeholder="Oque você está procurando ?" type="text" />
              <div>
                <button type="button">
                <AiOutlineSearch 
                  color="white"
                  size={15}
                  />
                </button>
              </div>
              <div className="icons">
              <AiOutlineUser 
              color="white"
              size={30}
              />
              </div>
              <div className="icons">
              <AiOutlineShoppingCart 
              color="white"
              size={30}
              />
              </div>
            </div>
          </div>
          <div id="header-nav-container">
            <nav>
              <a className="nav-link" href="">
                Ofertas do dia{" "}
              </a>
              <a className="nav-link" href="">
                Mais vendidos
              </a>
              <a className="nav-link" href="">
                Brinquedos e Jogos
              </a>
              <a className="nav-link" href="">
                Games
              </a>
              <a className="nav-link" href="">
                Eletrônicos
              </a>
              <a className="nav-link" href="">
                Computadores
              </a>
              <a className="nav-link" href="">
                Acessorios
              </a>
              <a className="nav-link" href="">
                Ideias para presente
              </a>
            </nav>
          </div>
        </header>
    </Container>
  );
}

export default Header;
