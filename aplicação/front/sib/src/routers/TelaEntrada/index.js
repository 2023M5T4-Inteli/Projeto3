import "./Entrada.css";
import Logo from "./img/logoCoover.svg";
import verificar from "./img/IconCheck.png";

export default function App() {
  return (
    <div className="logo">
      <img src={Logo} alt="Logo" />
      <br />
            <br />
      <div className="IconCheck">
        <img src={verificar} alt="IconCheck" />
        <p>Wallet conectada com sucesso!</p>{" "}
        {/* aqui está o novo elemento <p> */}
        <br />
        <div className="endereco">
          <p className="texto">Endereço da wallet</p>
          <div className="caixas">
            <input
              className="botao1"
              type="text"
              placeholder="1x0581505aE93b6191F0CF6F95f8658b5D401201g6"
            />
            <br />
            <br />
          </div>
        </div>
        <div className="saldo">
          <p className="texto">Saldo</p>
          <div className="caixas"> </div>
        </div>
        <div className="caixas">
          <input className="botao2" type="text" placeholder="20 ETH" />
          <br />
          <br />
          <p>Deseja continuar com esse endereço de wallet ou alterar?</p>
        </div>
        <div className="continuar">
          <p className="escrita">
            Continuar
            <br />
            <br />
            <div className="desconectar">
              <p className="escrita2">Desconectar</p>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
