import "./styles.css";
import Logo from "./img/logo.png";
import seta from "./img/setinha.png";

export default function App() {
  return (
    <div className="seta">
        <img src={seta} alt="seta" />
        
        <div className="logo">
      <img src={Logo} alt="Logo" />
      <br />
            <br />
      
        <p>“aef112pop32321dsadadads”</p>{" "}
        {/* aqui está o novo elemento <p> */}
        <br />
        <div className="endereco">
          <p className="texto">Saldo mínimo</p>
          <div className="caixas">
            <input
              className="botao1" type="text" placeholder="20"
            />
            <br />
            <br />
          </div>
        </div>
        <div className="saldo">
          <p className="texto">Saldo atual</p>
          <div className="caixas"> </div>
        </div>
        <div className="caixas">
          <input className="botao2" type="text" placeholder="13 " />
          <br /><br /><br /><br /><br />
    
          <br />   <br />
        </div>
        <div className="depositar">
          <p className="escrita">
          Depositar  

          </p>
        </div>
      </div>
    </div>
  );
}
