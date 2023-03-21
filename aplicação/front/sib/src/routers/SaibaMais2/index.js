import "./index.css";
import Logo from "./img/logoCoover.svg";
import Caixa from "./img/caixaverde.png";
import Escudo from "./img/IconEscudo.png";
import hour from "./img/hour.png";

export default function App() {
  return (
    <div className="logoCoover">
      <img src={Logo} alt="Logo" />
      <img src={hour} alt="hour" />

      <div className="caixa">
        <img className="Caixa" src={Caixa} alt="Caixa" />
        <img className="Escudo" src={Escudo} alt="Escudo" />

        <p className="texto1">Sobre a Coover</p>
      </div>

      <div className="caixa2">
        <p className="texto2">
          Utilizamos tecnologia para simplificar e agilizar o processo de
          contratação de seguros.
        </p>
      </div>

      <div className="caixa3">
        <p className="texto3">
          Empresa de seguros focada em melhorar a usabilidade dos nossos
          usuários.{" "}
        </p>
      </div>

      <div className="caixa4">
        <p className="texto4">
          Oferecemos uma ampla gama de seguros. Nossos clientes podem comparar
          diferentes planos de seguros e escolher o que melhor atende às suas
          necessidades e orçamento.
        </p>
      </div>
    </div>
  );
}
