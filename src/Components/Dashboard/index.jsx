import { Container } from "./style.jsx";
import supnot from "../../Assets/SupNot.jpg";
import cadeira from "../../Assets/CadeiraGamer.jpg";
import Redmi11 from "../../Assets/Redminote11.jpg";
import ssdK from "../../Assets/ssd.jpg"
import impressora from "../../Assets/impressora.jpg";
import webcam from "../../Assets/Webcam.jpg"
import notbook from "../../Assets/notbookGamer.jpg"
import mouse from "../../Assets/Mouserazer.jpg"
import pastatermica from "../../Assets/Pastatermica.jpg"
import monitorgamer from "../../Assets/MonitorGamer.jpg"

export function Dashboard() {
  return (
    <Container>
      <div className="side-menu-itens">
        <ul>
          <li>
            <a href="#">Apps e Jogos</a>
          </li>
          <li>
            <a href="#">Brinquedos e Jogos</a>
          </li>
          <li>
            <a href="#">Computadores e informatica</a>
          </li>
          <li>
            <a href="#">Dispositivos e acessórios</a>
          </li>
          <li>
            <a href="#">DVD e Blu-ray</a>
          </li>
          <li>
            <a href="#">Eletrônicos</a>
          </li>
          <li>
            <a href="#">Games e consoles</a>
          </li>
          <li>
            <a href="#">Gift Cards</a>
          </li>
        </ul>
      </div>

      <div className="itensBrowse">
        <div className="item">
          <div className="image-itens">
          <a href="#"> <img src={supnot} alt="Suporte para notbook" /></a>
          </div>
          <div className="description">
            <a href="#"> Suporte para Notebook, OCTOO, Uptable, UP-BL, Preto</a>
            <p className="price">R$1.309,40</p>
          </div>
          <button>Comprar</button>
        </div>
        <div className="item">
        <div className="image-itens">
          <a href="#"> <img src={cadeira} alt="Cadeira Gamer" /></a>
          </div>
         <div className="description">
          <a href="#"> Cadeira Gamer Profissional TGC12 Preta ThunderX3.</a>
          <p className="price">R$950,00</p>
         </div>
         <button>Comprar</button>
        </div>
        <div className="item">
        <div className="image-itens">
          <a href="#"> <img src={Redmi11} alt="Celular" /></a>
          </div>
          <div className="description">
            <a href="#"> REDMI NOTE 11 GRAPHITE GRAY 4GB RAM 128GB ROM</a>
            <p className="price">R$1.100,40</p>
          </div>
          <button>Comprar</button>
        </div>
        <div className="item">
          <div className="image-itens">
            <a href="#">
              <img src={ssdK} alt="ssd para notbook" />
            </a>
          </div>
          <div className="description">
            <a href="#"> SSD A400, Kingston, SA400S37/240G, Cinza</a>
            <p className="price">R$250,00</p>
          </div>
          <button>Comprar</button>
        </div>
        <div className="item">
        <div className="image-itens">
          <a href="#"> <img src={impressora} alt="Impressora" /></a>
          </div>
          <div className="description">
            <a href="#"> Multifuncional Epson EcoTank L3250 - Tanque de Tinta Colorida, Wi-Fi Direct, USB, Bivolt</a>
            <p className="price">R$1.100,00</p>
          </div>
          <button>Comprar</button>
        </div>
        <div className="item">
        <div className="image-itens">
          <a href="#"> <img src={webcam} alt="webcam" /></a>
          </div>
          <div className="description">
            <a href="#"> Webcam Full HD Logitech C920s com Microfone Embutido e Proteção de Privacidade </a>
            <p className="price">R$800,00</p>
          </div>
          <button>Comprar</button>
        </div>
        <div className="item">
        <div className="image-itens">
          <a href="#"> <img src={notbook} alt="notbook" /></a>
          </div>
          <div className="description">
            <a href="#"> ACER Notebook Gamer Nitro 5 N515-55-59T4, Intel Core I5 10ª geração, 8GB, 512GB SDD, NVIDIA GTS 1650, Windows, preto, 15.6 Polegadas </a>
            <p className="price">R$4.543,40</p>
         </div>
         <button>Comprar</button>
        </div>
        <div className="item">
        <div className="image-itens">
          <a href="#"> <img src={mouse} alt="Mousek" /></a>
          </div>
          <div className="description">
            <a href="#"> Mouse Gamer Razer Viper Mini Chroma 6 botões 8500DPI, Preto</a>
            <p className="price">R$235,40</p>
          </div>
          <button>Comprar</button>
        </div>
        <div className="item">
        <div className="image-itens">
          <a href="#"> <img src={pastatermica} alt="PastaTermica" /></a>
          </div>
          <div className="description">
            <a href="#"> Pasta Térmica Cooler Master MasterGel Regular, 4g, 1.5ml, Cinza, 5 W/m-K</a>
            <p className="price">R$100,00</p>
          </div>
          <button>Comprar</button>
        </div>
        <div className="item">
        <div className="image-itens">
          <a href="#"> <img src={monitorgamer} alt="Monitor Gamer" /></a>
          </div>
          <div className="description">
            <a href="#"> Monitor Gamer AOC Hero 24" 144Hz IPS 1ms AMD FreeSync 24G2</a>
            <p className="price">R$1.499,99</p>
          </div>
          <button>Comprar</button>
        </div>
      </div>
      
      
    </Container>
  );
}
