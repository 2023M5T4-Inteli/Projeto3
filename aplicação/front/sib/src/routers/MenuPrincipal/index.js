import "./Menu.css";
import suaLogo from "../../Assets/logoCoover.svg";
import icone1 from "../../Assets/icone1Valor.png";
import icone2 from "../../Assets/icone2Pessoa.png";
import icone3 from "../../Assets/icone3Contrato.png";
import icone4 from "../../Assets/icone4Dashboard.png";
import icone5 from "../../Assets/icone5SaibaMais.png";
import vector from "../../Assets/Vector.png";

export const Menu = () => {
  return (
    <div className="logo">
      <div className="texto">
        <img src={suaLogo} alt="Sua Logo" />
        <p> Pagina Inicial </p>
        <div className="button-container">
          <button> Contratos </button>
          <div>
            <img className="icone1" src={icone1} alt="icone1" />
            <img className="vector" src={vector} alt="vector" />
          </div>
          <button> Meus Contratos </button>
          <div>
            <img className="icone2" src={icone2} alt="icone2" />
            <img className="vector" src={vector} alt="vector" />
          </div>
          <button> Dados para o contrato </button>
          <div>
            <img className="icone3" src={icone3} alt="icone3" />
            <img className="vector" src={vector} alt="vector" />
          </div>
          <button> Indenização </button>
          <div>
            <img className="icone4" src={icone4} alt="icone4" />
            <img className="vector" src={vector} alt="vector" />
          </div>
          <button> Saiba Mais</button>
          <div>
            <img className="icone5" src={icone5} alt="icone5" />
            <img className="vector" src={vector} alt="vector" />
          </div>
        </div>
        <button className="botao-sair"> Sair do aplicativo </button>
      </div>
    </div>
  );
}

export default Menu;
